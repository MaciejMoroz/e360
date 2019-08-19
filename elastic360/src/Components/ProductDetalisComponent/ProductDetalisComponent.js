import React from 'react';
import styles from "./ProductDetalisComponent.module.scss";

const ProductDetalisComponent = ({ detal }) => {
    return (
        <>
            <li className={styles.item}>{detal}</li>
        </>

    );
}

export default ProductDetalisComponent;