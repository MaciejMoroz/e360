import { connect } from "react-redux";

import CreditCardFormComponent from "../../Components/CreditCardFormComponent/CreditCardFormComponent"
import { addCardNumber, addCardName, addCardLastName, addCardValidThru, addCardCvv, flipCard } from "../Actions/CreditCardActions";
const mapStateToProps = state => ({
    order: state.order.order
})
const mapDispatchToProps = {
    addCardNumber,
    addCardName,
    addCardLastName,
    addCardValidThru,
    addCardCvv,
    flipCard
};


const CreditCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps

)(CreditCardFormComponent);

export default CreditCardContainer;
