import React from 'react';
import { Provider } from "react-redux";
import store from "../Redux/Store/store";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import styles from './App.module.scss';
import TariffPageContainer from '../Redux/Containers/TariffPageContainer';
import FormPage from '../Pages/FormPage/FormPage'
import PaymentPage from "../Pages/PaymentPage/PaymentPage"
import ThxPageContainer from "../Redux/Containers/ThxPageContainer"


function App() {
  return (
    <Provider store={store}>
      <section className="component">
        <div className="wrapper">
          <Router>


            <Link to={{
              pathname: '/thx',
            }}>

              <button>klik</button>

            </Link>
            <>
              <Route exact path="/" component={TariffPageContainer} />
              <Route path="/form" component={FormPage} />
              <Route path="/payment" component={PaymentPage} />
              <Route path="/thx" component={ThxPageContainer} />

            </>
          </Router>
        </div>
      </section>
    </Provider>
  );
}

export default App;
