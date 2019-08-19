import React from 'react';
import ProductItemContainer from "../../Redux/Containers/ProductItemContainer"
import style from "./ProductListComponent.module.scss"

const ProductListComponent = ({ products, language }) => {
    return (
        <>

            <div className={style.productList}>
                {products.filter(product => product.lng === language).map(product => {
                    return (
                        <ProductItemContainer key={product._id} product={product} >
                        </ProductItemContainer>
                    )
                })}
            </div>

        </>
    );
}

export default ProductListComponent;