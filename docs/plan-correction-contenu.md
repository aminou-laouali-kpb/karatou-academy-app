> ETAT D APPLICATION (mis a jour apres execution)
>
> - D1 tranchee : option A. 18 occurrences de lettres crochetees supprimees des six lecons.
> - 57 corrections FR/EN appliquees ; typecheck, lint et 58 tests passent.
> - 42 corrections haoussa ECARTEES : en attente du relecteur natif (point bloquant, section 13.1 du contexte video).
> - D3 et D4, hors liste confirmee, appliquees : cl5 ne se contredit plus, cl6 ne couronne plus deux ingredients.
> - D2 et D5 restent a trancher (termes haoussa) : sans objet tant que la relecture native n a pas eu lieu.

PLAN DE CORRECTION — module « Introduction à Claude AI » (fichiers relus le 13/09)

Répertoire : `/Users/aminou/Documents/Karatou test/.claude/worktrees/intro-claude-ai-module-5ffbcd/src/data/lessons/introduction-claude-ai/`
Convention : ACTUEL = texte présent au mot près, NOUVEAU = texte prêt à coller (texte brut, zéro markdown). `[QUIZ]` = touche une option, une question ou une explication → voir section finale.
Toutes les propositions haoussa ci-dessous sont écrites **sans lettres crochetées**, conformément à la décision D1 (option A). Si D1 tranche autrement, les faire repasser par un relecteur natif.

---

## cl1.ts

### Incohérences

