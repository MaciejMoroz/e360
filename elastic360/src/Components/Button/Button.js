import React from 'react';



import styles from "./Button.module.scss"

const Button = ({ text, addOrder, id }) => {

    return (
        <button className={styles.btnPink}>{text
        }</button>
    );
}

export default Button;