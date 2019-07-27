import React from 'react';
import { Provider } from "react-redux";
import store from "../Redux/Store/store";


import HomePageConainer from "../Redux/Containers/HomePageConainer"

function App() {

  return (
    <Provider store={store}>

      <HomePageConainer></HomePageConainer>

    </Provider >
  );
}

export default App;
