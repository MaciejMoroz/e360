import React from 'react';
import styles from "./ProgresBarComponent.module.scss"
import PropTypes from "prop-types";
import { withRouter } from "react-router";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';



class ProgresBarComponent extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    render() {
        const { location, language } = this.props;
        let disabledLink = "";


        const isForm = () => {
            if (location.pathname === "/form" || location.pathname === "/payment") {
                disabledLink = "/form"
                return styles.active
            } else if (location.pathname === "/thx") {
                return styles.active
            } else {
                return styles.inactive
            }
        }
        const isCardForm = () => {

            if (location.pathname === "/payment") {
                disabledLink = "/form"
                return styles.active
            } else if (location.pathname === "/thx") {
                return styles.active
            } else {
                disabledLink = "/form"
                return styles.inactive

            }
        }

        return (
            <>
                <Fade bottom opposite when={location.pathname !== "/thx" ? true : false}>
                    <div className={styles.progresBox}>
                        <ul>
                            <li className={styles.active}>
                                <Link to="/">{
                                    language === "PL" ? "Wybierz plan" : "Chose a plan"}</Link>
                            </li>
                            <li className={isForm()}>
                                <Link to={disabledLink}>
                                    <span disabled={disabledLink}>
                                        {language === "PL" ? "Dane personalne" : "Personal data"}</span>
                                </Link>
                            </li>
                            <li className={isCardForm()}>
                                {language === "PL" ? "Zapłać" : "Pay"}
                            </li>
                        </ul>
                    </div >
                </Fade>

                <div className={styles.goBackBtn}>
                    <Fade bottom when={location.pathname !== "/thx" ? false : true} collapse>
                        <Link to="/">
                            <button className={styles.btn}>{
                                language === "PL" ? "Strona główna" : "Home Page"} </button>
                        </Link>
                    </Fade>
                </div>

            </>
        );
    }
}

const ProgresBarComponentWithRouter = withRouter(ProgresBarComponent);

export default ProgresBarComponentWithRouter