import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      "en": {
        "translation": {
          "sidebar": {
            "home": "Home",
            "tasks": "Tasks",
            "allTasks": "All Tasks",
            "todo": "Todo",
            "inProgress": "In Progress",
            "completed": "Completed",
            "english": "English",
            "french": "French",
            "todoSidebarHome": "Todo",
          },
          "footer":{
            "footer": " Designed By Elie Kuradusenge"
          },
          "content":{
            "addNewTask":"Add new task",
            "pending": "Pending",
            "todo": "To Do",
            "complete": "Complete",
            "submit": "Submit",
            "cancel": "Cancel"
          } 
        }
      },
      "fr": {
        "translation": {
          "sidebar": {
            "home": "Accueil",
            "tasks": "Tâches",
            "allTasks": "Toutes les tâches",
            "todo": "À Faire",
            "inProgress": "En Cours",
            "completed": "Terminé",
            "english": "Anglais",
            "french": "Français",
            "todoSidebarHome": "Todo ",
            
          },
          "footer":{
            "footer": "Conçu par Elie Kuradusenge"
          },
          "content":{
            "addNewTask":"Ajouter une nouvelle tâche",
            "pending": "En attente",
            "todo": "À Faire",
            "complete": "Compléter",
            "submit": "Soumettre",
            "cancel": "Annuler"
          }
        }
      }
    }
  });

export default i18n;