import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { func } from "prop-types";
import Menu, { MenuItem } from "react-native-material-menu";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles/ListHeaderStyles";

export default class ListHeader extends PureComponent {
  menuRef = null;

  setMenuRef = ref => {
    this.menuRef = ref;
  };

  hideMenu = sortBy => {

    const { sortWatchList } = this.props;
    sortWatchList(sortBy);
    this.menuRef.hide();
  };

  showMenu = () => {
    this.menuRef.show();
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Symbol</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Last Price</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Change</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>% Chg</Text>
        </View>
        <View style={styles.sortContainer}>
          <Menu
            ref={this.setMenuRef}
            button={
              <TouchableOpacity onPress={this.showMenu}>
                <Icon name="sort" size={16} color="#5e656c" />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={() => this.hideMenu("symbol")}>Name</MenuItem>
            <MenuItem onPress={() => this.hideMenu("latestPrice")}>Price</MenuItem>
          </Menu>
        </View>
      </View>
    );
  }
}

ListHeader.propTypes = {
  sortWatchList: func
};
ListHeader.defaultProps = {
  sortWatchList: () => {}
};
