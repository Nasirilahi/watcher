import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { shape, func, string, number } from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles/ListItemStyles";

export default class ListItem extends PureComponent {
  render() {
    const { deleteSymbol, item, symbolKey, index } = this.props;
    const { symbol, companyName, latestPrice, change, changePercent } = item[
      symbolKey
    ];
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.dataContainer}>
            <View style={[styles.dataTextContainer, styles.symbolContainer]}>
              <Text style={styles.symbolText}>{symbol}</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.companyNameText}
              >
                {companyName}
              </Text>
            </View>
            <View style={styles.dataTextContainer}>
              <Text style={styles.priceText}>{latestPrice}</Text>
            </View>
            <View style={styles.dataTextContainer}>
              <Text
                style={[
                  styles.priceText,
                  {
                    color: change > 0 ? "rgb(0, 153, 51)" : "rgb(255, 51, 58)"
                  }
                ]}
              >
                {change}
              </Text>
            </View>
            <View style={styles.dataTextContainer}>
              <Text
                style={[
                  styles.priceText,
                  {
                    color: change > 0 ? "rgb(0, 153, 51)" : "rgb(255, 51, 58)"
                  }
                ]}
              >{`${changePercent.toFixed(2)}%`}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteSymbol(index)}
          >
            <Icon name="md-trash" style={styles.icon} size={16} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ListItem.propTypes = {
  item: shape({}),
  deleteSymbol: func,
  symbolKey: string,
  index: number
};
ListItem.defaultProps = {
  item: null,
  deleteSymbol: () => {},
  symbolKey: null,
  index: -1
};
