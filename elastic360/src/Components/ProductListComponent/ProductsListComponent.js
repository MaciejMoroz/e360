import React from 'react';
import ProductItemComponent from "../ProductItemComponent/ProductItemComponent"
import style from "./ProductListComponent.module.scss"

const ProductListComponent = ({ products }) => {
    return (
        <>
            <div className={style.productList}>
                {products.map(product => {
                    return (

                        <ProductItemComponent key={product._id} product={product}>

                        </ProductItemComponent>


                    )
                })}
            </div>
        </>
    );
}

export default ProductListComponent;