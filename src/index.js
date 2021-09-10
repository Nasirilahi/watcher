import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { bool } from "prop-types";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./navigation";
import { store, persistor } from "./store/configureStore";
import withNetworkConnectivity from "./hoc/withNetworkConnectivity";
import NoInternet from "./components/NoInternet";

const Index = ({ isConnected }) =>
  isConnected ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden />
        <Layout />
      </PersistGate>
    </Provider>
  ) : (
    <NoInternet />
  );

Index.propTypes = {
  isConnected: bool,
};

Index.defaultProps = {
  isConnected: false,
};

export default withNetworkConnectivity()(Index);
