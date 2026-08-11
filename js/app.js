// ============================================
// SUFFERING-FOCUSED ETHICS: WORLD RELIGIONS
// Pastel Claymorphism Edition
// ============================================

// ===== RELIGION DATA =====
const religionsData = {
    buddhism: {
        name: "Buddhism",
        symbol: "☸",
        color: "#FFB347",
        bgColor: "#FFF3E0",
        founded: "c. 5th century BCE",
        founder: "Siddhārtha Gautama (The Buddha)",
        keyTexts: "Pali Canon (Tipiṭaka), Mahāyāna Sūtras, Dhammapada",
        overview: `Buddhism is perhaps the world's most explicitly suffering-focused religion. The entire teaching (Dharma) is structured around the problem of suffering (<em>dukkha</em>). The Buddha famously stated: "Both formerly and now, it is only dukkha that I describe, and the cessation of dukkha" (SN 22.86). The Four Noble Truths — the foundational teaching of all Buddhist schools — are entirely focused on understanding, diagnosing, and eliminating suffering.`,
        natureOfSuffering: `The Buddha identified three types of <em>dukkha</em>: (1) <em>dukkha-dukkha</em> — ordinary suffering (pain, grief, distress); (2) <em>viparināma-dukkha</em> — suffering due to impermanence; (3) <em>saṅkhāra-dukkha</em> — the pervasive unsatisfactoriness of conditioned existence. Suffering arises from <em>taṇhā</em> (craving) and <em>avijjā</em> (ignorance) — not from divine punishment.`,
        moralObligation: `Mahāyāna Buddhism introduces the <em>bodhisattva</em> ideal — the aspiration to attain enlightenment <strong>for the sake of all sentient beings</strong>. The bodhisattva vow states: "Sentient beings are numberless; I vow to save them all." Theravāda Buddhism emphasizes <em>mettā</em> (loving-kindness) and <em>karuṇā</em> (compassion) as supreme virtues. The Dhammapada states: "Hatred is never appeased by hatred. By non-hatred alone is hatred appeased. This is an eternal law" (Dhp 5).`,
        scopeOfConcern: `Buddhism extends moral concern to <strong>all sentient beings</strong> — humans, animals, and beings in other realms. The first precept is to abstain from killing <em>any</em> living being. The Mettā Sutta instructs: "Even as a mother protects with her life her child, so with a boundless heart should one cherish all living beings" (Sn 1.8).`,
        sfeAlignment: "Very High", sfeRating: 95,
        sfeExplanation: `Buddhism is structurally almost identical to SFE: suffering is the central moral problem; its cessation is the ultimate goal; compassion for all sentient beings is the foundational motivation; and the scope of concern is universal.`,
        scriptures: [
            { text: "Both formerly and now, monks, it is only dukkha that I describe, and the cessation of dukkha.", source: "Saṃyutta Nikāya 22.86", theme: "nature" },
            { text: "Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings; radiating kindness over the entire world.", source: "Mettā Sutta, Sutta Nipāta 1.8", theme: "compassion" },
            { text: "All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.", source: "Dhammapada 129", theme: "nonviolence" },
            { text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.", source: "Dhammapada 5", theme: "compassion" }
        ]
    },
    hinduism: {
        name: "Hinduism",
        symbol: "ॐ",
        color: "#FF8A80",
        bgColor: "#FFEBEE",
        founded: "c. 2000–1500 BCE",
        founder: "No single founder",
        keyTexts: "Vedas, Upanishads, Bhagavad Gītā, Yoga Sūtras",
        overview: `Hinduism addresses suffering through multiple philosophical frameworks. The concept of <em>duḥkha</em> is central, particularly in <em>Sāṅkhya</em> and <em>Yoga</em> schools. Patañjali's Yoga Sūtras state: "The suffering that has not yet come is to be avoided" (YS 2.16) — a remarkably SFE-compatible statement.`,
        natureOfSuffering: `Hindu philosophy identifies three types of suffering (<em>tāpatraya</em>): (1) <em>ādhyātmika</em> — from oneself; (2) <em>ādhibhautika</em> — from other beings; (3) <em>ādhidaivika</em> — from natural forces. The ultimate source is <em>avidyā</em> (ignorance).`,
        moralObligation: `The Bhagavad Gītā lists <em>dayā</em> (compassion) and <em>ahiṃsā</em> (non-violence) among divine qualities. The Ṛg Veda states: "The one who eats alone, eats sin" (RV 10.117.6). The Mahābhārata declares: "Non-violence is the highest dharma" (<em>ahiṃsā paramo dharmaḥ</em>).`,
        scopeOfConcern: `<em>Ahiṃsā</em> extends to all creatures. The Īśā Upaniṣad: "He who sees all beings in the Self and the Self in all beings, he never turns away from it" (verse 6).`,
        sfeAlignment: "High", sfeRating: 75,
        sfeExplanation: `Strong SFE-compatible elements: ahiṃsā, universal compassion, mandate to prevent future suffering. However, karma doctrine can imply suffering is deserved; dharmic duty sometimes overrides compassion.`,
        scriptures: [
            { text: "The suffering that has not yet come is to be avoided.", source: "Yoga Sūtras of Patañjali 2.16", theme: "nature" },
            { text: "The one who eats alone, eats sin.", source: "Ṛg Veda 10.117.6", theme: "obligation" },
            { text: "He who sees all beings in the Self and the Self in all beings, he never turns away from it.", source: "Īśā Upaniṣad 6", theme: "compassion" },
            { text: "Non-violence is the highest dharma. Non-violence is the highest self-control.", source: "Mahābhārata, Anuśāsana Parva 113.8", theme: "nonviolence" }
        ]
    },
    jainism: {
        name: "Jainism",
        symbol: "✠",
        color: "#80CBC4",
        bgColor: "#E0F2F1",
        founded: "c. 9th–6th century BCE",
        founder: "Mahāvīra (24th Tīrthaṅkara)",
        keyTexts: "Ācārāṅga Sūtra, Tattvārtha Sūtra, Daśavaikālika Sūtra",
        overview: `Jainism may represent the most radically suffering-focused ethical system in human history. <em>Ahiṃsā</em> (non-harm) is the <strong>supreme ethical principle</strong>. Jain monks sweep the ground before them to avoid stepping on insects and wear cloth over their mouths to avoid inhaling small creatures.`,
        natureOfSuffering: `Suffering results from <em>karma</em> — a subtle material substance adhering to the soul through harmful actions. The <em>Tattvārtha Sūtra</em> explains karmic bondage arises from violence, attachment, carelessness, and passions.`,
        moralObligation: `The <em>Ācārāṅga Sūtra</em> (1.4.1): "All beings are fond of life; they like pleasure, hate pain, shun destruction, like life, long to live. To all, life is dear." The ethical implication is absolute: one must not cause suffering to <em>any</em> being.`,
        scopeOfConcern: `Jainism has the <strong>widest scope of moral concern</strong> of any religion — recognizing sentient life from one-sensed beings (earth, water, fire, air, plants) to five-sensed beings (humans, animals).`,
        sfeAlignment: "Very High", sfeRating: 97,
        sfeExplanation: `Closest to pure SFE of any world religion: ahiṃsā is the supreme principle; scope extends to all sentient beings; no divine plan justifies suffering; entire ethical system oriented around harm reduction.`,
        scriptures: [
            { text: "All beings are fond of life; they like pleasure, hate pain, shun destruction, like life, long to live. To all, life is dear.", source: "Ācārāṅga Sūtra 1.4.1", theme: "compassion" },
            { text: "You are the one whom you intend to kill. You are the one you intend to tyrannize over.", source: "Daśavaikālika Sūtra 6.9", theme: "nonviolence" },
            { text: "Non-violence is the highest religion. (Ahiṃsā paramo dharmaḥ)", source: "Jain maxim (Tattvārtha Sūtra tradition)", theme: "nonviolence" },
            { text: "One who neglects or disregards the existence of earth, water, fire, air, and vegetation disregards his own existence which is entwined with them.", source: "Ācārāṅga Sūtra 1.1", theme: "compassion" }
        ]
    },
    christianity: {
        name: "Christianity",
        symbol: "✞",
        color: "#82B1FF",
        bgColor: "#E3F2FD",
        founded: "c. 1st century CE",
        founder: "Jesus of Nazareth",
        keyTexts: "The Bible (Old & New Testaments)",
        overview: `Christianity has a complex relationship with suffering. Jesus's ministry focused on alleviating suffering — healing the sick, feeding the hungry. His identification with the suffering ("whatever you did for one of the least of these, you did for me" — Matt 25:40) is profoundly SFE-compatible. Yet Christianity also uniquely valorizes suffering through the theology of the Cross.`,
        natureOfSuffering: `Christian theology traces suffering to the Fall — original sin introduced suffering into creation (Romans 5:12). Paul writes: "The whole creation has been groaning as in the pains of childbirth" (Romans 8:22). The Book of Job wrestles with innocent suffering.`,
        moralObligation: `The Parable of the Good Samaritan (Luke 10) defines love as active compassion. The Beatitudes bless "the merciful" (Matt 5:7). Isaiah demands: "Learn to do right; seek justice. Defend the oppressed" (1:17). James insists faith without works of compassion is dead (2:15-16).`,
        scopeOfConcern: `Primarily <strong>human beings</strong> (imago Dei), with stewardship of creation. "The righteous care for the needs of their animals" (Prov 12:10). Liberation theology extends concern strongly toward the poor.`,
        sfeAlignment: "Moderate-High", sfeRating: 68,
        sfeExplanation: `Powerful SFE-compatible elements: Jesus's radical compassion, mandate to serve the suffering, prophetic justice. However, redemptive suffering theology and primarily human-centered scope create divergences.`,
        scriptures: [
            { text: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.", source: "Matthew 25:40 (NIV)", theme: "obligation" },
            { text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.", source: "Isaiah 1:17 (NIV)", theme: "justice" },
            { text: "Blessed are the merciful, for they will be shown mercy.", source: "Matthew 5:7 (Sermon on the Mount)", theme: "compassion" },
            { text: "We know that the whole creation has been groaning as in the pains of childbirth right up to the present time.", source: "Romans 8:22 (NIV)", theme: "nature" }
        ]
    },
    islam: {
        name: "Islam",
        symbol: "☪",
        color: "#69F0AE",
        bgColor: "#E8F5E9",
        founded: "7th century CE",
        founder: "Prophet Muhammad ﷺ",
        keyTexts: "The Qur'an, Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim",
        overview: `Islam addresses suffering within divine mercy (<em>raḥma</em>), justice (<em>ʿadl</em>), and testing (<em>ibtilāʾ</em>). God is invoked as <em>ar-Raḥmān ar-Raḥīm</em> — "The Most Gracious, The Most Merciful." The ethical system mandates alleviating suffering through <em>zakāt</em> (mandatory charity), care for orphans, and feeding the hungry.`,
        natureOfSuffering: `Suffering is a test from God: "We will certainly test you with something of fear and hunger and loss of wealth and lives" (Q 2:155). Sūrah al-Inshirāḥ offers comfort: "Verily, with hardship comes ease" (94:5-6).`,
        moralObligation: `<em>Zakāt</em> (one of the Five Pillars) is mandatory. The Qur'an: "Have you seen the one who denies the Judgment? That is the one who drives away the orphan, and does not encourage the feeding of the poor" (107:1-3). Hadith: "He is not a believer whose stomach is filled while his neighbor goes hungry."`,
        scopeOfConcern: `Primarily <strong>human</strong>, with significant animal concern. The Prophet narrated that a woman entered Hell for starving a cat and a man was forgiven for giving water to a thirsty dog. The Qur'an: "There is no creature on earth but they are communities like you" (6:38).`,
        sfeAlignment: "Moderate", sfeRating: 62,
        sfeExplanation: `Strong elements: mandatory charity, God's mercy as supreme attribute, robust obligations to the suffering. However, suffering-as-divine-test theology and afterlife compensation create divergence from pure SFE.`,
        scriptures: [
            { text: "Verily, with hardship comes ease. Verily, with hardship comes ease.", source: "Qur'an, Sūrah al-Inshirāḥ (94:5-6)", theme: "nature" },
            { text: "Have you seen the one who denies the Judgment? That is the one who drives away the orphan, and does not encourage the feeding of the poor.", source: "Qur'an, Sūrah al-Māʿūn (107:1-3)", theme: "obligation" },
            { text: "He is not a believer whose stomach is filled while his neighbor goes hungry.", source: "Ṣaḥīḥ al-Bukhārī (Al-Adab al-Mufrad)", theme: "obligation" },
            { text: "There is no creature on earth, nor any bird that flies with its wings, but they are communities like you.", source: "Qur'an, Sūrah Al-Anʿām (6:38)", theme: "compassion" }
        ]
    },
    judaism: {
        name: "Judaism",
        symbol: "✡",
        color: "#CE93D8",
        bgColor: "#F3E5F5",
        founded: "c. 2000–1500 BCE",
        founder: "Abraham / Moses",
        keyTexts: "Torah, Tanakh, Talmud, Midrash",
        overview: `Judaism engages deeply with suffering through law, prophecy, and reflection. The concept of <em>tzedakah</em> (justice/righteousness) is an <strong>obligation of justice</strong>, not optional generosity. <em>Tikkun olam</em> ("repair of the world") motivates Jews to actively reduce suffering.`,
        natureOfSuffering: `Multiple views: sin, divine testing (Job), mystery, human injustice. The Talmud discusses "sufferings of love" but also affirms the right to protest suffering. Job refuses easy answers.`,
        moralObligation: `<em>Tzedakah</em> is mandatory. "You shall not stand idly by the blood of your neighbor" (Lev 19:16). Isaiah thunders: "Is not this the fast that I choose: to loose the bonds of injustice... to let the oppressed go free?" (58:6). The Talmud: "Whoever saves a single life, it is as if they saved the entire world" (Sanhedrin 37a).`,
        scopeOfConcern: `Human-centered with significant animal welfare law (<em>tza'ar ba'alei chayim</em>). Deuteronomy 25:4 forbids muzzling an ox while it treads grain. The Talmud requires feeding animals before oneself.`,
        sfeAlignment: "Moderate-High", sfeRating: 70,
        sfeExplanation: `Obligation-based approach (tzedakah, tikkun olam, prophetic justice) is strongly SFE-compatible. The tradition of protesting suffering aligns with SFE's refusal to accept suffering passively.`,
        scriptures: [
            { text: "Whoever saves a single life, it is as if they saved the entire world.", source: "Talmud, Sanhedrin 37a", theme: "obligation" },
            { text: "Is not this the fast that I choose: to loose the bonds of injustice, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke?", source: "Isaiah 58:6", theme: "justice" },
            { text: "You shall not stand idly by the blood of your neighbor.", source: "Leviticus 19:16", theme: "obligation" },
            { text: "What is hateful to you, do not do to your fellow. That is the whole Torah; the rest is commentary.", source: "Talmud, Shabbat 31a (Hillel)", theme: "compassion" }
        ]
    },
    sikhism: {
        name: "Sikhism",
        symbol: "☬",
        color: "#FFD54F",
        bgColor: "#FFFDE7",
        founded: "15th century CE",
        founder: "Guru Nanak Dev Ji",
        keyTexts: "Guru Granth Sahib",
        overview: `Sikhism addresses suffering through divine will (<em>hukam</em>), selfless service (<em>sevā</em>), and remembrance of God. Sikhism is remarkable for <strong>institutionalized suffering-reduction</strong>: <em>langar</em> feeds anyone regardless of identity, and <em>dasvandh</em> (tithing) funds community welfare.`,
        natureOfSuffering: `Suffering arises from <em>haumai</em> (ego) and attachment to <em>māyā</em>. Guru Nanak: "The world is burning in the fire of suffering; save it, O Lord" (GGS p. 853).`,
        moralObligation: `<em>Sevā</em> is a core pillar: "One who performs selfless service, without thought of reward, shall attain the Lord" (GGS p. 286). Guru Nanak: "One cannot be called a Sikh who sits down to eat without sharing."`,
        scopeOfConcern: `Strongly <strong>egalitarian</strong> among humans (anti-caste). Guru Nanak: "Recognize the light of God in all, and do not ask for anyone's caste" (GGS p. 349).`,
        sfeAlignment: "High", sfeRating: 76,
        sfeExplanation: `Institutionalized suffering-reduction (langar, sevā), radical egalitarianism, and active compassion align strongly with SFE. Acceptance of divine will creates some tension.`,
        scriptures: [
            { text: "One who performs selfless service, without thought of reward, shall attain the Lord.", source: "Guru Granth Sahib, p. 286", theme: "obligation" },
            { text: "The world is burning in the fire of suffering; save it, O Lord, through Your mercy.", source: "Guru Granth Sahib, p. 853", theme: "nature" },
            { text: "Recognize the light of God in all, and do not ask for anyone's caste or birth.", source: "Guru Granth Sahib, p. 349", theme: "compassion" },
            { text: "Through selfless service, eternal peace is obtained.", source: "Guru Granth Sahib, p. 992", theme: "liberation" }
        ]
    },
    taoism: {
        name: "Taoism",
        symbol: "☯",
        color: "#A5D6A7",
        bgColor: "#E8F5E9",
        founded: "c. 4th century BCE",
        founder: "Laozi (traditionally)",
        keyTexts: "Tao Te Ching, Zhuangzi",
        overview: `Taoism approaches suffering through harmony with the Tao — the natural flow of reality. Suffering arises from <strong>resistance to natural flow</strong>, excessive desire, and forced action. The Taoist response is <em>wuwei</em> (non-forcing action). The Tao Te Ching emphasizes compassion (<em>cí</em>) as the highest virtue.`,
        natureOfSuffering: `Laozi sees suffering arising from excessive desires, rigid attachments, and imposing artificial order. Zhuangzi adds: by accepting the natural cycle of life and death, suffering loses its sting.`,
        moralObligation: `Compassion (<em>cí</em>) is the first of the "Three Treasures": "I have three treasures: the first is compassion, the second is frugality, the third is not daring to be first" (TTC 67). Chapter 49: "The sage takes the mind of the people as his mind."`,
        scopeOfConcern: `<strong>All of nature</strong> — "The Tao nourishes all things" (TTC 51). Ecological consciousness extends concern beyond humans.`,
        sfeAlignment: "Moderate", sfeRating: 58,
        sfeExplanation: `Compassion as first treasure and ecological consciousness are SFE-compatible. However, wuwei can suggest acceptance of suffering as natural, and equanimity toward death may reduce urgency.`,
        scriptures: [
            { text: "I have three treasures which I hold and keep: the first is compassion, the second is frugality, the third is not daring to be first in the world.", source: "Tao Te Ching, Chapter 67", theme: "compassion" },
            { text: "The sage has no fixed mind; he takes the mind of the people as his mind.", source: "Tao Te Ching, Chapter 49", theme: "compassion" },
            { text: "The Tao nourishes all things.", source: "Tao Te Ching, Chapter 51", theme: "compassion" },
            { text: "Nothing in the world is as soft and yielding as water. Yet for dissolving the hard and inflexible, nothing can surpass it.", source: "Tao Te Ching, Chapter 78", theme: "liberation" }
        ]
    },
    zoroastrianism: {
        name: "Zoroastrianism",
        symbol: "☉",
        color: "#FFAB91",
        bgColor: "#FBE9E7",
        founded: "c. 1500–1000 BCE",
        founder: "Zoroaster (Zarathustra)",
        keyTexts: "Avesta (Yasna, Vendidad, Yashts), Gāthās",
        overview: `Zoroastrianism presents suffering as a <strong>cosmic problem to be actively fought</strong>. Suffering is caused not by God (Ahura Mazdā) but by the destructive spirit (Angra Mainyu). Humans are called to be <strong>active soldiers</strong> against evil and suffering.`,
        natureOfSuffering: `Suffering originates from <em>druj</em> (the Lie/evil) — the force opposing <em>aša</em> (truth/righteousness). Ahura Mazdā did <em>not</em> create suffering — it comes from an opposing principle.`,
        moralObligation: `Active opposition to suffering is mandated. <em>Humata, hūkhta, hvarshta</em> (good thoughts, good words, good deeds). Yasna 33: "He who works for the betterment of the living, he is of Truth."`,
        scopeOfConcern: `Extends to <strong>animals, plants, and earth</strong>. Dogs and cattle receive special protection. Environmental destruction is sinful.`,
        sfeAlignment: "High", sfeRating: 73,
        sfeExplanation: `Understanding suffering as cosmic evil to be fought — not accepted, not redeemed — aligns remarkably with SFE. Broad scope and action-oriented ethics are strongly compatible.`,
        scriptures: [
            { text: "He who works for the betterment of the living, he is of Truth.", source: "Yasna 33.3-4 (Gāthās)", theme: "obligation" },
            { text: "Good thoughts, good words, good deeds.", source: "Core Zoroastrian maxim (Avesta)", theme: "obligation" },
            { text: "He who soothes the distressed, his soul reaches paradise.", source: "Vendidad 3.1 (Avesta)", theme: "compassion" },
            { text: "Making the world wonderful, excellent, and progressive — that is the purpose of creation.", source: "Yasna 34.15 (Gāthās)", theme: "liberation" }
        ]
    },
    confucianism: {
        name: "Confucianism",
        symbol: "儒",
        color: "#90CAF9",
        bgColor: "#E3F2FD",
        founded: "c. 5th century BCE",
        founder: "Confucius (Kǒng Fūzǐ)",
        keyTexts: "Analects, Mencius, Great Learning",
        overview: `Confucianism approaches suffering through <strong>social ethics</strong> centered on <em>rén</em> (仁, benevolence). Confucius and Mencius articulated the Golden Rule and emphasized compassionate concern. Mencius argued compassion is <em>innate</em> to human nature.`,
        natureOfSuffering: `Suffering results primarily from <strong>social disorder</strong> — breakdown of proper relationships, corruption of rulers, failure of moral cultivation.`,
        moralObligation: `Confucius: "Do not impose on others what you yourself do not desire" (Analects 15.24). Mencius (2A:6): "All people have a mind that cannot bear to see the suffering of others... If a person were to suddenly see a child about to fall into a well, they would all have a feeling of alarm and compassion."`,
        scopeOfConcern: `Primarily <strong>human and social</strong>, organized in concentric circles from family outward. Mencius extended some concern to animals. Graded love system contrasts with SFE's universalism.`,
        sfeAlignment: "Moderate", sfeRating: 55,
        sfeExplanation: `Benevolence (rén), innate compassion, and the negative Golden Rule align with SFE. However, graded love, focus on social harmony over suffering-elimination, and human-centered scope create differences.`,
        scriptures: [
            { text: "Do not impose on others what you yourself do not desire.", source: "Analects 15.24 (Confucius)", theme: "compassion" },
            { text: "If a person were to suddenly see a child about to fall into a well, they would all have a feeling of alarm and compassion.", source: "Mencius 2A:6", theme: "compassion" },
            { text: "Is benevolence really far away? If I want to be benevolent, then benevolence is here.", source: "Analects 7.30 (Confucius)", theme: "obligation" },
            { text: "The superior person is sparing with animals and feels compassion for the people.", source: "Mencius 7A:45", theme: "compassion" }
        ]
    }
};

// ===== COMPARISON DATA =====
const comparisonData = [
    { religion: "Buddhism", origin: "Craving (taṇhā) and ignorance; impersonal natural process", purpose: "No inherent purpose; the fundamental problem to be ended", obligation: "Very strong — karuṇā and mettā are supreme virtues; bodhisattva vows", scope: "All sentient beings without exception", afterlife: "Rebirth until nibbāna (cessation); no eternal heaven/hell", liberation: "Noble Eightfold Path → nibbāna", alignment: "Very High (95%)" },
    { religion: "Hinduism", origin: "Ignorance (avidyā); karma across lifetimes; tāpatraya", purpose: "Mixed — purification, karma; but 'future suffering is to be avoided'", obligation: "Strong — dayā, dāna, ahiṃsā are duties", scope: "All beings share ātman; limited by caste historically", afterlife: "Rebirth until mokṣa; karma determines conditions", liberation: "Multiple paths (jñāna, bhakti, karma yoga) → mokṣa", alignment: "High (75%)" },
    { religion: "Jainism", origin: "Karmic matter adheres to soul through violence and passions", purpose: "No redemptive purpose; purely result of harmful karma", obligation: "Absolute — ahiṃsā is the supreme principle", scope: "Most expansive — includes one-sensed beings", afterlife: "Rebirth until kevala and mokṣa; no creator God", liberation: "Right faith, knowledge, conduct (ratnatraya)", alignment: "Very High (97%)" },
    { religion: "Christianity", origin: "The Fall / Original Sin; broken world; divine mystery", purpose: "Can be redemptive (the Cross); but calls for active compassion", obligation: "Strong — Good Samaritan, 'the least of these'", scope: "Primarily human (imago Dei); stewardship of creation", afterlife: "Heaven or Hell; resurrection; eternal life", liberation: "Salvation through faith and grace", alignment: "Moderate-High (68%)" },
    { religion: "Islam", origin: "Divine test (ibtilāʾ); human sin; God's wisdom", purpose: "Test of faith and patience; purification; compensated in afterlife", obligation: "Strong — zakāt is a Pillar; feeding hungry is duty", scope: "Primarily human; animals deserve kindness", afterlife: "Jannah or Jahannam; final judgment; divine mercy", liberation: "Submission to God; righteous deeds; ṣabr", alignment: "Moderate (62%)" },
    { religion: "Judaism", origin: "Multiple views: sin, testing, mystery, human injustice", purpose: "Debated — testing, consequence; protest is permitted", obligation: "Very strong — tzedakah, tikkun olam, 'do not stand idly by'", scope: "Human-centered with animal welfare law", afterlife: "Complex views — Olam Ha-Ba; less afterlife emphasis", liberation: "Torah observance; justice; tikkun olam; messianic hope", alignment: "Moderate-High (70%)" },
    { religion: "Sikhism", origin: "Haumai (ego); attachment to māyā; karma", purpose: "Result of ego; opportunity for growth through sevā", obligation: "Very strong — sevā, langar, dasvandh", scope: "Strongly egalitarian; creation as divine manifestation", afterlife: "Rebirth until merger with God; no eternal hell", liberation: "Nām simran, sevā, Guru's grace → mukti", alignment: "High (76%)" },
    { religion: "Taoism", origin: "Resistance to natural flow; excessive desire", purpose: "Sign of disharmony; natural part of change", obligation: "Moderate — compassion is first Treasure; wuwei emphasis", scope: "All of nature; ecological consciousness", afterlife: "Varied — transformation; some traditions have afterlife", liberation: "Harmony with Tao; wuwei; simplicity", alignment: "Moderate (58%)" },
    { religion: "Zoroastrianism", origin: "Angra Mainyu (evil spirit); not from God", purpose: "No redemptive purpose — evil to be combated", obligation: "Very strong — humans are soldiers against evil", scope: "Humans, animals, plants, earth — broad", afterlife: "Heaven or temporary hell; final renovation ends all suffering", liberation: "Active good deeds; cosmic battle; eschatological hope", alignment: "High (73%)" },
    { religion: "Confucianism", origin: "Social disorder; moral failure; corruption", purpose: "Impetus for self-cultivation and social reform", obligation: "Strong — rén demands compassion; Golden Rule", scope: "Primarily human; graded love system", afterlife: "Minimal emphasis; this-worldly focus", liberation: "Self-cultivation; virtuous governance; education", alignment: "Moderate (55%)" }
];

// ===== SPECTRUM DATA =====
const spectrumData = [
    { name: "Jainism", score: 97, color: "#80CBC4" },
    { name: "Buddhism", score: 95, color: "#FFB347" },
    { name: "Sikhism", score: 76, color: "#FFD54F" },
    { name: "Hinduism", score: 75, color: "#FF8A80" },
    { name: "Zoroastrianism", score: 73, color: "#FFAB91" },
    { name: "Judaism", score: 70, color: "#CE93D8" },
    { name: "Christianity", score: 68, color: "#82B1FF" },
    { name: "Islam", score: 62, color: "#69F0AE" },
    { name: "Taoism", score: 58, color: "#A5D6A7" },
    { name: "Confucianism", score: 55, color: "#90CAF9" }
];

// ===== GET ALL SCRIPTURES =====
function getAllScriptures() {
    const scriptures = [];
    for (const [key, religion] of Object.entries(religionsData)) {
        religion.scriptures.forEach(s => {
            scriptures.push({ ...s, religion: religion.name, religionKey: key, color: religion.color });
        });
    }
    const extras = [
        { text: "I look upon all creatures equally; none are less dear to me and none more dear.", source: "Bhagavad Gītā 9.29", theme: "compassion", religion: "Hinduism", religionKey: "hinduism", color: "#FF8A80" },
        { text: "Feed the hungry and visit a sick person, and free the captive if he be unjustly confined.", source: "Ṣaḥīḥ al-Bukhārī 5649", theme: "obligation", religion: "Islam", religionKey: "islam", color: "#69F0AE" },
        { text: "May all beings be happy. May all beings be without disease. May nobody suffer in any way.", source: "Traditional Buddhist prayer (Pali liturgy)", theme: "compassion", religion: "Buddhism", religionKey: "buddhism", color: "#FFB347" }
    ];
    return [...scriptures, ...extras];
}

// ===========================
// APPLICATION INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1800);

    initNavbar();
    initReligionTabs();
    initComparisonTable();
    initScriptureGallery();
    initSpectrumChart();
    initScrollReveal();
    initBackToTop();
    initCountUp();
    initTiltEffect();
    initImageProtection();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveLink();
    });

    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    links.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            if (scrollY >= section.offsetTop - 120) current = section.id;
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
}

