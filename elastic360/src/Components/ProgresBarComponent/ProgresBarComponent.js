import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import styles from "./ProgresBarComponent.module.scss"


class ProgresBarComponent extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    render() {
        const { match, location, history } = this.props;

        const isForm = () => {
            if (location.pathname === "/form" || location.pathname === "/payment") {
                return styles.active
            }
        }
        const isCardForm = () => {
            if (location.pathname === "/payment") {
                return styles.active
            }
        }


        return (
            <>
                <div className={styles.progresBox}>

                    <ul>
                        <li className={styles.active}> <span>Chose plan</span></li>
                        <li className={isForm()}> <span>Personal data</span></li>
                        <li className={isCardForm()}> <span>Payment</span></li>
                    </ul>
                </div >
            </>
        );
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ProgresBarComponentWithRouter = withRouter(ProgresBarComponent);

export default ProgresBarComponentWithRouter