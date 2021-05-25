import React from "react";
//import MAIN page
import Home from "./pages/Home";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/configureStore";
import ReactGA from 'react-ga';

ReactGA.initialize(`${process.env.GOOGLE_ANALYTICS_ID_TRACKING}`);
ReactGA.pageview(window.location.pathname + window.location.search);
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
