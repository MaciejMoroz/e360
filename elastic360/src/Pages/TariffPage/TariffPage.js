import React from "react";
import style from "./TariffPage.module.scss"
import Wrapper from "../../GlobalStyles/wrapper/Wrapper"
import Component from "../../GlobalStyles/component/Component"
import Fade from 'react-reveal/Fade';
import LoadingGif from "../../img/Loading.gif"
import ProductListContainer from "../../Redux/Containers/ProductListContainer"

const TariffPage = ({ products, isLoading, isError, isErrorCurrency, isLoadingCurrency }) => {
    if (isErrorCurrency || isError) {
        return <h2>Error while loading... :(</h2>;
    }
    if (isLoadingCurrency || isLoading) {
        return <div className={style.center}><img src={LoadingGif} alt="loading..." /></div>;
    }
    return (
        <Component>
            <Wrapper>
                <Fade left>
                    <ProductListContainer products={products}></ProductListContainer>
                </Fade>
            </Wrapper>
        </Component>
    )
};

export default TariffPage;