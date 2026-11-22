/**
 * A small stand-in for the Supabase client, for unit tests of the production
 * (Supabase) code paths. Every query records what it was asked and resolves to
 * the result the test configured for its table or RPC.
 */
export interface RecordedCall {
  kind: 'from' | 'rpc';
  target: string;
  steps: Array<{ method: string; args: unknown[] }>;
}

type Result = { data?: unknown; error?: unknown };

export function createFakeSupabase(results: {
  tables?: Record<string, Result | ((call: RecordedCall) => Result)>;
  rpc?: Record<string, Result | ((args: unknown) => Result)>;
} = {}) {
  const calls: RecordedCall[] = [];

  const builder = (call: RecordedCall, resolve: () => Result) => {
    const proxy: Record<string, unknown> = new Proxy(
      {},
      {
        get(_target, property: string) {
          if (property === 'then') {
            const result = resolve();
            return (onFulfilled: (value: Result) => unknown, onRejected?: (reason: unknown) => unknown) =>
              Promise.resolve({ data: result.data ?? null, error: result.error ?? null }).then(onFulfilled, onRejected);
          }
          return (...args: unknown[]) => {
            call.steps.push({ method: property, args });
            return proxy;
          };
        },
      }
    );
    return proxy;
  };

  const client = {
    from(table: string) {
      const call: RecordedCall = { kind: 'from', target: table, steps: [] };
      calls.push(call);
      return builder(call, () => {
        const configured = results.tables?.[table];
        return typeof configured === 'function' ? configured(call) : configured ?? {};
      });
    },
    rpc(name: string, args: unknown) {
      const call: RecordedCall = { kind: 'rpc', target: name, steps: [{ method: 'rpc', args: [args] }] };
      calls.push(call);
      const configured = results.rpc?.[name];
      const result = typeof configured === 'function' ? configured(args) : configured ?? {};
      return Promise.resolve({ data: result.data ?? null, error: result.error ?? null });
    },
    functions: {
      invoke: (name: string, options: unknown) => {
        const call: RecordedCall = { kind: 'rpc', target: `fn:${name}`, steps: [{ method: 'invoke', args: [options] }] };
        calls.push(call);
        const configured = results.rpc?.[`fn:${name}`];
        const result = typeof configured === 'function' ? configured(options) : configured ?? {};
        return Promise.resolve({ data: result.data ?? null, error: result.error ?? null });
      },
    },
  };

  return { client, calls };
}
