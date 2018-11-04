import React, { Component } from "react";
import { NetInfo } from "react-native";

const withNetworkConnectivity = (
  withConnectivityProp = true
) => WrappedComponent => {
  if (typeof withConnectivityProp !== "boolean")
    throw new Error("you should pass a boolean as withConnectivityProp");

  class EnhancedComponent extends Component {
    state = {
      isConnected: true
    };

    componentDidMount() {
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleConnectivityChange
      );
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleConnectivityChange
      );
    }

    handleConnectivityChange = isConnected =>
      this.setState({
        isConnected
      });

    render() {
      const { isConnected } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          isConnected={withConnectivityProp ? isConnected : undefined}
        />
      );
    }
  }
  return EnhancedComponent;
};

export default withNetworkConnectivity;
