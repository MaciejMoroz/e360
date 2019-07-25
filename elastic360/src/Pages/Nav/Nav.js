import React from 'react';
import Styles from "./Nav.module.scss"
import Component from "../../GlobalStyles/component/Component"
import Wrapper from "../../GlobalStyles/wrapper/Wrapper"


const Nav = ({ changeLanguage, language }) => {
    console.log(language);

    const handleClick = (lng) => {
        changeLanguage(lng)

    }

    return (
        <Component>

            <div className={Styles.nav}>
                <button
                    onClick={() => handleClick("EN")}
                    className={Styles.btn_border}
                    style={language === "EN" ? { fontWeight: '800' } : { fontWeight: "500" }}

                >EN
            </button>

                <button
                    onClick={() => handleClick("PL")}
                    className={Styles.btn}
                    style={language === "PL" ? { fontWeight: '800' } : { fontWeight: "500" }}

                >PL
            </button>

            </div >


        </Component>
    );
}

export default Nav;