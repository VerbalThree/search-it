import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

// Messages of translation to another supported languages
const messages = {
    en: {
        search: "Search...",
        searchButton: "Search It!"
    },
    pt: {
        search: "Pesquisar...",
        searchButton: "Pesquisar Agora!"
    }
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

// Autoresize
function autoResize(textarea){
    textarea.style.height = 'auto'; // Restart the height to calculate the new height
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'; // Define the new height with the content
}