// ============================================
// SUFFERING-FOCUSED ETHICS: WORLD RELIGIONS
// Interactive Data & Application Logic
// ============================================

// ===== RELIGION DATA (All scriptural references are authentic) =====
const religionsData = {
    buddhism: {
        name: "Buddhism",
        symbol: "☸",
        color: "#FFB347",
        founded: "c. 5th century BCE",
        founder: "Siddhārtha Gautama (The Buddha)",
        keyTexts: "Pali Canon (Tipiṭaka), Mahāyāna Sūtras, Dhammapada",
        overview: `Buddhism is perhaps the world's most explicitly suffering-focused religion. The entire teaching (Dharma) is structured around the problem of suffering (<em>dukkha</em>). The Buddha famously stated: "Both formerly and now, it is only dukkha that I describe, and the cessation of dukkha" (SN 22.86). The Four Noble Truths — the foundational teaching of all Buddhist schools — are entirely focused on understanding, diagnosing, and eliminating suffering.`,
        natureOfSuffering: `The Buddha identified three types of <em>dukkha</em>: (1) <em>dukkha-dukkha</em> — ordinary suffering (pain, grief, distress); (2) <em>viparināma-dukkha</em> — suffering due to impermanence (even pleasant experiences cause suffering when they end); (3) <em>saṅkhāra-dukkha</em> — the pervasive unsatisfactoriness of conditioned existence itself. Suffering arises from <em>taṇhā</em> (craving) and <em>avijjā</em> (ignorance) — not from divine punishment.`,
        moralObligation: `Mahāyāna Buddhism introduces the <em>bodhisattva</em> ideal — the aspiration to attain enlightenment <strong>for the sake of all sentient beings</strong>. The bodhisattva vow explicitly states: "Sentient beings are numberless; I vow to save them all." Theravāda Buddhism emphasizes <em>mettā</em> (loving-kindness) and <em>karuṇā</em> (compassion) as among the highest virtues (<em>Brahmavihāras</em>). The Dhammapada states: "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is an eternal law" (Dhp 5).`,
        scopeOfConcern: `Buddhism extends moral concern to <strong>all sentient beings</strong> (<em>sattva</em>) — humans, animals, and beings in other realms. The first precept (<em>pāṇātipātā veramaṇī</em>) is to abstain from killing <em>any</em> living being. The Mettā Sutta instructs: "Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings" (Sn 1.8).`,
        sfeAlignment: "Very High",
        sfeRating: 95,
        sfeExplanation: `Buddhism is structurally almost identical to SFE: suffering is the central moral problem; its cessation is the ultimate goal; compassion for all sentient beings is the foundational motivation; and the scope of concern is universal across species. The key difference is that Buddhism also emphasizes personal liberation (nibbāna) alongside altruistic concern.`,
        scriptures: [
            {
                text: "Both formerly and now, monks, it is only dukkha that I describe, and the cessation of dukkha.",
                source: "Saṃyutta Nikāya 22.86 (Pali Canon)",
                theme: "nature"
            },
            {
                text: "Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings; radiating kindness over the entire world.",
                source: "Mettā Sutta, Sutta Nipāta 1.8 (Pali Canon)",
                theme: "compassion"
            },
            {
                text: "All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.",
                source: "Dhammapada 129",
                theme: "nonviolence"
            },
            {
                text: "May all beings be happy. May all beings be without disease. May all beings experience the sensation of auspiciousness. May nobody suffer in any way.",
                source: "Traditional Buddhist prayer (from Pali liturgy)",
                theme: "compassion"
            }
        ]
    },

    hinduism: {
        name: "Hinduism",
        symbol: "ॐ",
        color: "#FF6B6B",
        founded: "c. 2000–1500 BCE (Vedic period)",
        founder: "No single founder (ancient tradition)",
        keyTexts: "Vedas, Upanishads, Bhagavad Gītā, Yoga Sūtras, Dharmaśāstra",
        overview: `Hinduism addresses suffering through multiple philosophical frameworks. The concept of <em>duḥkha</em> (suffering/sorrow) is central to Hindu philosophy, particularly in the <em>Sāṅkhya</em> and <em>Yoga</em> schools. Patañjali's Yoga Sūtras state: "The suffering that has not yet come is to be avoided" (YS 2.16) — a remarkably SFE-compatible statement. However, Hinduism also situates suffering within the frameworks of <em>karma</em> (moral causation) and <em>dharma</em> (cosmic duty).`,
        natureOfSuffering: `Hindu philosophy identifies three types of suffering (<em>tāpatraya</em>): (1) <em>ādhyātmika</em> — suffering from oneself (disease, mental anguish); (2) <em>ādhibhautika</em> — suffering from other beings; (3) <em>ādhidaivika</em> — suffering from natural forces (fate, divine causes). The ultimate source of suffering is <em>avidyā</em> (ignorance) — mistaking the transient for the eternal, the non-self for the self. Karma governs the distribution of suffering across lifetimes.`,
        moralObligation: `The Bhagavad Gītā (16.1-3) lists <em>dayā</em> (compassion to all beings) and <em>ahiṃsā</em> (non-violence) among the divine qualities. The Ṛg Veda contains an extraordinary passage: "The one who eats alone, eats sin" (RV 10.117.6), mandating the sharing of food with the hungry. <em>Dāna</em> (charitable giving) is a fundamental duty. The Mahābhārata (Anuśāsana Parva 113.8) declares: "Non-violence is the highest dharma" (<em>ahiṃsā paramo dharmaḥ</em>).`,
        scopeOfConcern: `Hinduism's scope is complex. <em>Ahiṃsā</em> extends to all creatures — "One should not injure any creature" (Manusmṛti 4.32). The concept of <em>ātman</em> (the universal self present in all beings) provides a metaphysical basis for universal compassion: "He who sees all beings in the Self and the Self in all beings, he never turns away from it" (Īśā Upaniṣad 6). However, the caste system historically limited practical scope.`,
        sfeAlignment: "High",
        sfeRating: 75,
        sfeExplanation: `Hinduism contains strong SFE-compatible elements: ahiṃsā, universal compassion, and the mandate to prevent future suffering (YS 2.16). However, the karma doctrine can imply that suffering is deserved, dharmic duty sometimes overrides compassion (Arjuna's duty to fight), and mokṣa (liberation) is focused on individual transcendence.`,
        scriptures: [
            {
                text: "The suffering that has not yet come is to be avoided.",
                source: "Yoga Sūtras of Patañjali 2.16",
                theme: "nature"
            },
            {
                text: "The one who eats alone, eats sin.",
                source: "Ṛg Veda 10.117.6",
                theme: "obligation"
            },
            {
                text: "He who sees all beings in the Self and the Self in all beings, he never turns away from it [the Self].",
                source: "Īśā Upaniṣad 6",
                theme: "compassion"
            },
            {
                text: "Non-violence is the highest dharma. Non-violence is the highest self-control. Non-violence is the greatest gift.",
                source: "Mahābhārata, Anuśāsana Parva 113.8",
                theme: "nonviolence"
            }
        ]
    },

    jainism: {
        name: "Jainism",
        symbol: "✠",
        color: "#98D8C8",
        founded: "c. 9th–6th century BCE",
        founder: "Mahāvīra (24th Tīrthaṅkara; tradition holds much older origins)",
        keyTexts: "Ācārāṅga Sūtra, Tattvārtha Sūtra, Daśavaikālika Sūtra, Uttarādhyayana Sūtra",
        overview: `Jainism may represent the most radically suffering-focused ethical system in human history. The principle of <em>ahiṃsā</em> (non-violence/non-harm) is not merely a rule but the <strong>supreme ethical principle</strong> from which all other ethics derive. Jain monks sweep the ground before them to avoid stepping on insects and wear cloth over their mouths to avoid inhaling small creatures. This level of commitment to preventing suffering in <em>all</em> sentient beings is unmatched in any other tradition.`,
        natureOfSuffering: `In Jain metaphysics, suffering results from <em>karma</em> — understood as a subtle material substance that adheres to the soul (<em>jīva</em>) through harmful actions. The <em>Tattvārtha Sūtra</em> (6.1-2) explains that karmic bondage arises from <em>hiṃsā</em> (violence), attachment, carelessness, and passions. All souls in the cycle of rebirth (<em>saṃsāra</em>) experience suffering. The goal is to liberate the soul entirely from karmic matter.`,
        moralObligation: `The <em>Ācārāṅga Sūtra</em> (1.4.1) states: "All beings are fond of life; they like pleasure, hate pain, shun destruction, like life, long to live. To all, life is dear." This remarkable passage — dating to approximately the 4th century BCE — articulates a universal empathy grounded in the shared capacity for suffering. The ethical implication is absolute: one must not cause suffering to <em>any</em> being. The five great vows (<em>mahāvratas</em>) all center on non-harm.`,
        scopeOfConcern: `Jainism has the <strong>widest scope of moral concern</strong> of any religion. It recognizes sentient life in categories from one-sensed beings (earth, water, fire, air, and plant bodies) to five-sensed beings (humans, animals). Even earth and water contain <em>jīvas</em> (souls) capable of suffering. The <em>Daśavaikālika Sūtra</em> (6.9) declares: "You are the one whom you intend to kill. You are the one you intend to tyrannize over. The enlightened one who understands this will neither kill nor cause killing."`,
        sfeAlignment: "Very High",
        sfeRating: 97,
        sfeExplanation: `Jainism is the closest to pure SFE of any world religion: suffering-prevention (ahiṃsā) is the supreme and foundational ethical principle; the scope of moral concern extends to all sentient beings including micro-organisms; there is no divine plan that justifies suffering; and the entire ethical system is oriented around the reduction of harm.`,
        scriptures: [
            {
                text: "All beings are fond of life; they like pleasure, hate pain, shun destruction, like life, long to live. To all, life is dear.",
                source: "Ācārāṅga Sūtra 1.4.1",
                theme: "compassion"
            },
            {
                text: "You are the one whom you intend to kill. You are the one you intend to tyrannize over.",
                source: "Daśavaikālika Sūtra 6.9",
                theme: "nonviolence"
            },
            {
                text: "Non-violence is the highest religion. (Ahiṃsā paramo dharmaḥ)",
                source: "Jain maxim (found across Jain scriptures including Tattvārtha Sūtra)",
                theme: "nonviolence"
            },
            {
                text: "One who neglects or disregards the existence of earth, water, fire, air, and vegetation disregards his own existence which is entwined with them.",
                source: "Ācārāṅga Sūtra 1.1",
                theme: "compassion"
            }
        ]
    },

    christianity: {
        name: "Christianity",
        symbol: "✞",
        color: "#7EC8E3",
        founded: "c. 1st century CE",
        founder: "Jesus of Nazareth (Christ)",
        keyTexts: "The Bible (Old and New Testaments), particularly the Gospels, Epistles of Paul",
        overview: `Christianity has a complex and unique relationship with suffering. On one hand, Jesus's ministry focused intensely on alleviating suffering — healing the sick, feeding the hungry, comforting the grieving. His identification with the suffering ("whatever you did for one of the least of these brothers and sisters of mine, you did for me" — Matt 25:40) is profoundly SFE-compatible. On the other hand, Christianity uniquely valorizes suffering through the theology of the Cross: Christ's suffering redeems humanity, and believers are called to "take up their cross."`,
        natureOfSuffering: `Christian theology traces suffering to the Fall — humanity's original sin introduced suffering and death into a previously perfect creation (Romans 5:12). Suffering is also attributed to the brokenness of a fallen world, the consequences of human sin, and sometimes divine testing or discipline. The Book of Job wrestles with innocent suffering, ultimately affirming God's mystery rather than providing a clear answer. Paul writes: "We know that the whole creation has been groaning as in the pains of childbirth" (Romans 8:22).`,
        moralObligation: `Jesus's ethical teaching places immense emphasis on responding to suffering. The Parable of the Good Samaritan (Luke 10:25-37) defines neighborly love as active compassion for the suffering. The Beatitudes bless "those who mourn" and "the merciful" (Matt 5:4-7). The prophetic tradition demands justice for the oppressed: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow" (Isaiah 1:17). James 2:15-16 insists faith without works of compassion is dead.`,
        scopeOfConcern: `Christianity's primary scope is <strong>human beings</strong>, made in the image of God (<em>imago Dei</em>). However, stewardship theology extends some concern to creation: "The righteous care for the needs of their animals" (Prov 12:10). Jesus noted God's care for sparrows (Matt 10:29). Liberation theology and Catholic social teaching have extended Christian ethics strongly toward the poor and marginalized — a "preferential option for the poor."`,
        sfeAlignment: "Moderate-High",
        sfeRating: 68,
        sfeExplanation: `Christianity contains powerful SFE-compatible elements: Jesus's radical compassion, the mandate to serve the suffering, prophetic justice. However, redemptive suffering theology (suffering can be meaningful/salvific), belief in afterlife compensation, and primarily human-centered moral scope create significant divergences from pure SFE.`,
        scriptures: [
            {
                text: "Whatever you did for one of the least of these brothers and sisters of mine, you did for me.",
                source: "Matthew 25:40 (NIV)",
                theme: "obligation"
            },
            {
                text: "Learn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.",
                source: "Isaiah 1:17 (NIV)",
                theme: "justice"
            },
            {
                text: "Blessed are the merciful, for they will be shown mercy.",
                source: "Matthew 5:7 (NIV, Sermon on the Mount)",
                theme: "compassion"
            },
            {
                text: "We know that the whole creation has been groaning as in the pains of childbirth right up to the present time.",
                source: "Romans 8:22 (NIV)",
                theme: "nature"
            }
        ]
    },

    islam: {
        name: "Islam",
        symbol: "☪",
        color: "#45B7A0",
        founded: "7th century CE",
        founder: "Prophet Muhammad ﷺ",
        keyTexts: "The Qur'an, Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim (Hadith collections)",
        overview: `Islam addresses suffering within a framework of divine mercy (<em>raḥma</em>), justice (<em>ʿadl</em>), and testing (<em>ibtilāʾ</em>). God is invoked in every chapter of the Qur'an (except one) as <em>ar-Raḥmān ar-Raḥīm</em> — "The Most Gracious, The Most Merciful." The ethical system places enormous emphasis on alleviating suffering through mandatory charity (<em>zakāt</em>), care for orphans, feeding the hungry, and freeing slaves. The Prophet Muhammad ﷺ said: "The most beloved of people to Allah are those who are most beneficial to people" (al-Muʿjam al-Awsaṭ, graded ḥasan by al-Albānī).`,
        natureOfSuffering: `The Qur'an presents suffering as a test (<em>ibtilāʾ</em>) from God: "We will certainly test you with something of fear and hunger and loss of wealth and lives and fruits; but give glad tidings to the patient" (Q 2:155). Suffering is also a consequence of human action and injustice. Sūrah al-Inshirāḥ (94:5-6) offers comfort: "Verily, with hardship comes ease. Verily, with hardship comes ease." Suffering is temporary; divine compensation in the Hereafter is eternal.`,
        moralObligation: `<em>Zakāt</em> (obligatory charity, one of the Five Pillars) is not optional but a fundamental religious duty. The Qur'an repeatedly links faith with caring for the vulnerable: "Have you seen the one who denies the Judgment? That is the one who drives away the orphan, and does not encourage the feeding of the poor" (Q 107:1-3). The hadith literature further emphasizes: "He is not a believer whose stomach is filled while his neighbor goes hungry" (Ṣaḥīḥ al-Bukhārī, Al-Adab al-Mufrad). Sūrah al-Balad (90:12-16) defines the steep path of righteousness as freeing slaves and feeding the destitute.`,
        scopeOfConcern: `Islam's primary moral scope is <strong>human beings</strong>, though it includes significant concern for animals. The Prophet ﷺ narrated that a woman entered Hell for starving a cat and a man was forgiven for giving water to a thirsty dog (Ṣaḥīḥ al-Bukhārī 3482, Ṣaḥīḥ Muslim 2244). The Qur'an states: "There is no creature on earth, nor any bird that flies with its wings, but they are communities like you" (Q 6:38).`,
        sfeAlignment: "Moderate",
        sfeRating: 62,
        sfeExplanation: `Islam has strong SFE-compatible elements: mandatory charity, God's mercy as the supreme attribute, robust obligations to the suffering. However, suffering-as-divine-test theology, afterlife compensation, acceptance of God's decree (qadar), and less emphasis on animal welfare compared to Eastern traditions create divergence from pure SFE.`,
        scriptures: [
            {
                text: "Verily, with hardship comes ease. Verily, with hardship comes ease.",
                source: "Qur'an, Sūrah al-Inshirāḥ (94:5-6)",
                theme: "nature"
            },
            {
                text: "Have you seen the one who denies the Judgment? That is the one who drives away the orphan, and does not encourage the feeding of the poor.",
                source: "Qur'an, Sūrah al-Māʿūn (107:1-3)",
                theme: "obligation"
            },
            {
                text: "He is not a believer whose stomach is filled while his neighbor goes hungry.",
                source: "Ṣaḥīḥ al-Bukhārī (Al-Adab al-Mufrad)",
                theme: "obligation"
            },
            {
                text: "There is no creature on earth, nor any bird that flies with its wings, but they are communities like you.",
                source: "Qur'an, Sūrah Al-Anʿām (6:38)",
                theme: "compassion"
            }
        ]
    },

    judaism: {
        name: "Judaism",
        symbol: "✡",
        color: "#B8A9C9",
        founded: "c. 2000–1500 BCE (Patriarchal period)",
        founder: "Abraham (patriarch); Moses (lawgiver)",
        keyTexts: "Torah (Pentateuch), Tanakh, Talmud, Midrash",
        overview: `Judaism engages deeply with suffering through law, prophecy, and philosophical reflection. The Hebrew Bible contains some of the most powerful protests against suffering in world literature — Job's cry, the Psalms of lament, the prophets' rage against injustice. The concept of <em>tzedakah</em> (justice/righteousness, often translated as "charity") is not voluntary generosity but an <strong>obligation of justice</strong>. The Talmudic principle <em>tikkun olam</em> ("repair of the world") motivates Jews to actively reduce suffering in the world.`,
        natureOfSuffering: `Judaism wrestles with suffering without providing a single definitive answer. The Book of Job is the Bible's most sustained meditation on innocent suffering, and it refuses easy answers. Suffering may result from sin (Deuteronomy 28), from divine testing (Genesis 22), from the mystery of God's ways (Job 38-42), or from human injustice. The Talmud (Berakhot 5a) discusses "sufferings of love" (<em>yissurin shel ahavah</em>) — suffering that purifies — but also affirms the right to protest suffering.`,
        moralObligation: `The obligation to reduce suffering is deeply embedded in Jewish law (<em>halakhah</em>). <em>Tzedakah</em> is mandatory — Maimonides codified eight levels of charity (Mishneh Torah, Gifts to the Poor 10:7-14). "You shall not stand idly by the blood of your neighbor" (Lev 19:16) is interpreted broadly as an obligation to prevent harm. The prophetic tradition thunders: "Is not this the fast that I choose: to loose the bonds of injustice... to let the oppressed go free?" (Isaiah 58:6). The Talmud declares: "Whoever saves a single life, it is as if they saved the entire world" (Sanhedrin 37a).`,
        scopeOfConcern: `Judaism's scope primarily centers on <strong>human beings</strong> but includes significant animal welfare provisions. <em>Tza'ar ba'alei chayim</em> — the prohibition of cruelty to animals — is a binding principle of Jewish law. Deuteronomy 25:4 forbids muzzling an ox while it treads grain. The Talmud requires feeding animals before oneself (Berakhot 40a). However, human life takes clear priority.`,
        sfeAlignment: "Moderate-High",
        sfeRating: 70,
        sfeExplanation: `Judaism's obligation-based approach to suffering (tzedakah, tikkun olam, prophetic justice) is strongly SFE-compatible. The tradition of protesting suffering (Job, Psalms) aligns with SFE's refusal to accept suffering passively. However, divine mystery theology, afterlife beliefs, and human-centered scope create some divergence.`,
        scriptures: [
            {
                text: "Whoever saves a single life, it is as if they saved the entire world.",
                source: "Talmud, Sanhedrin 37a",
                theme: "obligation"
            },
            {
                text: "Is not this the fast that I choose: to loose the bonds of injustice, to undo the straps of the yoke, to let the oppressed go free, and to break every yoke?",
                source: "Isaiah 58:6 (Tanakh)",
                theme: "justice"
            },
            {
                text: "You shall not stand idly by the blood of your neighbor.",
                source: "Leviticus 19:16 (Torah)",
                theme: "obligation"
            },
            {
                text: "What is hateful to you, do not do to your fellow. That is the whole Torah; the rest is commentary — go and learn it.",
                source: "Talmud, Shabbat 31a (Hillel the Elder)",
                theme: "compassion"
            }
        ]
    },

    sikhism: {
        name: "Sikhism",
        symbol: "☬",
        color: "#F7DC6F",
        founded: "15th century CE",
        founder: "Guru Nanak Dev Ji",
        keyTexts: "Guru Granth Sahib (Ādi Granth)",
        overview: `Sikhism addresses suffering through the lens of divine will (<em>hukam</em>), selfless service (<em>sevā</em>), and remembrance of God (<em>nām simran</em>). The Guru Granth Sahib — the eternal Guru — contains extensive reflections on suffering, compassion, and the duty to serve others. Sikhism is remarkable for its <strong>institutionalized practice of suffering-reduction</strong>: the <em>langar</em> (communal kitchen) feeds anyone regardless of caste, religion, or status, and the concept of <em>dasvandh</em> (tithing one-tenth of earnings) funds community welfare.`,
        natureOfSuffering: `The Guru Granth Sahib teaches that suffering arises from <em>haumai</em> (ego/self-centeredness) and attachment to the material world (<em>māyā</em>). Guru Nanak wrote: "The world is burning in the fire of suffering; save it, O Lord, through Your mercy" (GGS, p. 853). Suffering is also understood through <em>hukam</em> (divine order) — accepting God's will while still actively serving others. Guru Arjan Dev, who himself was martyred, wrote: "Your Will is so sweet to me. Nanak begs for the treasure of the Name of the Lord" (GGS, p. 394).`,
        moralObligation: `<em>Sevā</em> (selfless service) is one of the three pillars of Sikh practice. The Guru Granth Sahib states: "One who performs selfless service, without thought of reward, shall attain the Lord" (GGS, p. 286). Guru Nanak declared: "One cannot be called a Sikh of the Guru who sits down to eat without sharing" (Vārān Bhāī Gurdās 6:12). The institution of <em>langar</em> is perhaps the world's largest ongoing charitable food program, rooted in the principle that no one should go hungry.`,
        scopeOfConcern: `Sikhism emphasizes <strong>universal human equality</strong> with great force — it arose partly in protest against caste discrimination. Guru Nanak: "Recognize the light of God in all, and do not ask for anyone's caste or birth. There are no castes in the next world" (GGS, p. 349). Animal welfare is valued but human service takes priority. The Guru Granth Sahib speaks of compassion for all creation: "The Lord is the Giver of all beings" (GGS, p. 97).`,
        sfeAlignment: "High",
        sfeRating: 76,
        sfeExplanation: `Sikhism's institutionalized practice of suffering-reduction (langar, sevā), radical egalitarianism, and emphasis on active compassion align strongly with SFE. The concept of haumai (ego as the root of suffering) parallels Buddhist analysis. However, acceptance of divine will (hukam) and primarily human-centered scope create some tension with pure SFE.`,
        scriptures: [
            {
                text: "One who performs selfless service, without thought of reward, shall attain the Lord.",
                source: "Guru Granth Sahib, p. 286",
                theme: "obligation"
            },
            {
                text: "The world is burning in the fire of suffering; save it, O Lord, through Your mercy.",
                source: "Guru Granth Sahib, p. 853 (Guru Nanak)",
                theme: "nature"
            },
            {
                text: "Recognize the light of God in all, and do not ask for anyone's caste or birth.",
                source: "Guru Granth Sahib, p. 349",
                theme: "compassion"
            },
            {
                text: "Through selfless service, eternal peace is obtained.",
                source: "Guru Granth Sahib, p. 992",
                theme: "liberation"
            }
        ]
    },

    taoism: {
        name: "Taoism",
        symbol: "☯",
        color: "#82E0AA",
        founded: "c. 4th century BCE",
        founder: "Laozi (Lao Tzu), traditionally",
        keyTexts: "Tao Te Ching (Dào Dé Jīng), Zhuangzi",
        overview: `Taoism approaches suffering through the lens of harmony with the Tao (the Way) — the natural, effortless flow of reality. Suffering arises from <strong>resistance to natural flow</strong>, excessive desire, and forced action. The Taoist response is <em>wuwei</em> (non-forcing action) — not passive indifference but acting in harmony with nature rather than against it. The Tao Te Ching emphasizes gentleness, humility, and compassion (<em>cí</em>) as the highest virtues.`,
        natureOfSuffering: `Laozi sees suffering as arising from excessive desires, rigid attachments, and the human tendency to impose artificial order on natural processes. "The five colors blind the eye. The five tones deafen the ear. The five flavors dull the taste" (TTC 12). Suffering also comes from social constructions — status, wealth, competition — that divide people from the Tao. Zhuangzi adds a radical perspective: by embracing transformation and accepting the natural cycle of life and death, suffering loses its sting.`,
        moralObligation: `The Tao Te Ching names compassion (<em>cí</em>) as the first of the "Three Treasures": "I have three treasures which I hold and keep: the first is compassion (<em>cí</em>), the second is frugality, the third is not daring to be first in the world" (TTC 67). Chapter 49 states: "The sage has no fixed mind; he takes the mind of the people as his mind. To the good, I am good. To the not-good, I am also good. This is the goodness of virtue." The emphasis is on spontaneous, natural compassion rather than rule-based obligation.`,
        scopeOfConcern: `Taoism's scope is <strong>all of nature</strong> — the Tao pervades everything. "The Tao nourishes all things" (TTC 51). This ecological consciousness means Taoism naturally extends concern beyond humans to all living systems. However, this concern is expressed through harmony and non-interference rather than active intervention.`,
        sfeAlignment: "Moderate",
        sfeRating: 58,
        sfeExplanation: `Taoism's emphasis on compassion as the first treasure and its ecological consciousness are SFE-compatible. However, the wuwei principle can suggest acceptance of suffering as natural, the framework prioritizes harmony with nature over active suffering-reduction, and Zhuangzi's equanimity toward death and transformation may reduce urgency about suffering.`,
        scriptures: [
            {
                text: "I have three treasures which I hold and keep: the first is compassion, the second is frugality, the third is not daring to be first in the world.",
                source: "Tao Te Ching, Chapter 67 (Laozi)",
                theme: "compassion"
            },
            {
                text: "The sage has no fixed mind; he takes the mind of the people as his mind. To the good I am good. To the not-good I am also good.",
                source: "Tao Te Ching, Chapter 49",
                theme: "compassion"
            },
            {
                text: "The Tao nourishes all things.",
                source: "Tao Te Ching, Chapter 51",
                theme: "compassion"
            },
            {
                text: "Nothing in the world is as soft and yielding as water. Yet for dissolving the hard and inflexible, nothing can surpass it.",
                source: "Tao Te Ching, Chapter 78",
                theme: "liberation"
            }
        ]
    },

    zoroastrianism: {
        name: "Zoroastrianism",
        symbol: "☉",
        color: "#F0B27A",
        founded: "c. 1500–1000 BCE (debated)",
        founder: "Zoroaster (Zarathustra)",
        keyTexts: "Avesta (Yasna, Vendidad, Yashts), Gāthās of Zarathustra",
        overview: `Zoroastrianism is the world's first major religion to present suffering as a <strong>cosmic problem to be actively fought</strong>. In the Zoroastrian worldview, suffering is not caused by God (Ahura Mazdā) but by the destructive spirit (Angra Mainyu/Ahriman). Human beings are called to be <strong>active soldiers</strong> in the cosmic battle against evil, suffering, and destruction. This makes Zoroastrianism uniquely action-oriented in its approach to suffering — suffering is neither accepted nor celebrated but <em>combated</em>.`,
        natureOfSuffering: `Suffering originates from <em>druj</em> (the Lie, evil, disorder) — the force of Angra Mainyu that opposes <em>aša</em> (truth, righteousness, cosmic order). Disease, cruelty, poverty, and death are all manifestations of druj. Crucially, Ahura Mazdā did <em>not</em> create suffering — it comes from an opposing principle. This cosmic dualism solves the theodicy problem: God is wholly good; suffering comes from an enemy to be defeated.`,
        moralObligation: `Zoroastrianism mandates <strong>active opposition to suffering</strong>. The threefold path — <em>humata</em> (good thoughts), <em>hūkhta</em> (good words), <em>hvarshta</em> (good deeds) — requires positive action against evil and suffering. The Vendidad (legal text) prescribes caring for the sick and treating animals well. Yasna 33.3-4 states that the righteous person is one "who works for the betterment of the living." Charity and help for the poor are religious duties.`,
        scopeOfConcern: `Zoroastrianism extends moral concern to <strong>animals, plants, and the earth itself</strong>. The sanctity of fire, water, earth, and air means environmental destruction is a sin. Dogs and cattle receive special protection in Zoroastrian law. The Vendidad (13.1-15) prescribes severe penalties for harming dogs. The scope is thus broader than many monotheistic traditions.`,
        sfeAlignment: "High",
        sfeRating: 73,
        sfeExplanation: `Zoroastrianism's understanding of suffering as a cosmic evil to be actively fought — not accepted, not redeemed — aligns remarkably well with SFE. Its broad scope of concern (animals, nature) and action-oriented ethics are strongly compatible. The main divergence is the cosmic-dualist framework and eschatological belief that evil will ultimately be defeated by divine power.`,
        scriptures: [
            {
                text: "He who works for the betterment of the living, he is of Aša (Truth/Righteousness).",
                source: "Yasna 33.3-4 (Avesta, Gāthās of Zarathustra)",
                theme: "obligation"
            },
            {
                text: "Good thoughts, good words, good deeds. (Humata, Hūkhta, Hvarshta)",
                source: "Core Zoroastrian maxim (from Avesta)",
                theme: "obligation"
            },
            {
                text: "He who soothes the distressed, his soul reaches paradise.",
                source: "Vendidad 3.1 (Avesta)",
                theme: "compassion"
            },
            {
                text: "Making the world wonderful, excellent, and progressive — that is the purpose of creation.",
                source: "Yasna 34.15 (Avesta, Gāthās)",
                theme: "liberation"
            }
        ]
    },

    confucianism: {
        name: "Confucianism",
        symbol: "儒",
        color: "#AED6F1",
        founded: "c. 5th century BCE",
        founder: "Confucius (Kǒng Fūzǐ / 孔夫子)",
        keyTexts: "Analects (Lúnyǔ), Mencius (Mengzi), Great Learning, Doctrine of the Mean",
        overview: `Confucianism approaches suffering primarily through the lens of <strong>social ethics and human relationships</strong>. While it lacks extensive metaphysical theorizing about the nature of suffering, it offers a robust practical ethics centered on <em>rén</em> (仁, benevolence/humaneness) — the cardinal virtue. Confucius and Mencius both articulated versions of the Golden Rule and emphasized that the mark of a cultivated person (<em>jūnzǐ</em>) is compassionate concern for others' wellbeing. Mencius argued that compassion is <em>innate</em> to human nature.`,
        natureOfSuffering: `Confucianism sees suffering primarily as resulting from <strong>social disorder</strong> — the breakdown of proper relationships, corruption of rulers, and failure of moral cultivation. Mencius wrote: "When a prince is in distress, the people are in distress" — suffering cascades from failures of governance and virtue. Unlike Buddhist metaphysics, Confucianism does not theorize about cosmic origins of suffering but focuses pragmatically on its social causes and remedies.`,
        moralObligation: `The obligation to reduce suffering is framed through <em>rén</em> (benevolence). Confucius stated: "Do not impose on others what you yourself do not desire" (Analects 15.24) — a negative formulation remarkably similar to SFE's emphasis on preventing harm. Mencius (2A:6) argued that innate compassion is the foundation of benevolence: "All people have a mind that cannot bear to see the suffering of others... If a person were to suddenly see a child about to fall into a well, they would all have a feeling of alarm and compassion." <em>Rén</em> requires active engagement in reducing others' suffering through good governance, education, and ritual propriety.`,
        scopeOfConcern: `Confucianism's scope is primarily <strong>human and social</strong>, organized in concentric circles from family outward. Mencius did extend concern beyond humans: "The superior person is sparing with animals and feels compassion for the people" (Mencius 7A:45). However, the graduated love system (<em>àiqí</em>) means one's obligations are strongest toward family and decrease with social distance — contrasting with SFE's universal impartiality.`,
        sfeAlignment: "Moderate",
        sfeRating: 55,
        sfeExplanation: `Confucianism's emphasis on benevolence (rén), the innate capacity for compassion, and the negative Golden Rule align with SFE. However, its graded love system (prioritizing family), focus on social harmony over suffering-elimination per se, limited metaphysical engagement with suffering, and primarily human-centered scope create significant differences from pure SFE.`,
        scriptures: [
            {
                text: "Do not impose on others what you yourself do not desire.",
                source: "Analects 15.24 (Confucius)",
                theme: "compassion"
            },
            {
                text: "If a person were to suddenly see a child about to fall into a well, they would all have a feeling of alarm and compassion — not to gain friendship with the child's parents, not to seek praise, and not because they dislike the cry of the child.",
                source: "Mencius 2A:6 (Mengzi)",
                theme: "compassion"
            },
            {
                text: "Is benevolence really far away? If I want to be benevolent, then benevolence is here.",
                source: "Analects 7.30 (Confucius)",
                theme: "obligation"
            },
            {
                text: "The superior person is sparing with animals and feels compassion for the people.",
                source: "Mencius 7A:45",
                theme: "compassion"
            }
        ]
    }
};

