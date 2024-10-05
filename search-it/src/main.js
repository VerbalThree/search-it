import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import '@fortawesome/fontawesome-free/css/all.css';

// Messages of translation to another supported languages
const messages = {
    en: {
        search: "Search...",
        searchButton: "Search It!"
    },
    pt: {
        search: "Pesquisar...",
        searchButton: "Pesquisar Isso!"
    },
    es: {
        search: "Buscar...",
        searchButton: "¡Buscar Esto!"
    },
    fr: {
        search: "Rechercher...",
        searchButton: "Rechercher Ça!"
    },
    jp: {
        search: "検索中...",
        searchButton: "これを検索！"
    },
};

// Instatiating the i18n
const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en', // Language of fallback, in case if the selected language has no been found
    messages, // Message of translation
});

// Vue aplication with i18n
const app = createApp(App);
app.use(i18n);
app.mount('#app');
