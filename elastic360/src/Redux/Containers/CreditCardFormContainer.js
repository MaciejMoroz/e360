import { connect } from "react-redux";

import CreditCardFormComponent from "../../Components/CreditCardFormComponent/CreditCardFormComponent"
import { addCardNumber, addCardName, addCardLastName, addCardValidThru } from "../Actions/CreditCardActions";



const mapDispatchToProps = {
    addCardNumber,
    addCardName,
    addCardLastName,
    addCardValidThru
};

const CreditCardContainer = connect(
    null,
    mapDispatchToProps,
)(CreditCardFormComponent);

export default CreditCardContainer;
