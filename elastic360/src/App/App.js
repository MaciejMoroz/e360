import React from 'react';
import { Provider } from "react-redux";
import store from "../Redux/Store/store";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Wrapper from "../GlobalStyles/wrapper/Wrapper"
import Component from "../GlobalStyles/component/Component"
import NavContainer from "../Redux/Containers/NavContainer"
import TariffPageContainer from '../Redux/Containers/TariffPageContainer';
import FormPage from '../Pages/FormPage/FormPage'
import PaymentPage from "../Pages/PaymentPage/PaymentPage"
import ThxPageContainer from "../Redux/Containers/ThxPageContainer"

function App() {

  return (
    <Provider store={store}>
      <Component>
        <Wrapper>
          <Router>
            <NavContainer></NavContainer>
            <Route exact path="/" component={TariffPageContainer} />
            <Route path="/form" component={FormPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/thx" component={ThxPageContainer} />
          </Router>
        </Wrapper>
      </Component>
    </Provider >
  );
}

export default App;
