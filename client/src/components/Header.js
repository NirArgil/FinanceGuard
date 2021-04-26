import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import { toggleDarkMode } from "../actions/themeActions";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

export const Header = () => {
    const { currentLang, changeLanguage, currentCurrency, changeCurrency } = useContext(LangContext);
    const { darkMode } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const toggleDarkLight = () => {
        dispatch(toggleDarkMode());
    };


    return (
        <div className={darkMode ? "darkHeader" : "Header"}>

            <div className="DarkModeBtn">
                <DarkModeToggle

                    onChange={toggleDarkLight}
                    checked={darkMode}
                    size={50}
                    speed={1.5} />
            </div>

            <h1>
                Finance Guard
            </h1>

            <div className="CurrencyBtn" >
                {/* <ToggleButtonGroup aria-label="text formatting">
                    <ToggleButton aria-label="currencies"> */}
                        <div class="mid">

                            <label class="rocker rocker-small" >
                                <input type="checkbox" onClick={() => changeCurrency(currentCurrency === 'ILS' ? 'USD' : 'ILS')} />
                                <span class="switch-left">₪</span>
                                <span class="switch-right">$</span>
                            </label>

                        </div>
                        {/* <span >{currentCurrency === 'ILS' ? <p><b>₪</b> | $</p> : <p>₪ | <b>$</b></p>}</span> */}

                    {/* </ToggleButton>
                </ToggleButtonGroup> */}
            </div>

            <div className={darkMode ? "darkLangsBtn" : "LangsBtn"}>
                <ToggleButtonGroup onChange={changeLanguage} aria-label="text formatting">
                    <ToggleButton aria-label="languages">

                        <span>{currentLang === 'עברית' ? <p><b>עברית</b> | Eng</p> : <p>עברית | <b>Eng</b></p>}</span>

                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

        </div>



    )
}
