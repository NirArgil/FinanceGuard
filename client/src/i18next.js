import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    
    resources: {
      en: {
        translations: {
            "loading":"Loading...",
            "categories": "Categories",
            "login": "Login",
            "Start tracking your expenses": "Start tracking your expenses now",
            "email":"Email",
            "password":"Password",
            "Sign In": "Sign In",
            "transaction":"transaction",
            "transactions":"Transactions",
            "no transactions":"No Transactions, Add your transactions",
            "balance": "Your balance",
            "income":"Income",
            "incomes":"Incomes",
            "expense":"Expense",
            "history":"History",
            "current month":"Current month",
            "past month":"Past month",
            "expenses":"Expenses",
            "expense chart":"Expense Chart",
            "add transaction":"Add new transaction",
            "help": "Income: + amount / Expense: - amount",
            "title": "Transaction title",
            "text": "Transaction info",
            "placeholderText": "Enter Transaction info",
            "placeholderAmount": "Enter amount",
            "select category": "Select category",
            "amount":"Amount",
            "comments": "Comments",
            "add income":"Income",
            "add expense":"Expense",
            "createdAt":"Created",
            "settings page":"Settings",
            "settings description":"Customize your Expense Tracker",
            "categories page": "Categories",
            "categories description":"Manage your expenses and incomes categories.",
            "add category":"Create",
            "category name":"Category"
        }
      },
      עברית: {
        translations: {
            "loading":"טוען...",
            "categories": "קטגוריות",
            "login": "התחבר",
            "Start tracking your expenses": "התחל לעקוב אחרי הוצאותיך",
            "email":"אימייל",
            "password":"סיסמא",
            "Sign In": "הירשם",
            "transaction":"העברה; הוצאה או הכנסה ",
            "no transactions":"אין העברות",
            "transactions":"העברות",
            "balance": "יתרתך",
            "income":"הכנסה",
            "incomes": "הכנסות",
            "outcome":"הוצאה",
            "history":"העברות",
            "current month":"חודש נוכחי זה",
            "past month":"חודש שעבר",
            "expense":"הוצאה",
            "expenses":"הוצאות",
            "expense chart":"תרשים הוצאה",
            "add transaction":"הוסף העברה חדשה",
            "title": "כותרת העברה",
            "text": "פרטי העברה",
            "placeholderText": "רשום פרטי העברה",
            "placeholderAmount": "רשום סכום",
            "select category": "בחר קטגוריה",
            "amount":"סכום",
            "comments": "פרטים \ תגובות",
            "add income":"הוסף הכנסה",
            "add expense":"הוסף הוצאה",
            "help": "הכנסה: + סכום או הוצאה: - סכום",
            "createdAt":"נוצר",
            "settings page":"דף הגדרות",
            "settings description":"הגדר את השומר הפיננסי",
            "categories page": "קטגוריות",
            "categories description":"נהל את קטגוריות ההוצאות וההכנסות שלך.",
            "add category":"הוסף",
            "category name":"שם קטגוריה"
        }
      }
    },
    fallbackLng: "עברית",
    debug: false,
 
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, 

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;