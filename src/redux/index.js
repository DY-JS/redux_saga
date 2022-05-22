import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "connected-react-router";
import rootSaga from "./sagas";

import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// const composeEnchensers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     })
//    : compose;

const store = createStore(
  rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga); //run динамически запустит саги, кот нах в рутСаге
//если они подключ ч-з applyMiddleware и содержат ф-ции-генераторы
export default store;