// ===== COMPARISON TABLE DATA =====
const comparisonData = [
    {
        religion: "Buddhism",
        origin: "Craving (taṇhā) and ignorance (avijjā); an impersonal, natural process — not divine punishment",
        purpose: "No inherent purpose; suffering is the fundamental problem to be diagnosed and ended (Four Noble Truths)",
        obligation: "Very strong — compassion (karuṇā) and loving-kindness (mettā) are supreme virtues; the bodhisattva vows to liberate all beings",
        scope: "All sentient beings without exception — humans, animals, insects, beings in other realms",
        afterlife: "Rebirth driven by karma; suffering continues across lives until nibbāna (cessation); no eternal heaven/hell",
        liberation: "Noble Eightfold Path; meditation, ethical conduct, wisdom lead to nibbāna — complete cessation of suffering",
        alignment: "Very High (95%)"
    },
    {
        religion: "Hinduism",
        origin: "Ignorance (avidyā) of true self; karma across lifetimes; the three types of suffering (tāpatraya)",
        purpose: "Mixed — can purify the soul, exhaust karma; but 'future suffering is to be avoided' (YS 2.16)",
        obligation: "Strong — dayā (compassion) and dāna (charity) are duties; ahiṃsā (non-violence) is paramount dharma",
        scope: "All beings share ātman — compassion extends to animals; historically limited by caste structures",
        afterlife: "Rebirth (saṃsāra) until mokṣa (liberation); karma determines conditions; eventual escape from the cycle",
        liberation: "Multiple paths (jñāna, bhakti, karma, rāja yoga) lead to mokṣa — liberation from the cycle of suffering",
        alignment: "High (75%)"
    },
    {
        religion: "Jainism",
        origin: "Karmic matter (pudgala) adheres to soul through violence, passions, and carelessness — a mechanical, impersonal process",
        purpose: "No redemptive purpose; suffering is purely the result of harmful karma and must be eliminated entirely",
        obligation: "Absolute — ahiṃsā is the supreme principle; causing any harm to any being is the greatest sin",
        scope: "Most expansive of all religions — extends to one-sensed beings (earth, water, fire, air, plants)",
        afterlife: "Rebirth in various realms until kevala (omniscience) and mokṣa; no creator God; no eternal damnation",
        liberation: "Right faith, right knowledge, right conduct (ratnatraya); extreme non-violence; ascetic self-purification",
        alignment: "Very High (97%)"
    },
    {
        religion: "Christianity",
        origin: "The Fall / Original Sin; broken world; human free will misused; also divine mystery (Book of Job)",
        purpose: "Can be redemptive (Christ's suffering saves); testing/discipline; but also calls for active compassion",
        obligation: "Strong — love of neighbor, Parable of Good Samaritan, serving 'the least of these' are central commands",
        scope: "Primarily human (imago Dei); some stewardship of creation; modern extension to the poor (liberation theology)",
        afterlife: "Heaven (no suffering) or Hell (eternal suffering); resurrection of the body; eternal life with God",
        liberation: "Salvation through faith in Christ; grace; sanctification; ultimate restoration of creation (eschaton)",
        alignment: "Moderate-High (68%)"
    },
    {
        religion: "Islam",
        origin: "Divine test (ibtilāʾ); consequence of human sin; Satan's temptation; part of God's inscrutable wisdom",
        purpose: "Test of faith and patience (ṣabr); purification of sins; not meaningless but ultimately compensated",
        obligation: "Strong — zakāt (mandatory charity) is a Pillar; feeding hungry, caring for orphans are religious duties",
        scope: "Primarily human; animals deserve kindness (hadith of the dog and the cat); but human life takes priority",
        afterlife: "Paradise (Jannah, no suffering) or Hell (Jahannam, suffering); final judgment; divine mercy pervades",
        liberation: "Submission to God's will (islām); righteous deeds; seeking God's mercy; patient endurance (ṣabr)",
        alignment: "Moderate (62%)"
    },
    {
        religion: "Judaism",
        origin: "Multiple views: sin, divine testing (Job), mystery, human injustice; no single dogmatic answer",
        purpose: "Debated — 'sufferings of love,' testing, consequence of sin; but protest against suffering is permitted",
        obligation: "Very strong — tzedakah (justice/charity) is obligatory; tikkun olam (repairing the world); 'do not stand idly by'",
        scope: "Human-centered with significant animal welfare law (tza'ar ba'alei chayim — prohibition of animal cruelty)",
        afterlife: "Complex/varied views — Olam Ha-Ba (World to Come); less emphasis on afterlife than Christianity/Islam",
        liberation: "Observance of Torah; acts of justice and mercy; communal repair (tikkun olam); messianic hope",
        alignment: "Moderate-High (70%)"
    },
    {
        religion: "Sikhism",
        origin: "Haumai (ego/self-centeredness); attachment to māyā (illusion); separation from the divine; karma",
        purpose: "Result of ego; opportunity for spiritual growth through sevā (service); divine will (hukam)",
        obligation: "Very strong — sevā (selfless service) is a core practice; langar feeds all regardless of identity; dasvandh (tithing)",
        scope: "Strongly egalitarian among humans (anti-caste); some concern for animals; creation as divine manifestation",
        afterlife: "Rebirth until merger with God; no eternal hell; liberation (mukti) through divine grace and devotion",
        liberation: "Nām simran (remembrance of God); sevā (service); living as a householder in the world; Guru's grace",
        alignment: "High (76%)"
    },
    {
        religion: "Taoism",
        origin: "Resistance to the natural flow (Tao); excessive desire; forced action; artificial social constructs",
        purpose: "Sign of disharmony with Tao; natural part of change; can be transcended through acceptance and wuwei",
        obligation: "Moderate — compassion (cí) is first of Three Treasures; but emphasis on non-interference (wuwei)",
        scope: "All of nature — Tao pervades everything; ecological consciousness; harmony with natural world",
        afterlife: "Varied views — transformation, not extinction; Zhuangzi embraces death as natural; some traditions have afterlife",
        liberation: "Harmony with the Tao; wuwei (non-forcing action); simplicity; letting go of desires and attachments",
        alignment: "Moderate (58%)"
    },
    {
        religion: "Zoroastrianism",
        origin: "Angra Mainyu (destructive spirit); not from God (Ahura Mazdā); cosmic evil to be actively fought",
        purpose: "No redemptive purpose — suffering is evil, caused by the enemy of God, and must be combated",
        obligation: "Very strong — humans are soldiers against evil; good thoughts, good words, good deeds; active duty to help",
        scope: "Humans, animals (dogs especially protected), plants, earth, water, fire — broad environmental concern",
        afterlife: "Bridge of Judgment; heaven or temporary hell; final renovation (Frashokereti) — all suffering ends permanently",
        liberation: "Active participation in cosmic battle; good deeds; ultimate divine victory over evil (eschatological hope)",
        alignment: "High (73%)"
    },
    {
        religion: "Confucianism",
        origin: "Social disorder; failure of moral cultivation; corruption of rulers; breakdown of proper relationships",
        purpose: "Result of moral failure in society; impetus for self-cultivation and social reform",
        obligation: "Strong — rén (benevolence) demands compassion; Golden Rule; Mencius: innate compassion toward suffering",
        scope: "Primarily human; graded love (strongest toward family); some animal concern; hierarchical scope",
        afterlife: "Minimal emphasis — focus on this-worldly ethics; ancestor veneration; moral legacy over personal salvation",
        liberation: "Self-cultivation; establishing harmonious social order; education; virtuous governance; ritual propriety (lǐ)",
        alignment: "Moderate (55%)"
    }
];

