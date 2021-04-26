import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";


export const LangContext = createContext();

const LangContextProvider = ({children}) => {
    
    const { i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState('עברית');

    const [currentCurrency, setCurrentCurrency] = useState('ILS');

    const changeLanguage = () => {
        const lng = currentLang === 'עברית' ? 'en' : 'עברית'
        setCurrentLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    const changeCurrency = (str) => {

        const def = ['ILS', 'USD'];

        if(def.some(item => item === str)) {
            setCurrentCurrency(str);
            localStorage.setItem('currency', str);
        }

    }
    
    useEffect(() => {
        const lng = localStorage.getItem('lang');
        setCurrentLang(lng ? lng : 'עברית')

        const curr = localStorage.getItem('currency');
        setCurrentCurrency(curr ? curr : 'ILS')
    }, []);
    
    return ( 
        <LangContext.Provider value={{ changeLanguage, currentLang, changeCurrency, currentCurrency }}>
            {children}
        </LangContext.Provider>
     );
}
 
export default LangContextProvider;