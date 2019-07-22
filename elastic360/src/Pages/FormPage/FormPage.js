import React from 'react';
import FormContainer from "../../Redux/Containers/FormContainer"
import Styles from "./FormPage.module.scss"


const FormPage = (props) => {



    return (
        <section className="component">
            <div className="wrapper">

                <p>RegistrationPage</p>
                <div className={Styles.formBox}>
                    <FormContainer history={props.history} props={props}></FormContainer>
                </div>



            </div>
        </section>
    );
}

export default FormPage;