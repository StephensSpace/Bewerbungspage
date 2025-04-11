export type TranslatedText = {
    de: string;
    en: string;
};

export const texts: {
    header: {
        aboutMe: TranslatedText,
        contact: TranslatedText
    },
    hereIAmBtn: TranslatedText,
    scrollDown: TranslatedText,
    aboutMeText: TranslatedText,
    aboutMeLocation: TranslatedText,
    portfolioText: TranslatedText,
    kontaktformH2: TranslatedText,
    contactDescripText: TranslatedText,
    contactDescriphigh: TranslatedText,
    contactPrivacy: TranslatedText,
    contactPrivacyLink: TranslatedText,
    contactErrors: {
        name: TranslatedText,
        email: TranslatedText,
        message: TranslatedText,
        privacy: TranslatedText
    },
    contactBtn: TranslatedText,
    skillsUndertitle: TranslatedText,
    skillTextH2: TranslatedText,
    skillTextH2High: TranslatedText,
    skillText1: TranslatedText,
    skillText2: TranslatedText,
    aboutMeMotivation: TranslatedText,
    aboutMeLogic: TranslatedText

} = {
    header: {
        aboutMe: {
            de: `Über mich`,
            en: `About me`
        },
        contact: {
            de: `Kontakt`,
            en: `Contact`
        },

    },
    hereIAmBtn: {
        de: 'Reden wir!',
        en: `Let's Talk!`,
    },
    scrollDown: {
        de: 'Nach unten',
        en: `Scroll down`,
    },
    aboutMeText: {
        de: `Mein Name ist Stephen Schaz. Seit März 2024 mache ich meine 
        langjährige Leidenschaft für IT zu meinem Beruf.
        Mit Unterstützung der Developer Akademie habe ich eine 
        einjährige Ausbildung zum Junior Software Developer abgeschlossen 
        – und damit den Grundstein für meinen Weg in die IT-Welt gelegt.`,
        en: `My name is Stephen Schaz. Since March 2024, I've decided to 
        make my passion for IT my career. With the support of the Developer 
        Akademie, I completed a one-year training program as a Junior Software 
        Developer – laying the foundation for my journey into the world of IT.`
    },
    aboutMeLocation: {
        de: `Ich komme aus dem sonnigen Süden Deutschlands – genauer gesagt aus 
        Messkirch, einer kleinen Stadt etwa 30 Kilometer vom Bodensee und 100 
        Kilometer von Stuttgart entfernt, gelegen im sogenannten Badischen Geniewinkel.`,
        en: `I come from the sunny south of Germany – Messkirch, a small town about 30 
        kilometers from Lake Constance and 100 kilometers from Stuttgart, located in 
        what's known as the "Badischer Geniewinkel" (Baden's Genius Region).`
    },
    aboutMeMotivation: {
        de: `Ich bin immer neugierig und offen für Neues – sei es ein neues Framework, 
        smartere Wege für sauberen Code oder aktuelle Trends in der Frontend-Welt. 
        Lernen ist für mich keine Phase, sondern eine Haltung.`,
        en: `I'm always curious and open to new ideas – whether it's diving into new 
        frameworks, learning better ways to write clean code, or staying on top of 
        the latest trends in frontend development. For me, learning is not a phase, it's 
        a mindset.`
    },
    aboutMeLogic: {
        de: `Ich löse Probleme mit analytischem Denken, Kreativität und Ausdauer – immer 
        mit dem Ziel, effiziente und elegante Lösungen zu finden. Teamarbeit ist für 
        mich dabei ein zentraler Bestandteil.`,
        en: `I approach problems with analytical thinking, creativity, and persistence 
        – always aiming for efficient, elegant solutions. I value collaboration and 
        enjoy finding answers together as a team.`
    },
    portfolioText: {
        de: `Entdecken Sie eine Auswahl meiner Arbeiten – erleben Sie meine Fähigkeiten 
        in Aktion <br> indem Sie meine Applikationen ausprobieren.`,
        en: `Explore a selection of my work here - Interact with projects to see my 
        skills in action.`
    },
    kontaktformH2: {
        de: `Probleme zu lösen?`,
        en: `Got a problem to solve?`
    },
    contactDescripText: {
        de: `Bereit, Ihr Projekt voranzubringen? Ich bin Frontend Developer mit Leidenschaft 
        – offen für neue Herausforderungen und immer auf der Suche nach spannenden Projekten.
        Schreiben Sie mir – ich freue mich auf`,
        en: `Ready to take your project to the next level? I’m a passionate Frontend Developer 
        – open to new challenges and always eager for exciting projects.
        Get in touch – I’m looking forward to read`
    },
    contactDescriphigh: {
        de: `ihre Nachricht`,
        en: `your message`,
    },
    contactPrivacy: {
        de: `Ich stimme der`,
        en: `I agree to the`
    },
    contactPrivacyLink: {
        de: `Datenschutzerklärung`,
        en: `Privacy policy`
    },
    contactErrors: {
        name: {
            de: `Name ist erforderlich (min. 3 Zeichen).`,
            en: `Name is required (min 3 characters)`
        },
        email: {
            de: `Bitte eine gültige E-Mail eingeben.`,
            en: `Please enter a valid email`
        },
        message: {
            de: `Ihre Nachricht muss mindestens 10 Zeichen lang sein.`,
            en: `Your message must contain at least 10 characters`
        },
        privacy: {
            de: `Bitte der Datenschutzerklärung zustimmen.`,
            en: `Please accept the Privacy Policy`
        }
    },
    contactBtn: {
        de: `Absenden :)`,
        en: `Send Message :)`
    },
    skillsUndertitle: {
        de: `Von CRUD über Games bis zu Social Apps – ich 
        bringe das Know-how mit, um jede Herausforderung zu meistern.`,
        en: `From CRUD to gaming to social apps –
        I have the skills to tackle challenges across all of them.`
    },
    skillTextH2: {
        de: `Sie suchen`,
        en: `Looking for`
    },

    skillTextH2High: {
        de: `andere Skill?`,
        en: `another Skill?`
    },
    skillText1: {
        de: `Ich lerne ständig dazu und entwickle mich weiter`,
        en: `Always learning, always improving.`
    },
    skillText2: {
        de: `Bereit für neue Skills – einfach fragen!`,
        en: `Excited to master new skills. Just ask!`
    },

};