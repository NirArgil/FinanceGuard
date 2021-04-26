import React from 'react';
import { useSelector } from "react-redux";

export const Footer = () => {
    const { darkMode } = useSelector((state) => state.theme);

    return (
        <div className={darkMode ? "darkFooter" : "Footer"}>
            <p>Copyright © NirArgil 2021</p>
            <span className={darkMode ? "DarksocialIcons" : "socialIcons"}>
                <a href="https://www.linkedin.com/in/nir-argil-158815185/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/NirArgil/FinanceGuard" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </span>
        </div>
    )
}
