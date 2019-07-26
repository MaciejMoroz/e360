import React, { useEffect } from "react";
import style from "./TariffPage.module.scss"
import LoadingGif from "../../img/Loading.gif"

import ProductListContainer from "../../Redux/Containers/ProductListContainer"

const TariffPage = ({ products, isLoading, isError, fetchProductsWithRedux, changeLanguage, fetchCurrencysWithRedux, isErrorCurrency, isLoadingCurrency }) => {
    useEffect(() => {
        changeLanguage("EN");
        fetchCurrencysWithRedux();
        fetchProductsWithRedux();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isErrorCurrency || isError) {
        return <h2>Error while loading... :(</h2>;
    }

    if (isLoadingCurrency || isLoading) {
        return <div className={style.center}><img src={LoadingGif} alt="loading..." /></div>;
    }

    return (

        <ProductListContainer products={products}></ProductListContainer>

    )
};

export default TariffPage;