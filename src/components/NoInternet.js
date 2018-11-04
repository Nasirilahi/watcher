import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import styles from "./styles/NoInternetStyles";
import noInternetImage from "../assets/images/noInternet/noConnection.png";

export default class NoInternet extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyles}
          resizeMode="contain"
          source={noInternetImage}
        />
      </View>
    );
  }
}
