import { connect } from "react-redux";

import CreditCardFormComponent from "../../Components/CreditCardFormComponent/CreditCardFormComponent"
import { addCardNumber, addCardName, addCardLastName, addCardValidThru, addCardCvv, flipCard } from "../Actions/CreditCardActions";
import { addOrder, postOrder } from "../Actions/orderAction";




const mapStateToProps = state => ({
    order: state.order.order,
    language: state.language,
    euroExchangeRate: state.currency.currency
})
const mapDispatchToProps = {
    addCardNumber,
    addCardName,
    addCardLastName,
    addCardValidThru,
    addCardCvv,
    flipCard,
    addOrder,
    postOrder
};


const CreditCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps

)(CreditCardFormComponent);

export default CreditCardContainer;
