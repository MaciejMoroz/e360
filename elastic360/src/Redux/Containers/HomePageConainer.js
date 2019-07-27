import { connect } from "react-redux";

import HomePage from "../../Pages/HomePage/HomePage";

import { fetchProductsWithRedux } from "../Actions/ProductActions";
import { fetchCurrencysWithRedux } from "../Actions/CurrencyActions"
import { changeLanguage } from "../Actions/LanguageAction"


const mapDispatchToProps = {
    fetchCurrencysWithRedux,
    fetchProductsWithRedux,
    changeLanguage

};

const HomePAgeContainer = connect(
    null,
    mapDispatchToProps
)(HomePage);

export default HomePAgeContainer;