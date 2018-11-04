import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import noResultImage from "../assets/images/noresult/noresults.png";
import styles from "./styles/NotFoundViewStyles";

class NotFountView extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={noResultImage} style={styles.noResultImage} />
      </View>
    );
  }
}

export default NotFountView;
