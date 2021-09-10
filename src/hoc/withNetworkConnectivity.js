import React, { Component, useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";

const withNetworkConnectivity =
  (withConnectivityProp = true) =>
  (WrappedComponent) => {
    if (typeof withConnectivityProp !== "boolean")
      throw new Error("you should pass a boolean as withConnectivityProp");
    const EnhancedComponent = (props) => {
      const [isConnected, setConnection] = useState(true);
      useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
          setConnection(state.isConnected);
        });
        return () => unsubscribe();
      });
      return (
        <WrappedComponent
          {...props}
          isConnected={withConnectivityProp ? isConnected : undefined}
        />
      );
    };
    return EnhancedComponent;
  };

export default withNetworkConnectivity;
