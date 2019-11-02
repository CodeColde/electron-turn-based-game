import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./reduxState";
import "./styles.css";
import Root from "./root";
import { logoutAction } from "./reduxState/player/logout";
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;


export const { getState } = store;

ipcRenderer.on('logout', () => {
  store.dispatch(logoutAction);
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
