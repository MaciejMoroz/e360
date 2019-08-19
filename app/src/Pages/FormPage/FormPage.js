import React from 'react';
import styles from "./FormPage.module.scss"
import Wrapper from "../../GlobalStyles/wrapper/Wrapper"
import Component from "../../GlobalStyles/component/Component"
import FormContainer from "../../Redux/Containers/FormContainer"

import Fade from 'react-reveal/Fade';


const FormPage = (props, product) => {
    // console.console.log(product);
    return (
        <Component>
            <Wrapper>
                <Fade left>
                    <div className={styles.formBox}>
                        <FormContainer history={props.history} props={props} product={product}></FormContainer>
                    </div>
                </Fade>
            </Wrapper>
        </Component>
    );
}

export default FormPage;