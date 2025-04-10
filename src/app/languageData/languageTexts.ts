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
    aboutMeLocation: TranslatedText

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
    }
    
  };