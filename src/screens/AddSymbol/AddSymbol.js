/* eslint-disable camelcase */
import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { arrayOf, any, func, bool, shape } from "prop-types";
import Spinner from "react-native-loading-spinner-overlay";
import Search from "../../components/Search";
import NotFountView from "../../components/NotFoundView";
import styles from "./styles";
import { getSymbolData } from "../../actions/watchSymbolAction";

class AddSymbol extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      symbolsResult: [],
      searchText: ""
    };
  }

  // eslint-disable-next-line react/sort-comp
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoading) {
      const {
        navigation: { goBack }
      } = this.props;
      goBack();
    }
  }

  handleItemClick = item => {
    const { getSymbol } = this.props;
    getSymbol(item.symbol);
  };

  keyExtractor = item => item.symbol;

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => this.handleItemClick(item)}
    >
      <Text style={styles.symbolText}>{item.symbol}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
    </TouchableOpacity>
  );

  setSearchText = text => {
    const { symbols } = this.props;
    let filteredSymbols;
    if (text === "") {
      filteredSymbols = [];
    } else {
      filteredSymbols = symbols.filter(
        symbolItem => symbolItem.symbol.toLowerCase().search(text) !== -1
      );
    }
    this.setState({ searchText: text, symbolsResult: filteredSymbols });
  };

  renderEmptyView = () => {
    const { symbolsResult, searchText } = this.state;
    if (searchText !== "" && symbolsResult.length === 0) {
      return <NotFountView />;
    }
    return (
      <View>
        <Text>Enter Symbol name</Text>
      </View>
    );
  };

  render() {
    const { symbolsResult, searchText } = this.state;
    const { isLoading } = this.props;
    const showList = symbolsResult.length > 0;
    let emptyView = null;
    if (!showList) {
      if (searchText === "" && symbolsResult.length === 0) {
        emptyView = (
          <View style={styles.showTextMessageView}>
            <Text style={styles.showTextMessage}>Enter Symbol name</Text>
            <Text style={styles.showTextMessage}>
              Search and click on the symbol to add it in to your watch list
            </Text>
          </View>
        );
      }
      if (searchText !== "" && symbolsResult.length === 0) {
        emptyView = <NotFountView />;
      }
    }

    return (
      <View style={styles.listContainer}>
        <Spinner visible={isLoading} />
        <Search searchText={searchText} setSearchText={this.setSearchText} />
        {showList ? (
          <FlatList
            style={styles.flatlist}
            data={symbolsResult}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListEmptyComponent={this.renderEmptyView}
          />
        ) : (
          emptyView
        )}
      </View>
    );
  }
}
AddSymbol.propTypes = {
  symbols: arrayOf(any),
  isLoading: bool,
  getSymbol: func,
  navigation: shape({})
};
AddSymbol.defaultProps = {
  symbols: [],
  isLoading: false,
  getSymbol: () => {},
  navigation: {}
};
const mapStateToProps = ({
  symbolsList: { symbols },
  watchList: { isLoading }
}) => ({
  symbols,
  isLoading
});
const mapDispatchToProps = dispatch => ({
  getSymbol: bindActionCreators(getSymbolData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSymbol);
