import { connect } from "react-redux";

import Nav from "../../Pages/Nav/Nav"

import { changeLanguage } from "../Actions/LanguageAction"

const mapStateToProps = state => ({
    language: state.language
});

const mapDispatchToProps = {
    changeLanguage
};

const NavContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

export default NavContainer