import React from 'react';


import styles from "./Button.module.scss"

const Button = ({ text }) => {

    return (
        <button className={styles.btnPink}>{text
        }</button>
    );
}

export default Button;