import Icon from "react-native-vector-icons/FontAwesome";
import React, { PureComponent } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { string, func } from "prop-types";
import styles from "./styles/SearchStyles";

/**
 * Search bar component
 * * */
export default class Search extends PureComponent {
  render() {
    const { searchText, setSearchText } = this.props;
    return (
      <View style={styles.searchContainer}>
        <Icon
          style={{ backgroundColor: "transparent" }}
          name="search"
          size={20}
          color="#6495ed"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchText}
          placeholder="Find a Quote (e.g AAPL, FB)"
          autoCapitalize="none"
          value={searchText}
          underlineColorAndroid="white"
          placeholderTextColor="#6495ed"
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Icon
              style={{ backgroundColor: "transparent", color: "grey" }}
              name="times"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

Search.propTypes = {
  searchText: string,
  setSearchText: func
};

Search.defaultProps = {
  searchText: "",
  setSearchText: () => {}
};
