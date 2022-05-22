import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { history } from "./redux/reducers";
import store from "./redux";
import App from "./pages/App";
import AppRoutes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router> */}
      <AppRoutes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
