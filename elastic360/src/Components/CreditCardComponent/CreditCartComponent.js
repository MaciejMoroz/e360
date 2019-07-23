import React, { useState } from 'react';

import PaymentCard from 'react-payment-card-component'


const CreditCardComponent = ({ product, history, userData, cardNumber, cardFirstName, cardLastName, cardValidThru, cardCvv, isFliped }) => {
    const [flip, flipAction] = useState(false);


    // console.log(product, history, userData);
    console.log(isFliped);


    return (
        <div className="component">

            <div className="wrapper">
                <div></div>
                <PaymentCard
                    bank="default"
                    model="normal"
                    type="gold"
                    brand="mastercard"
                    number={cardNumber}
                    cvv={cardCvv}
                    holderName={`${cardFirstName} ${cardLastName}`}
                    expiration={cardValidThru}
                    flipped={isFliped}
                />


            </div>
        </div>
    );

}

export default CreditCardComponent;