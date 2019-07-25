import React from 'react';
/* eslint-disable */
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductDetalisComponent from "../ProductDetalisComponent/ProductDetalisComponent"
import styles from "./ProductItemComponent.module.scss"
import Button from "../Button/Button"

const ProductItemComponent = ({ product, language, euroExchangeRate }) => {

    const isPLN = language === "PL" ? euroExchangeRate.rates[0].ask : 1;
    const price = ((product.price * isPLN).toFixed(2)).toString().split(".");
    const btnText = language === "PL" ? "Kup Teraz" : "Buy Now";

    return (

        <div className={styles.itemBox}>
            <div className={styles.productItem}>
                <div>
                    <h4>{product.name}</h4>
                    <h1 className={styles.money}>
                        {price[0]}
                        <span className={styles.change}>{price[1]}</span>
                        <span className={styles.currencySymbol}>
                            {language === "PL" ? " zł" : <span>&#8364;</span>}

                        </span>
                    </h1>
                    <p className={styles.priceDesc}>{product.price_desc}</p>
                    <ul>{product.product_detalis.map((detal, index) => {
                        return (
                            <ProductDetalisComponent key={index} detal={detal} ></ProductDetalisComponent>
                        )
                    })}</ul>
                </div>


                <div className={styles.btn}>
                    <Link to={{
                        pathname: '/form',
                        state: {
                            product: product
                        }
                    }}>
                        <Button text={btnText}>
                            }</Button>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default ProductItemComponent;