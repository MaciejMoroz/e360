import React, { useState } from 'react';

import PaymentCard from 'react-payment-card-component'


const CreditCardComponent = ({ product, history, userData, cardNumber, cardFirstName, cardLastName, cardValidThru }) => {
    const [flip, flipAction] = useState(false);


    // console.log(product, history, userData);
    const flipCard = () => {

    }


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
                    cvv="202"
                    holderName={`${cardFirstName} ${cardLastName}`}
                    expiration={cardValidThru}
                    flipped={flip}
                />
                <button onClick={() => flipCard()} > flip</button>


            </div>
        </div>
    );

}

export default CreditCardComponent;