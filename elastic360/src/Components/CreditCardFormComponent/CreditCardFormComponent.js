import React, { useState } from 'react';
import styles from "./CreditCardFormComponent.module.scss";


import { Form, Field } from 'react-final-form';
import formatString from "format-string-by-pattern";

const CreditCardFormComponent = ({ history, addCardNumber, addCardName, addCardLastName, addCardValidThru, addCardCvv, flipCard, order, addOrder, postOrder, language, euroExchangeRate }) => {

    const isPLN = language === "PL" ? euroExchangeRate.rates[0].ask : 1;


    const [YrSubscription, setYrSubscription] = useState(12);
    const [numberOfSubscription, setnumberOfSubscription] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const product = order.product;
    const prodcutPrice = order.product.price
    const price = (prodcutPrice * YrSubscription * numberOfSubscription * isPLN).toFixed(2);
    const priceToString = ((price)).toString().split(".");



    const handleflipCard = (value) => {
        flipCard(value);
    }

    const onSubmit = async () => {
        let productId = order.product._id,
            userFirstName = order.user.firstName,
            userLastName = order.user.lastName,
            userEmail = order.user.email,
            userTel = order.user.tel,
            itWasPaid = true,
            toPay = price,
            timeOFSub = YrSubscription,
            quantOfsubscriptions = numberOfSubscription

        await postOrder(productId, userFirstName, userLastName, userEmail, userTel, itWasPaid, toPay, timeOFSub, quantOfsubscriptions)
        await addOrder(product, userFirstName, userLastName, userEmail, userTel, itWasPaid, toPay, timeOFSub, quantOfsubscriptions)

        history.push('/thx');

    };

    //validation
    const isFirstLetterIsCapital = new RegExp(/^[A-Z]/);
    const dataRegex = new RegExp(/(?:0[1-9]|1[0-2])\/[0-9]{2}/);
    const currentDate = new Date().toLocaleString(["en-US"], {
        month: "2-digit",
        year: "2-digit",

    })


    const required = value => (value ? undefined : language === "PL" ? "Pole wymagane" : "Field required");

    const mustBeText = value => (!isNaN(value) ? language === "PL" ? "Musi być tekst" : "Must be a text" : undefined);

    const mustBeFirstLetterCapital = value =>
        (isFirstLetterIsCapital.test(value[0])) ? undefined : language === "PL" ? "Musi zacznać się z dużej litery" : "The first letter must be a capital";

    const mustBeCardNo = value => (isNaN(value.split("-").join("")) ?
        language === "PL" ? "Musi być liczbą" : "Must be a number" : undefined);

    const mustBeNumber = value => (isNaN(value) ? language === "PL" ? "Musi być liczbą" : "Must be a number" : undefined);

    const character16Lenght = value => value.split("-").join("").length !== 16 ? language === "PL" ? "Numer karty jest za krótki" : "The card number is too short" : undefined;

    const dataValid = value => (dataRegex.test(value)) ? undefined : language === "PL" ? "Niepoprawna data" : "Incorrect date";

    let isExpired = (value) => {
        if (value !== undefined) {
            let splitedValue = value.split("/");
            let splitedToday = currentDate.split("/");
            if (splitedValue[1] > splitedToday[1]) {
                console.log(splitedValue[1], splitedToday[1] + "now")
                return undefined
            } else if (splitedValue[1] === splitedToday[1]) {
                if (splitedValue[0] > splitedToday[0]) {
                    return undefined
                } else {
                    return language === "PL" ? "Karta nieważna" : "The card is out of date";
                }
            } else {
                return language === "PL" ? "Karta nieważna" : "The card is out of date";
            }
        }
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    //set state    
    const cardNumber = (value) => {
        value ?
            addCardNumber(value.split("-").join("")) : addCardNumber("xxxx-xxxx-xxxx-xxxx")
    }
    const firstName = (value) => {
        const translation = language === "PL" ? "Imię" : "First Name"
        value ? addCardName(value) : addCardName(translation)

    }
    const lastName = (value) => {
        const translation = language === "PL" ? "Nazwisko" : "Last Name"
        value ? addCardLastName(value) : addCardLastName(translation)

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
        <div className={styles.formBox}>
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
                                        !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>{language === "PL" ? "Numer karty" : "Card number"}</label>

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
                        <Field name="firstName"
                            validate={composeValidators(firstName, required, mustBeText, mustBeFirstLetterCapital)}>
                            {({ input, meta }) => (

                                <div className={styles.form}>
                                    <label style={
                                        !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>{language === "PL" ? "Imię" : "First Name"}</label>

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
                        <Field name="lastName"
                            validate={composeValidators(lastName, required, mustBeText, mustBeFirstLetterCapital)}>
                            {({ input, meta }) => (
                                <div className={styles.form}>
                                    <label style={
                                        !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>{language === "PL" ? "Nazwisko" : "Last Name"}</label>

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

                        <div className={styles.short_box}>
                            <Field
                                parse={formatString("MM/YY")}
                                placeholder="MM/YY"
                                name="validThru"
                                validate={composeValidators(validThru, isExpired, dataValid, required)}>
                                {({ input, meta }) => (
                                    <div className={styles.form_short}>
                                        <label style={
                                            !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>{language === "PL" ? "Termin ważności" : "Valid thru"}</label>
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
                                parse={formatString("XXX")}
                                validate={composeValidators(cvv, mustBeNumber, required)}>
                                {({ input, meta }) => (
                                    <div className={styles.form_short}>
                                        <label
                                            style={
                                                !meta.touched ? { color: "#c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>{language === "PL" ? "Kod cvv" : "Code cvv"}</label>
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
                                        {/* {console.log(meta)} */}
                                        {/* onBlur psuje validacje,konsolapokazuje prawidłowe dane, nie sąwyswietlane */}
                                        {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                                        {meta.error ? setDisabled(true) : setDisabled(false)}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <h4>{language === "PL" ? "Wybrany produkt" : "Product plan: "}{product.name}</h4>
                        <div className={styles.short_box}>
                            <div className={styles.radio_box}>
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
                                            <label>{language === "PL" ? "1 rok" : "1 year"}</label>
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
                                            <label>{language === "PL" ? "1 miesiąc" : "1 month"}</label>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <Field
                                name="numberOfLicenses"
                                validate={composeValidators(numberOfLicenses)}>
                                {({ input }) => (
                                    <div className={styles.form_short}>
                                        <label>{language === "PL" ? "Ilość licencji" : "Number of licence"}</label>
                                        <input
                                            {...input}
                                            value={numberOfSubscription}
                                            type="number"
                                            min="1"
                                        ></input>
                                    </div>
                                )}
                            </Field>


                        </div>

                        <h4 className={styles.money}>
                            {language === "PL" ? "Do zapłaty" : "Total"} {priceToString[0]}

                            <span className={styles.change}>{priceToString[1]}</span>

                            <span className={styles.currencySymbol}>
                                {language === "PL" ? " zł" : <span>&#8364;</span>}

                            </span>
                        </h4>

                        <div className={styles.buttons}>
                            <button className={styles.btn}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleSubmit();
                                }}
                                disabled={disabled}
                            >
                                {language === "PL" ? "Zapłać" : "Pay"}
                            </button>
                        </div>
                    </form >

                )}

            />
        </div>


    )
}

export default CreditCardFormComponent;