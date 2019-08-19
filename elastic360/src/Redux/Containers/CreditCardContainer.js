import { connect } from "react-redux";

import CreditCardComponent from "../../Components/CreditCardComponent/CreditCartComponent";

const mapStateToProps = state => ({
    cardNumber: state.CreditCard.number,
    cardFirstName: state.CreditCard.firstName,
    cardLastName: state.CreditCard.lastName,
    cardValidThru: state.CreditCard.validThru,
    cardCvv: state.CreditCard.cvv,
    isFliped: state.CreditCard.isFliped
});


const CreditCard = connect(
    mapStateToProps,

)(CreditCardComponent);

export default CreditCard;
