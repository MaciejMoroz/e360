import React from 'react';


import styles from "./Button.module.scss"



const Button = ({ text, addOrder, product }) => {
    const handleClick = () => {
        addOrder(product, null, null, null, null, null, null, null, null)
    }
    return (
        <button className={styles.btnPink}
            onClick={() => { handleClick() }}
        >{text
            } </button>
    );
}

export default Button;