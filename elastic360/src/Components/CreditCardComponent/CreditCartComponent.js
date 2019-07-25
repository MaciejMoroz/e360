import React from 'react';
import PaymentCard from 'react-payment-card-component';
import styles from "./CreditCardComponent.module.scss";

const CreditCardComponent = ({ cardNumber, cardFirstName, cardLastName, cardValidThru, cardCvv, isFliped }) => {

    return (
        <div className={styles.paymentCard_box}>
            <PaymentCard
                bank="default"
                model="normal"
                type="gold"
                brand="visa"
                number={cardNumber}
                cvv={cardCvv}
                holderName={`${cardFirstName} ${cardLastName}`}
                expiration={cardValidThru}
                flipped={isFliped}
            />
        </div>
    );

}

export default CreditCardComponent;