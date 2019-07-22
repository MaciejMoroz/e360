import { connect } from "react-redux";

import ThxPage from "../../Pages/ThxPage/ThxPage"

const getCart = state => state.cart;

const mapStateToProps = state => {
    return {
        Cart: getCart(state)
    };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProduct: id => dispatch(removeProduct(id))
//   };
// };

const ThxPageContainer = connect(
    mapStateToProps,
    //   mapDispatchToProps
)(ThxPage);

export default ThxPageContainer;
