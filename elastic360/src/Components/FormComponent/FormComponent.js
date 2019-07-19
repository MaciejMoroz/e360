import React from 'react';
import styles from "./FormComponent.module.scss";
import { Form, Field } from 'react-final-form'


const RegistrationForm = () => {

    const onSubmit = async values => {

        console.log(JSON.stringify(values, 0, 2));
    };
    const required = value => (value ? undefined : "Field required");
    const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);


    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form>
                    <Field name="firstName" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <label>First Name</label>
                                <input {...input} type="text" />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <label>Last Name</label>
                                <input {...input} type="text" />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                    <Field name="email" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <label>E-mail</label>
                                <input {...input} type="email" />
                                {meta.error && meta.touched && <p className={styles.error}>{meta.error}</p>}
                            </div>
                        )}
                    </Field>

                    <div className={styles.buttons}>
                        <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
                            Submit
                         </button>

                    </div>

                </form>
            )}
        />

    )
}

export default RegistrationForm;
