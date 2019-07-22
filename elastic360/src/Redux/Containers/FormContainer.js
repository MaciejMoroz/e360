import { connect } from "react-redux";

import FormComponent from "../../Components/FormComponent/FormComponent"
import { addOrder } from "../Actions/orderAction";



const mapDispatchToProps = {
    addOrder
};

const FormContainer = connect(
    null,
    mapDispatchToProps,
)(FormComponent);

export default FormContainer;
