import { connect } from "react-redux";

import FormComponent from "../../Components/FormComponent/FormComponent"
import { addOrder } from "../Actions/orderAction";

const mapStateToProps = state => ({
    language: state.language,
    product: state.order.order.product
});

const mapDispatchToProps = {
    addOrder

};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormComponent);

export default FormContainer;
