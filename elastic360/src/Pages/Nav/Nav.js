import React from 'react';
import styles from "./Nav.module.scss"
import { withRouter } from 'react-router-dom';

import Component from "../../GlobalStyles/component/Component"

import ProgresBarComponentWithRouter from "../../Components/ProgresBarComponent/ProgresBarComponent"

const Nav = ({ changeLanguage, language }) => {
    const handleClick = (lng) => {
        changeLanguage(lng)
    }

    return (
        <Component>
            <div className={styles.customWrapper}>
                <div className={styles.navBox}></div>
                <ProgresBarComponentWithRouter language={language}></ProgresBarComponentWithRouter>
                <div className={styles.lng}>
                    <button
                        onClick={() => handleClick("EN")}
                        className={styles.btn_border}
                        style={language === "EN" ? { fontWeight: '800' } : { fontWeight: "500" }}
                    >EN
            </button>
                    <button
                        onClick={() => handleClick("PL")}
                        className={styles.btn}
                        style={language === "PL" ? { fontWeight: '800' } : { fontWeight: "500" }}
                    >PL
            </button>

                </div >

            </div>
        </Component>
    );
}

export default withRouter(Nav)