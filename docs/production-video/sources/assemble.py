#!/usr/bin/env python3
"""Assemble les 16 CLAUDE.md de cours : Partie 1 (gabarit commun) + Partie 2 (cours), puis contrôle.

Usage : python3 assemble.py [--check-only]

Maintenance : pour propager une modification de la Partie 1 à tous les cours, modifier partA/PARTIE1.tpl.md
puis relancer ce script. Sans dossier partB/, la Partie 2 est relue dans final/<cours>_CLAUDE.md (à partir du
titre « # PARTIE 2 — LE COURS »).
"""
import pathlib
import re
import sys

BASE = pathlib.Path(__file__).resolve().parent
TPL = (BASE / "partA" / "PARTIE1.tpl.md").read_text(encoding="utf-8")

FILME = dict(
    fmt="filme",
    format="Filmé — face caméra, captures d'écran et motion graphics",
    debit="120 à 130 mots par minute, soit 620 à 820 mots par vidéo",
)
MOTION = dict(
    fmt="motion",
    format="Motion graphics et captures d'écran, voix off clonée de l'owner",
    debit="115 à 120 mots par minute, soit 340 à 460 mots par vidéo",
    nb="5 vidéos",
    duree="3 à 5 min (cible 4:00)",
)
A_DESIGNER = "à désigner (son nom et sa photo figureront sur les cartes présentateur)"

COURSES = [
    dict(FILME, file="01-ia-expliquee-simplement", num="1", titre="L'IA expliquée simplement", owner="Idriss",
         slug="ia-expliquee-simplement", prefixe="is", nb="7 vidéos", duree="5 à 8 min (cible 6:00)", lessons=7),
    dict(FILME, file="02-agents-ia", num="2", titre="Agents IA : construire son premier agent", owner="Idriss",
         slug="agents-ia", prefixe="ag", nb="7 vidéos", duree="5 à 8 min (cible 6:30)", lessons=7),
    dict(FILME, file="03-vibe-coding", num="3", titre="Vibe coding : créer un site web avec l'IA, sans coder",
         owner="Aminou Laouali Abdou", slug="vibe-coding", prefixe="vc", nb="5 vidéos",
         duree="4 à 6:30 min (≈ 25 min au total)", lessons=5),
    dict(FILME, file="04-business-ia", num="4", titre="Lancer et développer son business avec l'IA",
         owner="Aminou Laouali Abdou", slug="business-ia", prefixe="bz", nb="6 vidéos",
         duree="5 à 8 min (cible 6:00)", lessons=6),
    dict(FILME, file="05-visuels-videos-ia", num="5", titre="Créer visuels et vidéos avec l'IA",
         owner="Aminou Laouali Abdou", slug="visuels-videos-ia", prefixe="vv", nb="6 vidéos",
         duree="5 à 8 min (cible 6:00)", lessons=6),
    dict(FILME, file="A1-ia-ong-developpement", num="Alt", titre="IA pour les ONG et le développement",
         owner="Aminou Laouali Abdou", slug="ia-ong-developpement", prefixe="on", nb="6 vidéos",
         duree="5 à 8 min (cible 6:00)", lessons=6),
    dict(MOTION, file="06-ia-educateurs", num="6", titre="IA pour les éducateurs", owner=A_DESIGNER,
         slug="ia-educateurs", prefixe="ed", lessons=5),
    dict(MOTION, file="07-ia-agriculture", num="7", titre="IA et agriculture", owner="Judicael",
         slug="ia-agriculture", prefixe="ac", lessons=5),
    dict(MOTION, file="08-automatiser-sans-coder", num="8", titre="Automatiser son travail sans coder",
         owner="Judicael", slug="automatiser-sans-coder", prefixe="au", lessons=5),
    dict(MOTION, file="09-ia-taches-creatives", num="9", titre="L'IA pour les tâches créatives",
         owner="Aminou Laouali Abdou", slug="ia-taches-creatives", prefixe="cr", lessons=5),
    dict(MOTION, file="10-securite-numerique-ia", num="10", titre="Arnaques, deepfakes et sécurité numérique",
         owner=A_DESIGNER, slug="securite-numerique-ia", prefixe="sn", lessons=5),
    dict(MOTION, file="11-excel-ia", num="11", titre="Excel + IA : analyser ses données en une heure",
         owner=A_DESIGNER, slug="excel-ia", prefixe="xl", lessons=5),
    dict(MOTION, file="12-etudier-rediger-ia", num="12", titre="Étudier et rédiger avec l'IA", owner=A_DESIGNER,
         slug="etudier-rediger-ia", prefixe="et", lessons=5),
    dict(MOTION, file="13-ia-administration", num="13", titre="IA pour l'administration", owner=A_DESIGNER,
         slug="ia-administration", prefixe="ad", lessons=5),
    dict(MOTION, file="14-ia-sante-communautaire", num="14", titre="IA et santé communautaire", owner=A_DESIGNER,
         slug="ia-sante-communautaire", prefixe="sa", lessons=5),
    dict(MOTION, file="15-outils-ia-gratuits", num="15", titre="Choisir le bon outil IA gratuit", owner=A_DESIGNER,
         slug="outils-ia-gratuits", prefixe="og", lessons=5),
]

