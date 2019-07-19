import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ProductDetalisComponent from "../ProductDetalisComponent/ProductDetalisComponent"
import styles from "./ProductItemComponent.module.scss"
import Button from "../Button/Button"

const ProductItemComponent = ({ product }) => {
    let price = (product.price).toString().split(".");
    console.log(price);


    return (

        <div className={styles.itemBox}>
            <div className={styles.productItem}>
                <div>
                    <h4>{product.name}</h4>
                    <h1 className={styles.money}>{price[0]}
                        <span className={styles.change}>{price[1]}</span> <span className={styles.currencySymbol}>&#8364;</span></h1>
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
                        < Button product={product} text="Buy Now" ></Button>
                    </Link>
                </div>
            </div>
        </div >

    );
}

export default ProductItemComponent;