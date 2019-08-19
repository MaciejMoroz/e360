import { connect } from "react-redux";

import ProductItemComponent from "../../Components/ProductItemComponent/ProductItemComponent";

import { addOrder } from "../Actions/orderAction";


const mapStateToProps = state => ({
    language: state.language,
    euroExchangeRate: state.currency.currency
});
const mapDispatchToProps = {
    addOrder

};

const ProductItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps

)(ProductItemComponent);

export default ProductItemContainer;