**1. [cl1-02 + cl1-26] Nommer « hallucination » dans le corps — content[1], 3 langues**
- FR ACTUEL : `Ce n'est pas une source d'autorité. Il peut produire une réponse fausse mais parfaitement crédible, bien écrite, sans jamais signaler qu'il hésite.`
- FR NOUVEAU : `Ce n'est pas une source d'autorité. Il peut produire une réponse fausse mais parfaitement crédible, bien écrite, sans jamais signaler qu'il hésite : on appelle cela une hallucination.`
- EN ACTUEL : `It is not an authority: it can produce a false but perfectly credible answer without signalling any doubt.`
- EN NOUVEAU : `It is not an authority: it can produce a false but perfectly credible answer without signalling any doubt — this is called a hallucination.`
- HA ACTUEL : `Ba tushen gaskiya ba ne: yana iya bayar da amsa karya amma mai kyan gani.`
- HA NOUVEAU : `Ba tushen gaskiya ba ne: yana iya bayar da amsa karya amma mai gamsarwa sosai, ba tare da ya nuna wata shakku ba; ana kiran hakan hallucination.`
- La phrase suivante (« C'est le risque principal, et le chapitre 5 y est entièrement consacré. ») reste inchangée. **Ne rien modifier dans cl5.**

**2. [cl1-20] HA — la relance ne doit pas porter le même nom que l'erreur du quiz (3 endroits)**
- content[3] ACTUEL : `kana iya sake tambaya — “ya yi tsawo, ka rage zuwa layi biyar” — tattaunawar na gyaruwa a hankali.`
  NOUVEAU : `kana iya neman gyara — “ya yi tsawo, ka rage zuwa layi biyar” — tattaunawar na gyaruwa a hankali.`
- practice.instructions[2] ACTUEL : `Ka sake tambaya sau biyu: ka nemi gajeriyar sigar, sannan ka nemi sauya salon magana.`
  NOUVEAU : `Ka nemi gyara sau biyu: ka nemi gajeriyar sigar, sannan ka nemi sauya salon magana.`
- glossary, `term` ACTUEL : `Sake tambaya` → NOUVEAU : `Neman gyara` (définition inchangée).
- quiz[1] option C (`Ka tambaya sau uku…`) reste inchangée. **Dépend de la décision D2.**

**3. [cl1-25] HA practice.observation — la distinction en trois temps est perdue**
- ACTUEL : `ko amsar gaskiya ce ko karya`
- NOUVEAU : `ko amsar gaskiya ce, ko karya ce, ko kuwa karya ce da aka bayar da cikakken tabbaci`

### Douteux

**4. [cl1-28] HA — apostrophes typographiques contradictoires (content[2] et example.impact)**
- ACTUEL : `bayan ‘yan sa’o‘i` → NOUVEAU : `bayan ’yan sa’o’i`
- ACTUEL : `cikin ‘yan mintuna` → NOUVEAU : `cikin ’yan mintuna`
- (remplacer chaque U+2018 `‘` par U+2019 `’` ; aucune autre occurrence dans le fichier)

### Clarté

**5. [cl1-06] FR content[0], dernier paragraphe**
- ACTUEL : `Et comme tout stagiaire, son travail se relit avant d'être envoyé.`
- NOUVEAU : `Et comme tout stagiaire, vous devez relire son travail vous-même avant de l'envoyer.`

**6. [cl1-07] EN content[0], dernier paragraphe**
- ACTUEL : `It works well when you explain the context, and its output is always reviewed before it is sent.`
- NOUVEAU : `It works well when you explain the context, and you must always read its output yourself before you send it.`

**7. [cl1-18] EN content[3]**
- ACTUEL : `You can push back — "too long, make it five lines", "more direct" — the conversation improves through exchange.`
- NOUVEAU : `You can ask for changes — "too long, make it five lines", "more direct" — this kind of message is called a follow-up prompt, and the conversation improves through exchange.`

**8. [cl1-19] EN practice.instructions[2]**
- ACTUEL : `Push back at least twice: ask for a shorter version, then for a different tone.`
- NOUVEAU : `Ask for changes at least twice: ask for a shorter version, then for a different tone (more formal, or more direct).`

**9. [cl1-30] HA glossary, terme `Mataimaki na tattaunawa`**
- ACTUEL : `Kayan aiki da ake magana da shi da harshe mai sauki, ba da form ko code ba.`
- NOUVEAU : `Kayan aiki da ake rubuta masa da harshe mai sauki, ba ta hanyar cike fom ko rubuta code ba.`

**10. [QUIZ] [cl1-05] FR quiz[1].explanation**
- ACTUEL : `Répéter la question ne prouve rien : un modèle peut répéter la même erreur.`
- NOUVEAU : `Répéter la question ne prouve rien : Claude peut répéter la même erreur.`

**11. [QUIZ] [cl1-22] quiz[0].explanation, FR + EN (HA inchangé)**
- FR ACTUEL : `Claude est un assistant conversationnel : on lui écrit une demande en langage courant, il répond en texte. Il n'indexe pas le web comme un moteur de recherche et ne stocke pas les documents de votre organisation.`
- FR NOUVEAU : `Claude est un assistant conversationnel : on lui écrit une demande en langage courant, il répond en texte. Il ne fonctionne pas comme un moteur de recherche, qui renvoie une liste de pages à ouvrir soi-même, et il ne stocke pas les documents de votre organisation.`
- EN ACTUEL : `Claude is a conversational assistant: you write a request in plain language and it answers in text. It does not index the web and does not store your organization's documents.`
- EN NOUVEAU : `Claude is a conversational assistant: you write a request in plain language and it answers in text. It does not work like a search engine, which returns a list of pages for you to open yourself, and it does not store your organization's documents.`

---

## cl2.ts

### Incohérences

**12. [cl2-14 + cl2-17] Le contexte : un seul superlatif, et la matière incluse — content[1] + glossaire, 3 langues** (fusion demandée par le juge)
- FR content[1], 1er § ACTUEL : `Le contexte — qui vous êtes, pour qui vous écrivez, dans quelle situation. C'est l'ingrédient le plus souvent oublié et celui qui change le plus de choses.`
  NOUVEAU : `Le contexte — qui vous êtes, pour qui vous écrivez, dans quelle situation, et la matière que Claude ne peut pas connaître : vos notes, les dates, les chiffres. C'est l'ingrédient le plus souvent oublié.`
- FR glossaire `Contexte` ACTUEL : `Qui vous êtes, pour qui vous produisez ce texte et dans quelle situation. L'ingrédient le plus souvent oublié.`
  NOUVEAU : `Qui vous êtes, pour qui vous produisez ce texte, dans quelle situation, et la matière que Claude ne peut pas connaître : vos notes, les dates, les chiffres. L'ingrédient le plus souvent oublié.`
- EN content[1] ACTUEL : `Context — who you are, who you are writing for, in what situation. The most frequently skipped ingredient, and the one that changes the most.`
  NOUVEAU : `Context — who you are, who you are writing for, in what situation, and the material Claude cannot know: your notes, the dates, the figures. The most frequently skipped ingredient.`
- EN glossaire `Context` ACTUEL : `Who you are, who the text is for and in what situation. The most frequently skipped ingredient.`
  NOUVEAU : `Who you are, who the text is for, in what situation, and the material Claude cannot know: your notes, the dates, the figures. The most frequently skipped ingredient.`
- HA content[1] ACTUEL : `Mahalli — wane ne kai, ga wa kake rubutawa, a wane yanayi. Shi ne aka fi mantawa, kuma shi ne ya fi canza komai.`
  NOUVEAU : `Mahalli — wane ne kai, ga wa kake rubutawa, a wane yanayi, da bayanin da Claude ba zai iya sani ba: rubutunka, kwanan wata, lambobi. Shi ne aka fi mantawa.`
- HA kamus `Mahalli` ACTUEL : `Wane ne kai, ga wa kake rubutawa da a wane yanayi. Shi aka fi mantawa.`
  NOUVEAU : `Wane ne kai, ga wa kake rubutawa, a wane yanayi, da bayanin da Claude ba zai iya sani ba: rubutunka, kwanan wata, lambobi. Shi aka fi mantawa.`

**13. [cl2-16] La relance existe aussi avant la rédaction — glossaire, 3 langues**
- FR `Relance` ACTUEL : `Message de correction envoyé après une première réponse : raccourcir, changer de ton, rectifier un fait, demander des variantes.`
  NOUVEAU : `Message envoyé pour orienter ou corriger le travail de Claude : avant la rédaction, pour lui demander quelles informations lui manquent ; après une première réponse, pour raccourcir, changer de ton, rectifier un fait ou demander des variantes.`
- EN `Follow-up` ACTUEL : `A corrective message sent after a first answer: shorten, change tone, fix a fact, ask for variants.`
  NOUVEAU : `A message sent to steer or correct Claude's work: before it writes, to ask what information it is missing; after a first answer, to shorten, change the tone, fix a fact or ask for variants.`
- HA `Sake tambaya` ACTUEL : `Sakon gyara bayan amsa ta farko: rage tsawo, sauya salo, gyara bayani, neman sigogi daban.`
  NOUVEAU : `Sakon da ake aikawa don shiryar da aikin Claude ko gyara shi: kafin ya rubuta, don tambayarsa wane bayani ya rasa; bayan amsa ta farko, don rage tsawo, sauya salo, gyara bayani ko neman sigogi daban.`
- (terme HA : voir D2)

**14. [cl2-20] HA content[1], § « Misali » — deux ingrédients ne peuvent pas être « le plus oublié »**
- ACTUEL : `Misali — shi aka fi mantawa amma ya fi karfi.`
- NOUVEAU : `Misali — shi aka fi rena amma ya fi karfi.`

**15. [cl2-26] HA content[1], dernier § — « le format n'a pas d'importance » dit l'inverse de la leçon**
- ACTUEL : `Tsarin bai damu ba; kasancewarsu duka ne ke da muhimmanci.`
- NOUVEAU : `Ko wane tsari ka bi ba kome ba ne; abin da ke da muhimmanci shi ne dukkan sinadarai hudu su kasance.`

**16. [cl2-27] HA content[2], dernière phrase — la réserve « presque » a disparu**
- ACTUEL : `amma tana bayar da rubutun da za a aika kai tsaye.`
- NOUVEAU : `amma tana bayar da rubutun da kusan za a iya aika shi yadda yake.`

**17. [cl2-28] HA — orthographe des caractères spéciaux : ne pas traiter cl2 seul → décision D1.**

### Douteux

**18. [cl2-29] HA glossaire, terme `Umarni (prompt)` — bénéficiaire inversé**
- ACTUEL : `Sakon da kake nema wa Claude wani abu. Umarni mai kyau bayani ne, ba tambaya ta wucewa ba.`
- NOUVEAU : `Sakon da kake rokon Claude ya yi maka wani abu. Umarni mai kyau bayani ne, ba tambaya ta wucewa ba.`
- À faire confirmer par un relecteur haoussa (constat lui-même marqué douteux par l'auteur).

**19. [QUIZ] [cl2-30] HA quiz[1] option A — faux ami « mai sana'a »**
- ACTUEL : `Rubuta “ka rubuta da kyau” da “ka zama mai sana’a”.`
- NOUVEAU : `Rubuta “ka rubuta da kyau” da “ka nuna kwarewa”.`

### Clarté

**20. [cl2-06] FR content[1], dernier §**
- ACTUEL : `Retenez l'ordre contexte, tâche, format, exemple — mais peu importe l'ordre réel : ce qui compte, c'est qu'ils y soient tous les quatre.`
- NOUVEAU : `Retenez ces quatre mots : contexte, tâche, format, exemple. L'ordre dans lequel vous les écrivez n'a pas d'importance ; ce qui compte, c'est qu'ils soient tous les quatre présents.`

**21. [cl2-10] FR content[0], 2e §**
- ACTUEL : `et vous passez ensuite autant de temps à le réécrire qu'à l'avoir écrit vous-même`
- NOUVEAU : `et vous passez ensuite autant de temps à le réécrire que si vous l'aviez écrit vous-même`

**22. [cl2-11] HA — « tsari » défini par lui-même (2 endroits)**
- content[1] ACTUEL : `Tsari — tsawo, tsari, salo, hanyar aikawa.`
  NOUVEAU : `Tsari — tsawo, yadda aka tsara rubutun, salo, hanyar aikawa.`
- kamus `Tsari` ACTUEL : `Siffar da ake so: tsawo, tsari, salo, hanyar aikawa. Idan ba ka fada ba, Claude zai zabi mai tsawo.`
  NOUVEAU : `Siffar da ake so: tsawo, yadda aka tsara rubutun, salo, hanyar aikawa. Idan ba ka fada ba, Claude zai zabi mai tsawo.`

**23. [QUIZ] [cl2-31] HA quiz[2] — le mot français « fil » n'est pas du haoussa**
- option A ACTUEL : `Ci gaba da tara gyare-gyare a fil daya har sai ya dace.`
  NOUVEAU : `Ci gaba da tara gyare-gyare a tattaunawa daya har sai ya dace.`
- explanation ACTUEL : `suna jan fil zuwa kowace hanya — gara a sake fadin bukatar gaba daya.`
  NOUVEAU : `suna jan tattaunawar zuwa kowace hanya — gara a sake fadin bukatar gaba daya.`

**24. [cl2-32] HA glossaire, terme `Misali` — définition tronquée**
- ACTUEL : `Rubutun da ka riga ka yi, aka manna a matsayin abin koyi na salo ko tsari. Hanya mafi tasiri.`
- NOUVEAU : `Rubutun da ka riga ka yi, aka manna a matsayin abin koyi na salo ko tsari. Ita ce hanya mafi tasiri don sa rubutun ya yi kama da naka ko na kungiyarka.`

---

## cl3.ts

### Incohérences

**25. [cl3-05] FR content[3], dernier § — la phrase dit l'inverse de son intention**
- ACTUEL : `Ce qu'on n'y met pas : exactement les mêmes choses qu'ailleurs.`
- NOUVEAU : `Ce qu'on n'y met pas : exactement ce qu'on ne met nulle part ailleurs — les documents confidentiels de la section précédente.`

**26. [cl3-18] content[2], 1re phrase — le risque du chapitre 1 ne disparaît pas (3 langues ; seule la 1re phrase change)**
- FR ACTUEL : `Le risque n'est plus celui du chapitre 1.` → NOUVEAU : `Le risque du chapitre 1 ne disparaît pas, il change de forme.`
- EN ACTUEL : `The risk is no longer the one from chapter 1.` → NOUVEAU : `The chapter 1 risk does not disappear, it changes shape.`
- HA ACTUEL : `Hadarin ba shi ne na darasi na 1 ba.` → NOUVEAU : `Hadarin darasi na 1 bai bace ba, ya sauya siffa.`
- Le reste du paragraphe reste inchangé dans les trois langues.

**27. [QUIZ] [cl3-22] HA quiz[2] option D — « sensibles » rendu par « importantes »**
- ACTUEL : `Aika bayanai masu muhimmanci, wadanda ake karewa a can.`
- NOUVEAU : `Aika bayanan sirri, wadanda ake karewa a can.`

### Clarté

**28. [cl3-04 + cl3-14] « Il complétera » → dire ce qu'il complète (content[0], 3 langues)**
- FR ACTUEL : `Une photo floue, prise de biais ou coupée donne une lecture fausse — et Claude ne vous préviendra pas toujours qu'il n'a pas réussi à lire. Il complétera.`
  NOUVEAU : `Une photo floue, prise de biais ou coupée donne une lecture fausse — et Claude ne vous préviendra pas toujours qu'il n'a pas réussi à lire. Il complétera : là où il n'a pas pu lire, il devine un texte plausible et vous le donne comme le reste.`
- EN ACTUEL : `A blurred, angled or cropped photo produces a false reading — and you will not always be told the reading failed. The gaps get filled.`
  NOUVEAU : `A blurred, angled or cropped photo produces a false reading — and you will not always be told the reading failed. The gaps get filled: where Claude could not read, it guesses plausible text and gives it to you like the rest.`
- HA ACTUEL : `Hoto mai duhu, na gefe ko yankakke yana bayar da karatu na karya — kuma ba koyaushe za a gaya maka cewa karatun bai yi nasara ba. Za a cike gurbin.`
  NOUVEAU : `Hoto da bai bayyana sosai ba, na gefe ko yankakke yana bayar da karatu na karya — kuma ba koyaushe za a gaya maka cewa karatun bai yi nasara ba. Za a cike gurbin: inda bai iya karantawa ba, sai ya yi hasashen rubutu mai kama da gaskiya ya ba ka shi kamar sauran.`
  (corrige aussi « photo sombre » → « photo floue », cl3-14)
- **[QUIZ]** HA quiz[0] option B ACTUEL : `Hoto mai duhu, na gefe ko yankakke yana bayar da karatu na karya, kuma ba koyaushe ake sanar da gazawar ba.`
  NOUVEAU : `Hoto da bai bayyana sosai ba, na gefe ko yankakke yana bayar da karatu na karya, kuma ba koyaushe ake sanar da gazawar ba.`

**29. [cl3-15] « Résumer » sans exemple de consigne — EN et HA, content[1]**
- EN : après `Chapter 2 applies in full: say who it is for, in how many points, from what angle.` AJOUTER : `For example: "Summarize this report in five points for a management committee deciding whether to extend the programme." That is not the same text at all.`
- HA : après `Darasi na 2 ya shafi nan gaba daya: fada wa wa ne, a maki nawa, daga wace fuska.` AJOUTER : `Misali: “Takaita wannan rahoto a maki biyar ga kwamitin gudanarwa da zai yanke shawara ko za a ci gaba da shirin.” Ba rubutu daya ba ne.`

**30. [cl3-23] L'instruction permanente n'est pas localisée — EN et HA, content[3]**
- EN ACTUEL : `always answer in French, factual tone, no administrative jargon, always cite your source`
  NOUVEAU : `always answer in English, factual tone, no administrative jargon, always cite your source`
- HA ACTUEL : `koyaushe ka amsa da faransanci, salo na gaskiya, ba jargon ba, koyaushe ka kawo tushe`
  NOUVEAU : `koyaushe ka amsa da Hausa, salo na gaskiya, ba jargon ba, koyaushe ka kawo tushe`

**31. [cl3-25] HA content[2], 1er §**
- ACTUEL : `yana danganta lamba ga layi mara kyau`
- NOUVEAU : `yana danganta lamba ga layin da bai dace ba`

**32. [cl3-26] EN — « commissioned summary » (2 endroits)**
- objective ACTUEL : `get a commissioned summary, extract precise information in a usable form`
  NOUVEAU : `get a summary made to your specification — who it is for, how many points, from what angle — extract precise information in a usable form`
- practice.instructions[1] ACTUEL : `Upload it and ask for a commissioned summary: who for, how many points, from what angle. Not "summarize this document".`
  NOUVEAU : `Upload it and ask for a summary made to your specification: who for, how many points, from what angle. Not "summarize this document".`

**33. [cl3-27] HA content[0], 2e § — « document manuscrit » contredit l'exemple qui suit**
- ACTUEL : `takardar da ke damunka galibi takarda ce ta hannu`
- NOUVEAU : `takardar da ke damunka galibi a kan takarda take`

**34. [QUIZ] [cl3-28] HA quiz[1] option B (bonne réponse) — impératif mal formé**
- ACTUEL : `Nema kowane maki ya kawo jimlar da ke cikin takardar asali.`
- NOUVEAU : `Nemi kowane maki ya kawo jimlar da ke cikin takardar asali.`

---

## cl4.ts

### Incohérences

**35. [cl4-23] HA content[2], dernier § — « locuteur natif » affaibli et raison supprimée**
- ACTUEL : `A kan harsunan gida, ka yi hankali. Inganci ya bambanta sosai tsakanin harsuna. Ka gwada a kan rubutun da ka san fassararsa kafin ka dogara. Kuma ga sakon da ke daure — kira zuwa taro, umarnin tsaro, bayanin lafiya — dubawar mai magana da harshen ba taka-tsantsan ba ce, wajibi ce.`
- NOUVEAU : `A kan harsunan gida, ka yi hankali. Inganci ya bambanta sosai tsakanin harsuna, kuma yana da wuya ka auna shi idan harshen ba naka ba ne tun haihuwa. Ka gwada a kan rubutun da ka san fassararsa kafin ka dogara. Kuma ga sakon da ke daure — kira zuwa taro, umarnin tsaro, bayanin lafiya — dubawar wanda harshen nasa ne tun haihuwa ba taka-tsantsan ba ce, wajibi ce.`

**36. [cl4-24] HA glossaire — terme et définition**
- `term` ACTUEL : `Dubawar mai harshe` → NOUVEAU : `Dubawar mai harshe tun haihuwa`
- définition ACTUEL : `Duba fassara da mai magana da harshen. Wajibi ne duk lokacin da sako ke daure: kira zuwa taro, umarnin tsaro, bayanin lafiya.`
  NOUVEAU : `Duba fassara da wanda harshen nasa ne tun haihuwa. Wajibi ne duk lokacin da sako ke daure: kira zuwa taro, umarnin tsaro, bayanin lafiya.`

**37. [cl4-25 (+ cl4-17 pour le glossaire)] HA — « bincike » (= recherche) employé pour « constat », alors que cl1 enseigne « ba injin bincike ba ne » (5 endroits)**
- content[3] ACTUEL : `ka nemi bincike uku, da abin da ya rasa don a yanke shawara`
  NOUVEAU : `ka nemi abubuwa uku da aka gano, da abin da ya rasa don a yanke shawara`
- example.solution ACTUEL : `ta nemi bincike uku, da abin da ya rasa don a yanke shawara`
  NOUVEAU : `ta nemi abubuwa uku da aka gano, da abin da ya rasa don a yanke shawara`
- example.impact ACTUEL : `A kan tebur, bincike biyu ta riga ta san su; na uku`
  NOUVEAU : `A kan tebur, abubuwa biyu da aka gano ta riga ta san su; na uku`
- **[QUIZ]** quiz[2].question ACTUEL : `Ka manna tebur ka samu bincike uku.` NOUVEAU : `Ka manna tebur ka samu abubuwa uku da aka gano.`
- glossaire `term` ACTUEL : `Bincike` → NOUVEAU : `Abin da aka gano` ; définition : voir entrée 41 (cl4-17), à appliquer une seule fois.

### Douteux

**38. [QUIZ] [cl4-29] quiz[2].explanation — « ce n'est pas un tableur » n'a pas été corrigé ici (3 langues)**
- FR ACTUEL : `Ce n'est pas un tableur. Un chiffre dont dépend une décision se refait à la main. Redemander le calcul ne prouve rien : la même erreur peut se répéter à l'identique.`
  NOUVEAU : `Vous ne voyez pas toujours s'il a calculé ou estimé, et c'est vous qui répondez du chiffre devant le comité. Redemander le calcul dans la conversation ne vérifie rien : vous lisez une deuxième réponse au lieu de contrôler la première.`
- EN ACTUEL : `This is not a spreadsheet. A figure a decision depends on is redone by hand. Asking again proves nothing: the same error can repeat identically.`
  NOUVEAU : `You cannot always see whether it computed or estimated, and you are the one answering for the figure in front of the committee. Asking for the calculation again in the conversation verifies nothing: you are reading a second answer instead of checking the first.`
- HA ACTUEL : `Wannan ba tebur na lissafi ba ne. Lambar da shawara ta dogara a kanta sai an sake yin ta da hannu. Sake tambaya ba ya tabbatar da komai: kuskure daya na iya maimaituwa.`
  NOUVEAU : `Ba koyaushe kake gani ko ya lissafa ko ya kiyasta ba, kuma kai ne ke da alhakin lambar a gaban kwamitin. Sake neman lissafin cikin tattaunawar ba ya duba komai: karanta amsa ta biyu kake, ba duba ta farko ba.`

### Clarté

**39. [cl4-09] content[1], dernier § — « il ne disparaît jamais » annule le format du chapitre 2 (3 langues)**
- FR ACTUEL : `Un piège commun à ces trois cas, et il ne disparaît jamais : le texte produit est toujours un peu trop long et un peu trop poli. Couper reste votre travail.`
  NOUVEAU : `Un piège commun à ces trois cas : le texte produit sort un peu trop long et un peu trop poli. Une consigne de format le réduit, sans le supprimer tout à fait — couper reste votre travail.`
- EN ACTUEL : `One trap common to all three, and it never goes away: the output is always slightly too long and slightly too polite. Cutting remains your job.`
  NOUVEAU : `One trap common to all three: the output comes out slightly too long and slightly too polite. A format instruction shrinks it without removing it entirely — cutting remains your job.`
- HA ACTUEL : `Tarko daya na kowannensu, kuma ba ya tafiya: rubutun da ke fitowa koyaushe ya dan yi tsawo kuma ya dan yi ladabi da yawa. Rage shi aikinka ne.`
  NOUVEAU : `Tarko daya na kowannensu: rubutun da ke fitowa yakan dan yi tsawo kuma ya dan yi ladabi da yawa. Umarnin tsari yana rage shi, amma ba ya kawar da shi gaba daya — rage shi aikinka ne.`

**40. [cl4-10] practice.observation — « tâche du deuxième type » ne renvoie à rien (3 langues)**
- FR ACTUEL : `alors vous étiez sur une tâche du deuxième type, celle où vous devez rester aux commandes.`
  NOUVEAU : `alors vous étiez sur une tâche que vous n'êtes pas en mesure de juger, celle où vous devez rester aux commandes.`
- EN ACTUEL : `you were on a second-type task, where you must stay in control.`
  NOUVEAU : `you were on a task you are not able to judge, the kind where you must stay in control.`
- HA ACTUEL : `to kana kan aiki na nau’i na biyu, inda dole ka rike ragamar.`
  NOUVEAU : `to kana kan aikin da ba za ka iya hukuntawa ba, inda dole ka rike ragamar.`

**41. [cl4-17] glossaire, entrée « Constat » / « Finding » / « Bincike » (3 langues)**
- FR ACTUEL : `Ce qu'un tableau permet d'affirmer. À distinguer de ce qu'il ne permet pas encore de conclure, qui se demande explicitement.`
  NOUVEAU : `Ce qu'un tableau permet d'affirmer. À distinguer de ce qu'il ne permet pas encore de conclure : cela, vous devez le demander explicitement dans votre consigne.`
- EN ACTUEL : `What a table lets you claim. To be distinguished from what it does not yet let you conclude, which is asked for explicitly.`
  NOUVEAU : `What a table lets you claim. To be distinguished from what it does not yet let you conclude: that, you must ask for explicitly in your instruction.`
- HA ACTUEL : `Abin da tebur ya bari ka fada. A banbanta shi da abin da bai bari ka yanke shawara ba tukuna, wanda ake nema a fili.`
  NOUVEAU : `Abin da tebur ya bari ka fada. A banbanta shi da abin da bai bari ka yanke shawara ba tukuna: wannan, sai ka nema a fili a cikin umarninka.` (terme renommé `Abin da aka gano`, cf. entrée 37)

**42. [cl4-14] FR content[0], avant-dernier §**
- ACTUEL : `Et quand la tâche est déjà rapide, écrire la consigne coûte plus cher que faire. Une réponse de deux lignes s'écrit à la main.`
- NOUVEAU : `Et quand la tâche est déjà rapide, écrire la consigne prend plus de temps que de faire la tâche vous-même. Une réponse de deux lignes s'écrit à la main.`

**43. [cl4-16] FR content[3], 1er §**
- ACTUEL : `Un plan de formation à partir d'un référentiel.`
- NOUVEAU : `Un plan de formation à partir de la liste des compétences à couvrir.`

**44. [cl4-19] HA — « iyali » (= foyer) employé pour « famille de tâches » (2 endroits)**
- objective ACTUEL : `iyalai hudu na ayyukan da ke dawowa duk mako` → NOUVEAU : `nau'o'i hudu na ayyukan da ke dawowa duk mako`
- content[1] ACTUEL : `Wannan shi ne iyali mafi yawa` → NOUVEAU : `Wannan shi ne nau'in da ya fi yawa`

**45. [cl4-20] FR content[1], 2e §**
- ACTUEL : `parce qu'on ne sait pas par quel bout les prendre`
- NOUVEAU : `parce qu'on ne sait pas comment les commencer`

**46. [cl4-22] FR objective**
- ACTUEL : `et vous saurez reconnaître les tâches où le gain est réel de celles où il n'est qu'apparent`
- NOUVEAU : `et vous saurez distinguer les tâches où le gain est réel de celles où il n'est qu'apparent`

---

## cl5.ts

### Incohérences

**47. [cl5-01] content[1] — « utilisez tel quel » dit de ne pas relire (3 langues)**
- FR ACTUEL : `Si rien n'est vérifiable et que l'enjeu est faible, utilisez tel quel.`
  NOUVEAU : `Si rien n'est vérifiable et que l'enjeu est faible, il n'y a rien à vérifier : votre relecture habituelle suffit.`
- EN ACTUEL : `Nothing verifiable and low stakes: use it as is.`
  NOUVEAU : `Nothing verifiable and low stakes: there is nothing to fact-check — your usual proofread is enough.`
- HA ACTUEL : `Idan babu abin tabbatarwa kuma abin ba babba ba ne, yi amfani kai tsaye.`
  NOUVEAU : `Idan babu abin tabbatarwa kuma abin ba babba ba ne, babu abin tantancewa: dubawarka ta yau da kullum ta isa.`

**48. [cl5-29] HA content[3] — l'interdiction de rendre l'avis a disparu**
- ACTUEL : `Wadannan ba ayyukan rubutu ba ne, ayyukan sana’a ne.`
- NOUVEAU : `Wadannan ba ayyukan rubutu ba ne, ayyukan sana’a ne. Kayan aikin zai iya taimaka maka wajen shirya tambayoyinka; ba zai iya bayar da ra’ayin ba.`

**49. [cl5-31] HA content[2] — « retirer les noms » ne suffit pas**
- ACTUEL : `Mafita mai sauri: cire sunaye tukuna.`
- NOUVEAU : `Mafita mai sauri: cire bayanan da ke gane mutum tukuna — ba sunaye kadai ba.`
- Le terme de glossaire `Cire sunaye` et l'explication du quiz restent **inchangés** (leur définition couvre déjà le retrait de ce qui localise).

**50. [cl5-32] HA content[2], liste « Ba sa fita » — les identifiants ont disparu**
- ACTUEL : `kalmomin sirri da makullai`
- NOUVEAU : `sunayen shiga, kalmomin sirri da makullan shiga`

**51. [cl5-33] HA content[3] — la conséquence de responsabilité a disparu**
- ACTUEL : `A fannin da ba ka kware ba, ba za ka ga kuskuren ba.`
- NOUVEAU : `A fannin da ba ka kware ba, ba za ka ga kuskuren ba, kuma za ka sa hannunka a kan rubutun da ba za ka iya karewa ba.`

### Douteux

**52. [cl5-28] HA example — « ma'aikata » lu comme « le personnel » (2 endroits)**
- challenge ACTUEL : `tana shirya takardar matsaya ga ma’aikata` → NOUVEAU : `tana shirya takardar matsaya ga wata ma’aikatar gwamnati`
- solution ACTUEL : `Takarda ga ma’aikata da ke ambaton rubutun da babu shi` → NOUVEAU : `Takarda ga ma’aikatar gwamnati da ke ambaton rubutun da babu shi`

**53. [cl5-36] HA — « shaida » (= preuve) employé pour « identité » (3 endroits)**
- content[2] ACTUEL : `ba suna ba ne, amma shaida ce.` → NOUVEAU : `ba suna ba ne, amma yana nuna ainihin mutumin.`
- glossaire `term` ACTUEL : `Shaida ta kaikaice` → NOUVEAU : `Bayanin gane mutum ta kaikaice` (définition inchangée)
- **[QUIZ]** quiz[2].explanation ACTUEL : `Mukami daya tilo hade da wuri shaida ce, ko da babu suna.` NOUVEAU : `Mukami daya tilo hade da wuri yana nuna ainihin mutum, ko da babu suna.`
- Voir D5 (même terme réutilisé dans cl6).

**54. [cl5-37] HA glossaire, terme**
- ACTUEL : `Kuskure mai kyan gani` → NOUVEAU : `Kuskure mai kama da gaskiya` (définition inchangée, sous réserve de D3)

### Clarté

**55. [cl5-16 + cl5-07] « la citation du chapitre 3 » est indéchiffrable — content[1], dernier §**
- FR ACTUEL : `Sur un document, c'est la citation du chapitre 3. Sur une connaissance générale, c'est « sur quoi te fondes-tu ? » — et une réponse vague est, en elle-même, un signal.`
  NOUVEAU : `Sur un document que vous lui avez fourni, demandez-lui de citer le passage exact, comme au chapitre 3. Sur une connaissance générale, demandez « sur quoi te fondes-tu ? » — et une réponse vague est, en elle-même, un signal.`
- EN ACTUEL : `On a document that is chapter 3's quotation.`
  NOUVEAU : `On a document, use chapter 3's habit: ask it to quote the exact sentence from the document.`

**56. [cl5-08] example.solution, dernière phrase — « un troisième point » sans référent (3 langues)**
- FR ACTUEL : `Un troisième point cité n'existe pas du tout.` → NOUVEAU : `Et un autre texte réglementaire cité dans la même réponse n'existe pas du tout.`
- EN ACTUEL : `A third cited point does not exist at all.` → NOUVEAU : `And another regulation cited in the same answer does not exist at all.`
- HA ACTUEL : `Batu na uku da aka ambata bai wanzu ko kadan.` → NOUVEAU : `Kuma wani nassin doka da aka ambata a cikin amsar bai wanzu ko kadan.`

**57. [cl5-17] FR content[1], 1er § (remplacer les quatre phrases par les trois ci-dessous — la dernière reprend le texte existant, ne pas la dupliquer)**
- ACTUEL : `Vérifier ne veut pas dire tout contrôler. Cela voudrait dire refaire le travail, et personne ne le fera. Il s'agit de calibrer l'effort de vérification sur l'enjeu réel. Trois questions suffisent, et elles prennent moins d'une minute.`
- NOUVEAU : `Vérifier ne veut pas dire tout contrôler : tout contrôler, ce serait refaire le travail, et personne ne le fera. Vérifiez beaucoup quand une erreur coûterait cher, et peu quand elle ne coûterait rien. Trois questions suffisent, et elles prennent moins d'une minute.`

**58. [cl5-18] FR content[1], § « Troisième question »**
- ACTUEL : `Indépendante veut dire : qui ne vient pas du même endroit.`
- NOUVEAU : `Indépendante veut dire : qui ne vient pas de Claude. Redemander à Claude de confirmer ce que Claude a écrit, ce n'est pas vérifier.`

**59. [cl5-19] FR practice.instructions[3] — « engageantes » lu comme « séduisantes »**
- ACTUEL : `Vérifiez réellement les deux affirmations les plus engageantes à la source officielle, puis demandez « sur quoi te fondes-tu ? » et observez la réponse.`
- NOUVEAU : `Vérifiez réellement, à la source officielle, les deux affirmations dont une erreur ferait le plus de dégâts, puis demandez « sur quoi te fondes-tu ? » et observez la réponse.`

**60. [cl5-20 + cl5-21] « ce qui localise » : consigne inexécutable — content[2], FR et EN**
- FR ACTUEL : `Arrondissez ou retirez ce qui localise.`
  NOUVEAU : `Remplacez le lieu précis par un lieu plus large : au lieu de « le village de X », écrivez « un village de la région ».`
- EN ACTUEL : `Remove or blur what locates.`
  NOUVEAU : `Replace the exact place with a wider one: instead of "the village of X", write "a village in the region".`

**61. [cl5-22] FR content[2] — la liste la plus importante du chapitre est un bloc de 70 mots**
- ACTUEL : `Ne sortent jamais : les noms de personnes associés à une situation — bénéficiaires, patients, élèves, employés ; les coordonnées ; les dossiers médicaux, RH ou judiciaires ; les identifiants, mots de passe et clés d'accès ; les coordonnées bancaires ; les documents couverts par une clause de confidentialité ; et les informations qui, une fois recoupées, permettent d'identifier quelqu'un même sans son nom — un village, une fonction, une date suffisent parfois.`
- NOUVEAU : `Ne sortent jamais : le nom d'une personne liée à une situation — bénéficiaire, patient, élève, employé. Son numéro de téléphone, son adresse, son e-mail. Les dossiers médicaux, les dossiers du personnel, les dossiers judiciaires. Les identifiants, les mots de passe et les clés d'accès. Les numéros de compte bancaire. Les documents que vous avez promis par écrit de garder secrets. Et les informations qui, mises bout à bout, permettent de reconnaître quelqu'un sans citer son nom : un village, une fonction et une date suffisent parfois.`

**62. [cl5-23] FR content[2], le test — suppose un « prestataire sous contrat »**
- ACTUEL : `Le test tient en une phrase : est-ce que j'enverrais cela à un prestataire extérieur avec qui je n'ai signé aucun contrat ?`
- NOUVEAU : `Le test tient en une phrase : est-ce que j'enverrais cela à quelqu'un d'extérieur à mon organisation, qui ne m'a rien promis sur le secret ? Si la réponse est non, cela ne va pas non plus dans une conversation.`
- (la phrase suivante actuelle « Si la réponse est non, cela ne va pas non plus dans une conversation. » est absorbée : la supprimer pour éviter le doublon)

**63. [cl5-26] FR example.challenge, dernière phrase**
- ACTUEL : `rien n'accroche à la lecture`
- NOUVEAU : `rien ne paraît suspect à la lecture`

**64. [cl5-27] FR reflection**
- ACTUEL : `Repensez à un document sorti de votre service ces derniers mois qui engageait votre organisation. Si une seule référence chiffrée s'y était révélée fausse, qu'est-ce que cela aurait coûté — et qui, dans le circuit, aurait dû la vérifier ?`
- NOUVEAU : `Repensez à un document que vous avez envoyé ces derniers mois et qui comptait : un rapport, un dossier de candidature, un devoir noté, une note à votre responsable. Si un seul chiffre s'y était révélé faux, qu'est-ce que cela vous aurait coûté — et à quel moment, avant l'envoi, auriez-vous pu le vérifier ?`

**65. [cl5-39] HA content[0]**
- ACTUEL : `kasarka, yankinka, fannin ka` → NOUVEAU : `kasarka, yankinka, fanninka`

---

## cl6.ts

### Incohérences

**66. [cl6-05] practice.instructions[3] — consigne circulaire (3 langues)**
- FR ACTUEL : `Appliquez les trois questions à toutes les affirmations vérifiables, recalculez à la main les chiffres que vous allez communiquer, et notez ce que vous avez dû corriger.`
  NOUVEAU : `Appliquez les trois questions à chaque affirmation de la réponse, recalculez à la main les chiffres que vous allez communiquer, et notez ce que vous avez dû corriger.`
- EN ACTUEL : `Run the three questions on every verifiable claim, recompute by hand the figures you will communicate, and note what you had to correct.`
  NOUVEAU : `Run the three questions on every claim in the answer, recompute by hand the figures you will communicate, and note what you had to correct.`
- HA ACTUEL : `Ka yi amfani da tambayoyi uku kan kowace magana da ake iya tabbatarwa, ka sake lissafa da hannu lambobin da za ka sanar, ka lura abin da ka gyara.`
  NOUVEAU : `Ka yi amfani da tambayoyi uku kan kowace magana da ke cikin amsar, ka sake lissafa da hannu lambobin da za ka sanar, ka lura abin da ka gyara.`

**67. [QUIZ] [cl6-09] HA quiz[9].explanation — contredit la bonne réponse qu'elle justifie**
- ACTUEL : `Cire sunaye yana daukar dakiku kuma yana bayar da aiki iri daya.`
- NOUVEAU : `Cire duk abin da zai iya gano mutum yana daukar dakiku kuma yana bayar da aiki iri daya.`

**68. [QUIZ] [cl6-14] HA — graphie incohérente (3 mots, dont deux dans le quiz) → décision D1.** Occurrences : quiz[6].options[1] `ruɗi`, quiz[7].question `sauƙaƙa`, quiz[7].explanation `sauƙaƙawa`. Option A : `rudi`, `saukaka`, `saukakawa`.

### Clarté

**69. [cl6-07] FR practice.instructions[2] — « affirmation portante » n'existe pas en français**
- ACTUEL : `Déposez vos documents et exigez que chaque affirmation portante cite sa source.`
- NOUVEAU : `Déposez vos documents et exigez que chaque affirmation qui engage cite sa source.` (EN et HA inchangés)

**70. [cl6-17] FR content[0], 2e §**
- ACTUEL : `vous envoyez un chiffre non vérifié à un bailleur`
- NOUVEAU : `vous envoyez un chiffre non vérifié à un bailleur de fonds`

**71. [cl6-18] FR content[0], 3e §**
- ACTUEL : `À cela s'ajoute une mise en situation, à produire vous-même. Elle n'est pas notée automatiquement, mais c'est elle qui vous dira si le module a servi`
- NOUVEAU : `S'y ajoute un exercice pratique que vous faites seul : il n'y a rien à envoyer, personne ne le corrige et il ne compte pas dans votre score, mais c'est lui qui vous dira si le module a servi`

**72. [QUIZ] [cl6-24] FR quiz[1] option B (bonne réponse) — « point d'accès » lu comme « borne Wi-Fi »**
- ACTUEL : `Rien : une connexion internet est nécessaire, quel que soit le point d'accès.`
- NOUVEAU : `Rien : une connexion internet est nécessaire, que vous passiez par le site, par l'application mobile ou par l'application bureau.`

**73. [QUIZ] [cl6-27] FR quiz[5].explanation — passif sans agent sur un point de sécurité**
- ACTUEL : `Quand une lecture d'image échoue partiellement, les trous sont comblés au lieu d'être signalés.`
- NOUVEAU : `Quand Claude n'arrive à lire qu'une partie de l'image, il comble les passages manquants au lieu de vous signaler qu'il n'a pas pu les lire.`

---

## Corrections qui touchent le quiz (à valider à part : notation)

Aucune ne change un champ `answer` — la lettre de la bonne réponse reste identique partout.

**Texte d'une option ou d'une question modifié** (à revérifier contre la grille de correction, les captures et les supports traduits) :
- cl2 HA quiz[1] option A (19) ; cl2 HA quiz[2] option A (23)
- cl3 HA quiz[0] option B (28) ; cl3 HA quiz[2] option D (27) ; cl3 HA quiz[1] option B — **bonne réponse** (34)
- cl4 HA quiz[2].question (37)
- cl6 FR quiz[1] option B — **bonne réponse** (72) ; cl6 HA quiz[6] option B et quiz[7].question (68, si D1 = option A)

**Explication seule modifiée** (n'affecte que le retour affiché après réponse) : cl1 FR quiz[1] (10), cl1 FR+EN quiz[0] (11), cl2 HA quiz[2] (23), cl4 FR/EN/HA quiz[2] (38), cl5 HA quiz[2] (53), cl6 HA quiz[9] (67), cl6 FR quiz[5] (73), cl6 HA quiz[7] (68).

---

## Décisions humaines

**D1 — Orthographe haoussa (bloque cl2-28, cl6-14 et une partie des textes HA ci-dessus).** Les lettres crochetées apparaissent 14 fois seulement, réparties sur 4 chapitres : cl2 (`Wataƙila`, `ginshiƙi`), cl3 (`ginshiƙi` ×2, `ginshiƙai` ×2), cl4 (`sauƙaƙawa` ×2, `ginshiƙi` ×2, `ruɗi`), cl6 (`ruɗi`, `sauƙaƙa`, `sauƙaƙawa`) ; cl1 et cl5 n'en ont aucune. Appliquer cl2-28 à cl2 seul aggraverait l'incohérence. Option A (recommandée, cohérente avec cl6-14 et avec la révision du juge sur cl4-19) : supprimer les 14 occurrences → `Watakila, ginshiki, ginshikai, saukakawa, saukaka, rudi`. Option B (cl2-28 tel qu'écrit) : passer les six blocs HA à l'orthographe standard complète — chantier de relecture native, hors de ce plan.

**D2 — Nom haoussa de la relance.** cl1-20 renomme le terme en `Neman gyara` ; cl2-16 conserve `Sake tambaya` (et cl2 content[3] a pour titre `Sake tambaya: rabin aikin na biyu`). Trancher un terme unique pour le module, puis aligner cl1, cl2 et les titres de section.

**D3 — Reliquat du constat cl5-09 (hors liste confirmée).** content[0] de cl5 a bien été corrigé (« il existe bien, à l'intérieur, quelque chose qui distingue… mais ce signal est imparfait »), mais l'ancienne formulation subsiste à deux endroits : cl5 quiz[0].explanation (`Il n'existe pas, à l'intérieur, de signal qui distingue…` / EN `There is no internal signal separating…` / HA `Babu alama a cikinsa da ke raba…`) et le glossaire `Erreur plausible` / `Plausible error` / `Kuskure mai kyan gani` (`parce que rien, à l'intérieur, ne distingue une connaissance d'un comblement de trou`). En l'état, cl5 se contredit. Correction proposée, à valider : FR `parce que ce qui, à l'intérieur, distingue une connaissance d'un comblement de trou est imparfait`.

**D4 — Corollaire de cl2-14 dans cl6 (hors liste confirmée).** cl6 quiz[2].explanation dit `Le contexte est l'ingrédient le plus souvent oublié et le plus déterminant.` alors que le glossaire de cl6 dit `le contexte est le plus souvent oublié, l'exemple le plus efficace`. Une fois cl2-14 appliqué, cl6 devient le dernier endroit à couronner deux ingrédients. Proposition : `Le contexte est l'ingrédient le plus souvent oublié.`

**D5 — Terme haoussa « identifiant indirect ».** cl5-36 renomme `Shaida ta kaikaice` en `Bayanin gane mutum ta kaikaice` ; la formule `Shaida ce ta kaikaice` est reprise dans cl6 HA quiz[9].explanation (hors liste confirmée). Aligner ou assumer l'écart.

**D6 — cl4-16 en anglais.** La correction ne porte que sur le FR (`référentiel`) ; l'EN conserve `A training plan from a framework`, de même opacité. Non confirmé, donc non corrigé ici.

Note technique : `src/data/introductionClaudeAi.test.ts` n'assertionne aucune de ces chaînes (il vérifie l'absence de `**` dans les `body` et l'intégrité des clés de quiz) — aucune des corrections ci-dessus ne casse le test, à condition de ne pas introduire de markdown.