import { connect } from "react-redux";

import TarrifPage from "../../Pages/TariffPage/TariffPage";

import { fetchProductsWithRedux } from "../Actions/ProductActions";

const mapStateToProps = state => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
    isError: state.products.isError
});

const mapDispatchToProps = {
    fetchProductsWithRedux
};

const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TarrifPage);

export default HomePageContainer;
