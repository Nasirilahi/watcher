import React, { PureComponent } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import recodImage from "../../assets/images/records/records.png";
import arrowIcon from "../../assets/images/arrow/arrow.png";

class HomeEmptyView extends PureComponent {
  render() {
    return (
      <View style={styles.homeEmptyContainer}>
        <View style={styles.homeEmptyView}>
          <View style={styles.imageCircularView}>
            <Image style={styles.notesImage} source={recodImage} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.textEmpty}>
              {"No symbol in the list. Add new symbol"}
            </Text>
          </View>
          <View style={styles.arrowView}>
            <Image style={styles.arrowImage} source={arrowIcon} />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeEmptyView;