// ===== RELIGION TABS =====
function initReligionTabs() {
    const tabs = document.querySelectorAll('.religion-tab');
    const content = document.getElementById('religionContent');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderReligion(tab.dataset.religion);
        });
    });

    renderReligion('buddhism');

    function renderReligion(key) {
        const r = religionsData[key];
        if (!r) return;

        let badgeClass = 'alignment-moderate';
        if (r.sfeRating >= 90) badgeClass = 'alignment-very-high';
        else if (r.sfeRating >= 70) badgeClass = 'alignment-high';
        else if (r.sfeRating >= 55) badgeClass = 'alignment-moderate';
        else badgeClass = 'alignment-partial';

        content.innerHTML = `
            <div class="religion-header">
                <div class="religion-icon" style="background: ${r.bgColor}; color: ${r.color};">${r.symbol}</div>
                <div class="religion-header-text">
                    <h3>${r.name}</h3>
                    <span class="religion-meta">Founded: ${r.founded} · ${r.keyTexts}</span>
                </div>
            </div>
            <div class="religion-body">
                <div>
                    <div class="religion-section">
                        <h4>Overview & Relationship to Suffering</h4>
                        <p>${r.overview}</p>
                    </div>
                    <div class="religion-section">
                        <h4>Nature & Origin of Suffering</h4>
                        <p>${r.natureOfSuffering}</p>
                    </div>
                    <div class="religion-section">
                        <h4>SFE Alignment: ${r.sfeAlignment}</h4>
                        <div class="sfe-alignment-badge ${badgeClass}">● ${r.sfeAlignment} (${r.sfeRating}%)</div>
                        <p style="margin-top: 12px;">${r.sfeExplanation}</p>
                    </div>
                </div>
                <div>
                    <div class="religion-section">
                        <h4>Moral Obligation to Reduce Suffering</h4>
                        <p>${r.moralObligation}</p>
                    </div>
                    <div class="religion-section">
                        <h4>Scope of Moral Concern</h4>
                        <p>${r.scopeOfConcern}</p>
                    </div>
                    <div class="religion-section">
                        <h4>Key Scriptural References</h4>
                        ${r.scriptures.map(s => `
                            <div class="scripture-quote">
                                <blockquote>"${s.text}"</blockquote>
                                <cite>— ${s.source}</cite>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        content.style.animation = 'none';
        content.offsetHeight;
        content.style.animation = 'fadeIn 0.4s ease';
    }
}

