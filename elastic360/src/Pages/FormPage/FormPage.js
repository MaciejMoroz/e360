import React from 'react';
import FormContainer from "../../Redux/Containers/FormContainer"
import styles from "./FormPage.module.scss"
import Fade from 'react-reveal/Fade';


const FormPage = (props) => {
    return (
        <Fade left>
            <div className={styles.formBox}>
                <FormContainer history={props.history} props={props}></FormContainer>
            </div>
        </Fade>
    );
}

export default FormPage;