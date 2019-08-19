import { connect } from "react-redux";

import ProductListComponent from "../../Components/ProductListComponent/ProductsListComponent";

const mapStateToProps = state => ({
    language: state.language,
});


const ProductListContainer = connect(
    mapStateToProps

)(ProductListComponent);

export default ProductListContainer;