SUB_FILME = ["#### Fiche", "#### Script", "#### Liste des plans", "#### Montage idéal", "#### Versions EN / HA / DJE"]
SUB_MOTION = ["#### Fiche", "#### Script v1 (à valider par l'owner)", "#### Captures à fournir par l'owner",
              "#### Notes de script"]
TOP = ["# PARTIE 2 — LE COURS", "## 2.1 Fiche du cours", "## 2.2 Ce que l'apprenant saura faire",
       "## 2.3 Plan du cours", "## 2.5 Les leçons", "## 2.6 Captures et éléments à préparer"]

# Motifs à relire à la main (pas forcément des fautes).
SUSPECTS = [
    (r"\b(GPT|Claude|Gemini|Llama|Mistral|Sonnet|Opus|Haiku|Veo|Imagen)[- ]?\d+(\.\d+)?\b", "numéro de version"),
    (r"\b(o1|o3|o4|GPT-4o|4o)\b", "nom de modèle"),
    (r"\b\d[\d  .,]*\s?(€|\$|USD|dollars?|euros?)\b", "montant en devise"),
    (r"\b\d+[.,]?\d*\s?%", "pourcentage (source ?)"),
    (r"\bmeilleur(e|s)?\b", "superlatif"),
    (r"r[ée]volutionnaire", "superlatif"),
]


def render_part1(c):
    keep, drop = ("FILME", "MOTION") if c["fmt"] == "filme" else ("MOTION", "FILME")
    text = re.sub(rf"^\[\[{drop}\]\]\n.*?^\[\[/{drop}\]\]\n", "", TPL, flags=re.S | re.M)
    text = re.sub(rf"^\[\[/?{keep}\]\]\n", "", text, flags=re.M)
    values = {
        "NUM": c["num"], "TITRE": c["titre"], "SLUG": c["slug"], "PREFIXE": c["prefixe"],
        "FORMAT": c["format"], "OWNER": c["owner"], "NB": c["nb"], "DUREE": c["duree"], "DEBIT": c["debit"],
    }
    for key, value in values.items():
        text = text.replace("{{" + key + "}}", value)
    leftovers = re.findall(r"\{\{[A-Z]+\}\}|\[\[/?[A-Z]+\]\]", text)
    if leftovers:
        raise SystemExit(f"{c['file']}: marqueurs non remplacés {set(leftovers)}")
    return text


def vo_words_motion(section):
    words = 0
    for m in re.finditer(r"VO\s*:\s*«(.*?)»", section, flags=re.S):
        words += len(re.findall(r"[\wÀ-ÿ'’-]+", m.group(1)))
    return words


