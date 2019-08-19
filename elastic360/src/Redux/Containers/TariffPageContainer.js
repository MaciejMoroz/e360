import { connect } from "react-redux";

import TarrifPage from "../../Pages/TariffPage/TariffPage";


const mapStateToProps = state => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
    isError: state.products.isError,
    isLoadingCurrency: state.currency.isLoading,
    isErrorCurrency: state.currency.isError,
    language: state.language
});



const TarrifPageContainer = connect(
    mapStateToProps
)(TarrifPage);

export default TarrifPageContainer;
