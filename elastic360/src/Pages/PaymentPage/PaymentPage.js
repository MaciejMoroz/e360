import React from 'react';
import styles from "./PaymentPage.module.scss"
import Wrapper from "../../GlobalStyles/wrapper/Wrapper"
import Component from "../../GlobalStyles/component/Component"
import Fade from 'react-reveal/Fade';

import CreditCardContainer from "../../Redux/Containers/CreditCardContainer"
import CreditCardFormContainer from "../../Redux/Containers/CreditCardFormContainer"

const PaymentPage = ({ history }) => {

    return (
        <Component>
            <Wrapper>
                <Fade left>
                    <div className={styles.paymentPageBox}>
                        <CreditCardContainer ></CreditCardContainer>
                        <CreditCardFormContainer history={history}></CreditCardFormContainer>
                    </div>
                </Fade>
            </Wrapper>
        </Component>
    );
}

export default PaymentPage;