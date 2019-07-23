import React, { useState } from 'react';
/* eslint-disable */
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styles from "./FormComponent.module.scss";
import { Form, Field } from 'react-final-form'

const FormComponent = ({ history, addOrder, props }) => {
    const [disabled, setDisabled] = useState(false);
    const [formData, setformData] = useState()

    const onSubmit = async (values) => {

        let product = props.location.state.product,
            firstName = values.firstName,
            lastName = values.lastName,
            email = values.email,
            tel = values.telephoneNumber

        addOrder(product, firstName, lastName, email, tel)

        history.push('/payment');
    };

    const isFirstLetterIsCapital = new RegExp(/^[A-Z]/)
    const emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const required = value => (value ? undefined : "Field required");
    const mustBeText = value => (!isNaN(value) ? "Must be a text" : undefined)
    const mustBeFirstLetterCapital = value =>
        (isFirstLetterIsCapital.test(value[0])) ? undefined : "The first letter must be a capital";
    const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
    const minLenght = value => value.length < 5 ? "atleast 6 numbers" : undefined;

    const email = value => emailRegExp.test(String(value).toLowerCase()) ? undefined : "Incorrect email address";
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (

                < form >
                    <Field name="firstName" validate={composeValidators(required, mustBeText, mustBeFirstLetterCapital)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label style={
                                    !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>First Name</label>
                                <input
                                    {...input}
                                    type="text"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }}
                                />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName" validate={composeValidators(required, mustBeText, mustBeFirstLetterCapital)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label
                                    style={
                                        !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Last Name</label>

                                <input
                                    {...input}
                                    type="text"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="email" validate={composeValidators(required, email)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label
                                    style={
                                        !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>E-mail</label>
                                <input
                                    {...input}
                                    type="email"
                                    style={
                                        !meta.touched ? { border: " solid 1px #3b55e6" } : meta.touched && meta.valid ? { border: "1px green solid" } : { border: "solid 1px red" }} />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="telephoneNumber" validate={composeValidators(required, mustBeNumber, minLenght)}>
                        {({ input, meta }) => (
                            <div className={styles.form}>
                                <label
                                    style={
                                        !meta.touched ? { color: "c5c7c9" } : meta.touched && meta.valid ? { color: "green" } : { color: "red" }}>Telephone number</label>
                                <input
                                    {...input}
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

export default FormComponent;
