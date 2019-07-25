import { connect } from "react-redux";

import ProductItemComponent from "../../Components/ProductItemComponent/ProductItemComponent";



const mapStateToProps = state => ({
    language: state.language,
    euroExchangeRate: state.currency.currency
});


const ProductItemContainer = connect(
    mapStateToProps

)(ProductItemComponent);

export default ProductItemContainer;
