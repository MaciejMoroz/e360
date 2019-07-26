import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from "./ProgresBarComponent.module.scss"


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
            } else {

                return styles.inactive
            }
        }
        const isCardForm = () => {

            if (location.pathname === "/payment") {
                disabledLink = "/form"
                return styles.active
            } else {
                disabledLink = "/form"
                return styles.inactive

            }
        }

        return (
            <>
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
            </>
        );
    }
}

const ProgresBarComponentWithRouter = withRouter(ProgresBarComponent);

export default ProgresBarComponentWithRouter