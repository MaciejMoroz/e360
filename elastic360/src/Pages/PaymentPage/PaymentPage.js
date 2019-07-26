import React from 'react';
import styles from "./PaymentPage.module.scss"
import Fade from 'react-reveal/Fade';

import CreditCardContainer from "../../Redux/Containers/CreditCardContainer"
import CreditCardFormContainer from "../../Redux/Containers/CreditCardFormContainer"

const PaymentPage = ({ history }) => {

    return (
        <Fade left>
            <div className={styles.paymentPageBox}>
                <CreditCardContainer ></CreditCardContainer>
                <CreditCardFormContainer history={history}></CreditCardFormContainer>
            </div>
        </Fade>
    );
}

export default PaymentPage;