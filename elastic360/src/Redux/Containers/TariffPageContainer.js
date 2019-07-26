import { connect } from "react-redux";

import TarrifPage from "../../Pages/TariffPage/TariffPage";

import { fetchProductsWithRedux } from "../Actions/ProductActions";
import { fetchCurrencysWithRedux } from "../Actions/CurrencyActions"
import { changeLanguage } from "../Actions/LanguageAction"



const mapStateToProps = state => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
    isError: state.products.isError,
    isLoadingCurrency: state.currency.isLoading,
    isErrorCurrency: state.currency.isError,
    language: state.language,
    animation: state.animation,

});

const mapDispatchToProps = {
    fetchCurrencysWithRedux,
    fetchProductsWithRedux,
    changeLanguage

};

const TarrifPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TarrifPage);

export default TarrifPageContainer;
