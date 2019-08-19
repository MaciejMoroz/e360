import { connect } from "react-redux";

import ThxPage from "../../Pages/ThxPage/ThxPage"

const mapStateToProps = state => ({
    order: state.order.order,
    language: state.language
})

const ThxPageContainer = connect(
    mapStateToProps,
)(ThxPage);

export default ThxPageContainer;
