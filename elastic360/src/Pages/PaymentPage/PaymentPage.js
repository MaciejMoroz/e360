import React from 'react';
import styles from "./PaymentPage.module.scss"

import CreditCardContainer from "../../Redux/Containers/CreditCardContainer"

import CreditCardFormContainer from "../../Redux/Containers/CreditCardFormContainer"

const PaymentPage = ({ product, history, userData }) => {
    console.log(product, history, userData);

    return (
        <div className="component">
            <div className="wrapper">
                <div className={styles.paymentPageBox}>
                    <CreditCardContainer></CreditCardContainer>
                    <CreditCardFormContainer></CreditCardFormContainer>
                </div>
            </div>

        </div>
    );
}

export default PaymentPage;