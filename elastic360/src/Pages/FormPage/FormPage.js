import React from 'react';
import RegistrationForm from "../../Components/FormComponent/FormComponent"
import Styles from "./FormPage.module.scss"


const RegistrationPage = (props) => {
    // console.log(props.location.state.product)
    return (
        <section className="component">
            <div className="wrapper">

                <p>RegistrationPage</p>
                <div className={Styles.formBox}>
                    <RegistrationForm ></RegistrationForm>
                </div>



            </div>
        </section>
    );
}

export default RegistrationPage;