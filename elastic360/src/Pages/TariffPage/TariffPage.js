import React, { useEffect } from "react";
import style from "./TariffPage.module.scss"
import LoadingGif from "../../img/Loading.gif"

import ProductListComponent from "../../Components/ProductListComponent/ProductsListComponent"

const TariffPage = ({ products, isLoading, isError, fetchProductsWithRedux }) => {
    useEffect(() => {
        fetchProductsWithRedux();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoading) {
        return <div className={style.center}><img src={LoadingGif} alt="loading..." /></div>;
    }
    return (
        <>
            <p>Tarrif Page</p>
            <ProductListComponent products={products}></ProductListComponent>
        </>
    )
};

export default TariffPage;