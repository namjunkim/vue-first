// i18n.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import lang from './assets/lang';

// Use the VueI18n plugin
Vue.use(VueI18n);

// Define your translations
const messages = {
    en: lang.en,
    ko: lang.ko,

    // Add more languages as necessary
};

// Create the i18n instance
const i18n = new VueI18n({
    locale: 'en', // set default language
    fallbackLocale: 'en', // set fallback language
    messages, // set locale messages
});

export default i18n;