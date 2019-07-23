import React, { useState, useEffect } from 'react';
import styles from "./CreditCardFormComponent.module.scss"
import { Form, Field } from 'react-final-form'
import formatString from "format-string-by-pattern";
import store from "../../Redux/Store/store"



const CreditCardFormComponent = ({ history, addCardNumber, addCardName, addCardLastName, addCardValidThru, addCardCvv, flipCard, order }) => {
    const [YrSubscription, setYrSubscription] = useState(12);
    const [numberOfSubscription, setnumberOfSubscription] = useState(1);




    const product = order.product;
    const prodcutPrice = order.product.price
    const price = prodcutPrice * YrSubscription * numberOfSubscription
    const priceToString = price.toString().split(".");



    const [disabled, setDisabled] = useState(false);
    const handleflipCard = (value) => {
        flipCard(value);
    }

    const onSubmit = async () => {
        history.push('/thx');

    };
    //validation
    const isFirstLetterIsCapital = new RegExp(/^[A-Z]/);
    const required = value => (value ? undefined : "Field required");
    const mustBeText = value => (!isNaN(value) ? "Must be a text" : undefined);
    const mustBeFirstLetterCapital = value =>
        (isFirstLetterIsCapital.test(value[0])) ? undefined : "The first letter must be a capital";
    const mustBeCardNo = value => (isNaN(value.split("-").join("")) ? "Must be a number" : undefined);

    const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
    const character16Lenght = value => value.split("-").join("").length !== 16 ? "16 numbers required" : undefined;

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);


    //set state    
    const cardNumber = (value) => {
        value ?
            addCardNumber(value.split("-").join("")) : addCardNumber("xxxx-xxxx-xxxx-xxxx")
    }
    const firstName = (value) => {

        value ? addCardName(value) : addCardName("Your Name")

    }
    const lastName = (value) => {
        value ? addCardLastName(value) : addCardLastName("Your Last Name")

    }
    const validThru = (value) => {
        value ? addCardValidThru(value) : addCardValidThru("MM/YY")

    }

    const cvv = (value) => {
        value ? addCardCvv(value) : addCardCvv("xxx")
    }
    const isYrChecked = (value) => {
        setYrSubscription(value)
    }

    const numberOfLicenses = (value) => {
        setnumberOfSubscription(value ? value : 1)
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ timeOfSubscribtion: "12" }}
            render={({ handleSubmit }) => (
                < form >
                    <Field name="cardNumber"
                        parse={formatString("xxxx-xxxx-xxxx-xxxx")}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        validate={composeValidators(cardNumber, required, mustBeCardNo, character16Lenght)}
                    >
                        {({ input, meta }) => (

                            <div className={styles.form}>
                                <label style={
                                    !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Card no.</label>
                                <input {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    type="text"
                                    mask="9999 9999 9999 9999"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }}
                                />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="firstName" validate={composeValidators(firstName, required, mustBeText, mustBeFirstLetterCapital)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label style={
                                    !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>First Name</label>
                                <input {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    type="text"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName" validate={composeValidators(lastName, required, mustBeText, mustBeFirstLetterCapital)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label style={
                                    !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Last Name</label>

                                <input {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    type="text"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field
                        parse={formatString("MM/YY")}
                        placeholder="MM/YY"
                        name="validThru"
                        validate={composeValidators(validThru, mustBeNumber, required)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label style={
                                    !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Valid Thru</label>
                                <input
                                    {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    type="text"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field
                        name="CVV"
                        placeholder="XXX"
                        parse={formatString("xxx")}
                        validate={composeValidators(cvv, required)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label
                                    style={
                                        !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>CVV</label>
                                <input
                                    {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    onBlur={(() => handleflipCard(false)
                                    )}
                                    onFocus={(() => handleflipCard(true))}

                                    type="number"
                                    style={

                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                                {(meta.error ? setDisabled(true) : setDisabled(false))}
                            </div>
                        )}
                    </Field>



                    <h4>Product plan: {product.name}</h4>
                    <Field

                        type="radio"
                        value="12"
                        name="timeOfSubscribtion"
                        initialValue="12"

                        validate={composeValidators(isYrChecked)}>
                        {({ input }) => (
                            <div className={styles.radioGroup} >
                                <input
                                    {...input}
                                    name="timeOfSubscribtion"
                                    value="12"
                                    type="radio"


                                />
                                <label>1 year</label>
                            </div>
                        )}
                    </Field>
                    <Field
                        type="radio"
                        value="1"
                        name="timeOfSubscribtion"
                        validate={composeValidators(isYrChecked)}>
                        {({ input }) => (
                            <div className={styles.radioGroup} >
                                <input
                                    {...input}
                                    name="timeOfSubscribtion"
                                    value="1"
                                    type="radio"
                                />
                                <label>1 month</label>
                            </div>
                        )}
                    </Field>

                    <Field
                        name="numberOfLicenses"
                        validate={composeValidators(numberOfLicenses)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label>Number of licenses</label>
                                <input
                                    {...input}

                                    value={numberOfSubscription}
                                    type="number"
                                    min="1"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>

                    <h4 className={styles.money}>total {priceToString[0]}
                        <span className={styles.change}>{priceToString[1]}</span> <span className={styles.currencySymbol}>&#8364;</span><span> </span></h4>


                    <div className={styles.buttons}>
                        <button className={styles.btn}
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit();
                            }}
                            disabled={disabled}
                        >
                            Pay
                        </button>


                    </div>

                </form >
            )}
        />

    )
}

export default CreditCardFormComponent;