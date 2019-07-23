import React, { useState } from 'react';
import styles from "./CreditCardFormComponent.module.scss"
import { Form, Field } from 'react-final-form'
import formatString from "format-string-by-pattern";



const CreditCardFormComponent = ({ addCardNumber, addCardName, addCardLastName, addCardValidThru, addCardCvv, flipCard }) => {
    const [disabled, setDisabled] = useState(false);
    const [formData, setformData] = useState()

    // console.log(product, history, userData);
    const handleflipCard = (value) => {
        flipCard(value)
    }
    const onSubmit = async (values) => {

    };

    const isFirstLetterIsCapital = new RegExp(/^[A-Z]/)
    const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


    const required = value => (value ? undefined : "Field required");
    const mustBeText = value => (!isNaN(value) ? "Must be a text" : undefined)
    const mustBeFirstLetterCapital = value =>
        (isFirstLetterIsCapital.test(value[0])) ? undefined : "The first letter must be a capital";
    const mustBeCardNo = value => (isNaN(value.split("-").join("")) ? "Must be a number" : undefined)

    const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
    const character16Lenght = value => value.split("-").join("").length !== 16 ? "16 numbers required" : undefined;

    const email = value => emailRegExp.test(String(value).toLowerCase()) ? undefined : "Incorrect email address";
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

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

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (

                < form >
                    <Field name="cardNumber"

                        parse={formatString("xxxx-xxxx-xxxx-xxxx")}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        validate={composeValidators(cardNumber, required, mustBeCardNo, character16Lenght)} >
                        {({ input, meta }) => (

                            <div>
                                <label style={
                                    !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Card no.</label>
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
                            <div>

                                <label style={
                                    !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>First Name</label>

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
                            <div>
                                <label style={
                                    !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Last Name</label>

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
                        validate={composeValidators(validThru, required)}>
                        {({ input, meta }) => (
                            <div >
                                <label style={
                                    !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Valid Thru</label>
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


                        name="CVV" validate={composeValidators(cvv, required, mustBeNumber)}>
                        {({ input, meta }) => (
                            <div >
                                <label
                                    style={
                                        !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>CVV</label>
                                <input

                                    {...input}
                                    onChange={(e) => {
                                        input.onChange(e);
                                    }}
                                    onBlur={(() => handleflipCard(false)
                                    )}
                                    onFocus={(() => handleflipCard(true))}

                                    type="text"
                                    style={

                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                                {(meta.error ? setDisabled(true) : setDisabled(false))}
                            </div>

                        )}
                    </Field>

                    <div className={styles.buttons}>
                        <button className={styles.btn}
                            onClick={(event) => {
                                event.preventDefault();
                                handleSubmit();
                            }}
                            disabled={disabled}
                        >
                            Submit
                         </button>

                    </div>

                </form >
            )}
        />

    )
}

export default CreditCardFormComponent;