import React from "react";
//import MAIN page
import Home from "./pages/Home";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/configureStore";

//import SEO tools for tracking user behaviour
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
 
//Google analytics init config to track user behavior and get feedback from web
ReactGA.initialize('UA-197871343-1');
ReactGA.pageview(window.location.pathname + window.location.search);

//Hotjar config to obtain heat map according to user behavior
hotjar.initialize(2419809, 6);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