// ===== COMPARISON TABLE =====
function initComparisonTable() {
    const tbody = document.getElementById('comparisonBody');
    const filters = document.querySelectorAll('.dim-filter');

    renderTable('all');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            renderTable(filter.dataset.dimension);
        });
    });

    function renderTable(dimension) {
        const table = document.getElementById('comparisonTable');
        table.querySelectorAll('th[data-dim]').forEach(th => {
            th.style.display = (dimension === 'all' || th.dataset.dim === dimension) ? '' : 'none';
        });

        const dims = ['origin', 'purpose', 'obligation', 'scope', 'afterlife', 'liberation', 'alignment'];
        tbody.innerHTML = comparisonData.map(row => {
            const cells = dims.map(dim => {
                const display = (dimension === 'all' || dimension === dim) ? '' : 'display:none;';
                return `<td style="${display}">${row[dim]}</td>`;
            }).join('');
            return `<tr><td>${row.religion}</td>${cells}</tr>`;
        }).join('');
    }
}

// ===== SCRIPTURE GALLERY =====
function initScriptureGallery() {
    const grid = document.getElementById('scriptureGrid');
    const filters = document.querySelectorAll('.scripture-filter');
    const allScriptures = getAllScriptures();

    renderScriptures('all');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            renderScriptures(filter.dataset.theme);
        });
    });

    function renderScriptures(theme) {
        const filtered = theme === 'all' ? allScriptures : allScriptures.filter(s => s.theme === theme);
        grid.innerHTML = filtered.map((s, i) => `
            <div class="scripture-card" style="--card-color: ${s.color}; animation: fadeInUp 0.5s ease ${i * 0.05}s both;">
                <div class="scripture-card-header">
                    <span class="scripture-religion-badge" style="background: ${s.color}30; color: ${s.color};">${s.religion}</span>
                    <span class="scripture-theme-badge">${s.theme}</span>
                </div>
                <blockquote>"${s.text}"</blockquote>
                <cite>— ${s.source}</cite>
            </div>
        `).join('');
    }
}