def spoken_words_filme(section):
    m = re.search(r"#### Script\n(.*?)\n#### Liste des plans", section, flags=re.S)
    if not m:
        return 0
    body = m.group(1)
    body = re.sub(r"^Durée estimée.*$", "", body, flags=re.M)
    body = re.sub(r"\*\*\[[^\]]*\]\*\*", " ", body)          # balises de plan en gras
    body = re.sub(r"\[(PAUSE|SILENCE)[^\]]*\]", " ", body)
    return len(re.findall(r"[\wÀ-ÿ'’-]+", body))


def check(c, part2):
    issues, notes = [], []
    for h in TOP:
        if h not in part2:
            issues.append(f"titre manquant : {h}")
    if c["fmt"] == "filme" and "## 2.4 Plan de tournage idéal" not in part2:
        issues.append("titre manquant : ## 2.4 Plan de tournage idéal")
    if c["fmt"] == "motion" and "## 2.4 Direction artistique du cours" not in part2:
        issues.append("titre manquant : ## 2.4 Direction artistique du cours")
    lessons = re.split(r"^### Leçon ", part2, flags=re.M)[1:]
    if len(lessons) != c["lessons"]:
        issues.append(f"{len(lessons)} leçons au lieu de {c['lessons']}")
    subs = SUB_FILME if c["fmt"] == "filme" else SUB_MOTION
    for i, lesson in enumerate(lessons, 1):
        lesson = lesson.split("\n## 2.6")[0]
        for s in subs:
            if s + "\n" not in lesson:
                issues.append(f"leçon {i} : sous-section manquante « {s} »")
        if c["fmt"] == "motion":
            n = vo_words_motion(lesson)
            if not 320 <= n <= 480:
                notes.append(f"leçon {i} : {n} mots de VO (cible 340–460)")
            else:
                notes.append(f"leçon {i} : {n} mots de VO")
        else:
            n = spoken_words_filme(lesson)
            notes.append(f"leçon {i} : ~{n} mots dans le script (cible 620–820 mots dits)")
        q = len(re.findall(r"\*\*Réponse\s*:\s*[A-D]\*\*", lesson))
        if q != 5:
            issues.append(f"leçon {i} : {q} questions de quiz repérées au lieu de 5")
    for pattern, label in SUSPECTS:
        for m in re.finditer(pattern, part2, flags=re.I):
            line = part2.count("\n", 0, m.start()) + 1
            notes.append(f"à relire ({label}) ligne {line} : {m.group(0)!r}")
    return issues, notes


def main():
    check_only = "--check-only" in sys.argv
    out_dir = BASE.parent / "claude-md"
    out_dir.mkdir(exist_ok=True)
    total_issues = 0
    for c in COURSES:
        src = BASE / "partB" / f"{c['file']}.md"
        if not src.exists() and (BASE.parent / "claude-md" / f"{c['file']}_CLAUDE.md").exists():
            src = BASE.parent / "claude-md" / f"{c['file']}_CLAUDE.md"   # maintenance : Partie 2 relue depuis le fichier final
        if not src.exists():
            print(f"✗ {c['file']} : Partie 2 absente")
            total_issues += 1
            continue
        part2 = src.read_text(encoding="utf-8").strip() + "\n"
        start = part2.find("# PARTIE 2 — LE COURS")
        if start > 0:
            part2 = part2[start:]
        issues, notes = check(c, part2)
        total_issues += len(issues)
        final = render_part1(c) + part2
        status = "✓" if not issues else "✗"
        print(f"{status} {c['file']} — {len(final):,} caractères — {len(issues)} problème(s)")
        for i in issues:
            print(f"    PROBLÈME {i}")
        for n in notes:
            print(f"    · {n}")
        if not check_only:
            (out_dir / f"{c['file']}_CLAUDE.md").write_text(final, encoding="utf-8")
    if not check_only:
        (out_dir / "00-LISEZMOI-OWNERS.md").write_text(
            (BASE / "partA" / "00-LISEZMOI-OWNERS.md").read_text(encoding="utf-8"), encoding="utf-8")
    print(f"\nTotal : {total_issues} problème(s)")


if __name__ == "__main__":
    main()
