import React from 'react';



import styles from "./Button.module.scss"

const Button = ({ text, product }) => {
    let handleClick = () => {
        console.log(product)

    }
    return (
        <button onClick={() => handleClick()} className={styles.btnPink}>{text}</button>
    );
}

export default Button;