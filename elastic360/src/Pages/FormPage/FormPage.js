import React from 'react';
import FormContainer from "../../Redux/Containers/FormContainer"
import Styles from "./FormPage.module.scss"




const FormPage = (props) => {
    return (

        <div className={Styles.formBox}>
            <FormContainer history={props.history} props={props}></FormContainer>
        </div>

    );
}

export default FormPage;