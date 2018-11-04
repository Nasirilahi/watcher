import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { bool } from "prop-types";
import { PersistGate } from "redux-persist/integration/react";
import createRootNavigator from "./navigation";
import { store, persistor } from "./store/configureStore";
import withNetworkConnectivity from "./hoc/withNetworkConnectivity";
import NoInternet from "./components/NoInternet";

class Index extends PureComponent {
  render() {
    const { isConnected } = this.props;
    const Layout = createRootNavigator();
    return isConnected ? (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout />
        </PersistGate>
      </Provider>
    ) : (
      <NoInternet />
    );
  }
}

Index.propTypes = {
  isConnected: bool
};

Index.defaultProps = {
  isConnected: false
};

export default withNetworkConnectivity()(Index);