// ===== SPECTRUM CHART =====
function initSpectrumChart() {
    const chart = document.getElementById('spectrumChart');
    chart.innerHTML = spectrumData.map(item => `
        <div class="spectrum-item">
            <span class="spectrum-label">${item.name}</span>
            <div class="spectrum-bar-container">
                <div class="spectrum-bar" style="width: 0%; background: ${item.color};" data-width="${item.score}%">
                    <span>${item.score}%</span>
                </div>
            </div>
        </div>
    `).join('');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                chart.querySelectorAll('.spectrum-bar').forEach((bar, i) => {
                    setTimeout(() => { bar.style.width = bar.dataset.width; }, i * 120);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(chart);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.section-header, .clay-card, .principle-card, .variant-card, .author-card, .source-category, .sfe-sidebar > *, .authors-intro'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, i * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== COUNT UP ANIMATION =====
function initCountUp() {
    const counters = document.querySelectorAll('.stat-num[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + (target === 50 ? '+' : '');
                }, 40);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// ===== TILT EFFECT =====
function initTiltEffect() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===== IMAGE PROTECTION =====
function initImageProtection() {
    // Prevent right-click on author photos
    document.querySelectorAll('.author-photo-frame').forEach(frame => {
        frame.addEventListener('contextmenu', e => e.preventDefault());
        frame.addEventListener('dragstart', e => e.preventDefault());
    });

    // Prevent saving via long press on mobile
    document.querySelectorAll('.author-photo').forEach(img => {
        img.addEventListener('touchstart', e => {
            e.preventDefault();
        }, { passive: false });
    });

    // Add CSS to prevent selection and download
    const style = document.createElement('style');
    style.textContent = `
        .author-photo-frame * {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -khtml-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
    `;
    document.head.appendChild(style);
}
