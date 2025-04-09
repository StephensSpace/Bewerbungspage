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
    
  };