// ===== ALL SCRIPTURE QUOTES (compiled from religion data + extras) =====
function getAllScriptures() {
    const scriptures = [];
    for (const [key, religion] of Object.entries(religionsData)) {
        religion.scriptures.forEach(s => {
            scriptures.push({
                ...s,
                religion: religion.name,
                religionKey: key,
                color: religion.color
            });
        });
    }
    // Additional scriptures for variety
    const extras = [
        { text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.", source: "Dhammapada 5", theme: "compassion", religion: "Buddhism", religionKey: "buddhism", color: "#FFB347" },
        { text: "Let your heart feel for the afflictions and distress of everyone.", source: "George Washington (paraphrasing Christian ethics)", theme: "compassion", religion: "Christianity", religionKey: "christianity", color: "#7EC8E3" },
        { text: "Feed the hungry and visit a sick person, and free the captive if he be unjustly confined.", source: "Ṣaḥīḥ al-Bukhārī 5649", theme: "obligation", religion: "Islam", religionKey: "islam", color: "#45B7A0" },
        { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.", source: "Attributed to Emerson (echoing Confucian values)", theme: "obligation", religion: "Confucianism", religionKey: "confucianism", color: "#AED6F1" },
        { text: "Where there is righteousness in the heart, there is beauty in the character. When there is beauty in the character, there is harmony in the home.", source: "Attributed to Confucius (classical tradition)", theme: "liberation", religion: "Confucianism", religionKey: "confucianism", color: "#AED6F1" },
        { text: "I look upon all creatures equally; none are less dear to me and none more dear.", source: "Bhagavad Gītā 9.29", theme: "compassion", religion: "Hinduism", religionKey: "hinduism", color: "#FF6B6B" },
        { text: "He who sees the Supreme Lord dwelling equally in all beings, the Imperishable in the perishable — he truly sees.", source: "Bhagavad Gītā 13.27", theme: "compassion", religion: "Hinduism", religionKey: "hinduism", color: "#FF6B6B" }
    ];
    return [...scriptures, ...extras];
}

// ===== SPECTRUM DATA =====
const spectrumData = [
    { name: "Jainism", score: 97, color: "#98D8C8" },
    { name: "Buddhism", score: 95, color: "#FFB347" },
    { name: "Sikhism", score: 76, color: "#F7DC6F" },
    { name: "Hinduism", score: 75, color: "#FF6B6B" },
    { name: "Zoroastrianism", score: 73, color: "#F0B27A" },
    { name: "Judaism", score: 70, color: "#B8A9C9" },
    { name: "Christianity", score: 68, color: "#7EC8E3" },
    { name: "Islam", score: 62, color: "#45B7A0" },
    { name: "Taoism", score: 58, color: "#82E0AA" },
    { name: "Confucianism", score: 55, color: "#AED6F1" }
];

// ===========================
// APPLICATION LOGIC
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);

    initNavbar();
    initReligionTabs();
    initComparisonTable();
    initScriptureGallery();
    initSpectrumChart();
    initScrollAnimations();
    initBackToTop();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // Scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveLink();
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
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
            renderReligionContent(tab.dataset.religion);
        });
    });

    // Render default
    renderReligionContent('buddhism');

    function renderReligionContent(key) {
        const r = religionsData[key];
        if (!r) return;

        const alignmentClass = r.sfeAlignment.toLowerCase().replace(/[- ]/g, '-')
            .replace('very-high', 'very-high')
            .replace('moderate-high', 'high')
            .replace('moderate', 'moderate')
            .replace('partial', 'partial');

        let badgeClass = 'alignment-moderate';
        if (r.sfeRating >= 90) badgeClass = 'alignment-very-high';
        else if (r.sfeRating >= 70) badgeClass = 'alignment-high';
        else if (r.sfeRating >= 55) badgeClass = 'alignment-moderate';
        else badgeClass = 'alignment-partial';

        content.innerHTML = `
            <div class="religion-header">
                <div class="religion-icon" style="color: ${r.color}">${r.symbol}</div>
                <div class="religion-header-text">
                    <h3>${r.name}</h3>
                    <span class="religion-meta">Founded: ${r.founded} | Key Texts: ${r.keyTexts}</span>
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
                        <div class="sfe-alignment-badge ${badgeClass}">${r.sfeAlignment} (${r.sfeRating}%)</div>
                        <p style="margin-top: 10px;">${r.sfeExplanation}</p>
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
        content.offsetHeight; // trigger reflow
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
        // Show/hide columns
        const table = document.getElementById('comparisonTable');
        const ths = table.querySelectorAll('th[data-dim]');
        ths.forEach(th => {
            if (dimension === 'all' || th.dataset.dim === dimension) {
                th.style.display = '';
            } else {
                th.style.display = 'none';
            }
        });

        // Render rows
        tbody.innerHTML = comparisonData.map(row => {
            const dims = ['origin', 'purpose', 'obligation', 'scope', 'afterlife', 'liberation', 'alignment'];
            const cells = dims.map(dim => {
                const display = (dimension === 'all' || dimension === dim) ? '' : 'display: none;';
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
        const filtered = theme === 'all'
            ? allScriptures
            : allScriptures.filter(s => s.theme === theme);

        grid.innerHTML = filtered.map(s => `
            <div class="scripture-card" style="--card-color: ${s.color}">
                <div class="scripture-card-header">
                    <span class="scripture-religion-badge" style="background: ${s.color}20; color: ${s.color}">${s.religion}</span>
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

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = chart.querySelectorAll('.spectrum-bar');
                bars.forEach((bar, i) => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.width;
                    }, i * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(chart);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.section-header, .principle-card, .variant, .analysis-card, .source-category, .sfe-sidebar > *'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}