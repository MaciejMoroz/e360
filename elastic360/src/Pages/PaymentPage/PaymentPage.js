import React from 'react';
import styles from "./PaymentPage.module.scss"

import CreditCardContainer from "../../Redux/Containers/CreditCardContainer"

import CreditCardFormContainer from "../../Redux/Containers/CreditCardFormContainer"

const PaymentPage = ({ history }) => {

    return (
        <div className="component">
            <div className="wrapper">
                <div className={styles.paymentPageBox}>
                    <CreditCardContainer ></CreditCardContainer>
                    <CreditCardFormContainer history={history}></CreditCardFormContainer>
                </div>
            </div>

        </div>
    );
}

export default PaymentPage;