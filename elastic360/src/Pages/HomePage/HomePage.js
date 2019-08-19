import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavContainer from "../../Redux/Containers/NavContainer"
import TariffPageContainer from '../../Redux/Containers/TariffPageContainer';
import FormPage from '../FormPage/FormPage'
import PaymentPage from "../PaymentPage/PaymentPage"
import ThxPageContainer from "../../Redux/Containers/ThxPageContainer"


const HomePage = ({ changeLanguage, fetchProductsWithRedux, fetchCurrencysWithRedux }) => {
    useEffect(() => {
        changeLanguage("EN");
        fetchCurrencysWithRedux();
        fetchProductsWithRedux();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (

        <Router>
            <NavContainer></NavContainer>
            <Route exact path="/" component={TariffPageContainer} />
            <Route path="/form" component={FormPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/thx" component={ThxPageContainer} />
        </Router>
    );
}

export default HomePage;