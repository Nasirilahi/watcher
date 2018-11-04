import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { func, shape, bool, arrayOf, string } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ActionButton from "react-native-action-button";
import Spinner from "react-native-loading-spinner-overlay";
// import io from "socket.io-client";
import styles from "./styles";
import HomeEmptyView from "./EmptyView";
import SymbolLisContainer from "./SymbolListContainer";
import getSymbolsList from "../../actions/symbolActions";
import {
  removeSymbol as removeSymbolAction,
  sortWatchList as sortWatchListAction,
  refreshSymbolsList as refreshSymbolsListAction
} from "../../actions/watchSymbolAction";

// const socket = io("https://ws-api.iextrading.com/1.0");
// // Listen to the channel's messages
// socket.on("message", message => console.log("SSSS", message));

// socket.on("connect", () => {
//   socket.emit("subscribe", "aapl");
// });

// // Disconnect from the channel
// // socket.on('disconnect', () => console.log('Disconnected.'))

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: styles.headerStyle,
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentWillMount = () => {
    const { getSymbols, rehydrated, symbols } = this.props;
    // no need to call entities list everytime just check if list already has been fetched.
    if (rehydrated && symbols.length <= 0) {
      getSymbols();
    }
  };

  addEntity = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate("AddSymbol");
  };

  onPullRefresh = () => {
    const { refreshSymbolsList, entities } = this.props;
    refreshSymbolsList(entities.toString());
  };

  render() {
    const {
      isLoading,
      watchSymbols,
      removeSymbol,
      sortWatchList,
      entities
    } = this.props;
    const hasSymbols = watchSymbols.length > 0;
    return (
      <SafeAreaView style={[styles.container]}>
        <Spinner visible={isLoading} />
        {hasSymbols ? (
          <SymbolLisContainer
            watchSymbols={watchSymbols}
            deleteSymbol={removeSymbol}
            sortWatchList={sortWatchList}
            entities={entities}
            onPullRefresh={this.onPullRefresh}
          />
        ) : (
          <HomeEmptyView />
        )}
        <ActionButton
          buttonColor="#6495ed"
          onPress={this.addEntity}
          offsetX={30}
        />
      </SafeAreaView>
    );
  }
}
HomeScreen.propTypes = {
  getSymbols: func,
  navigation: shape({}),
  isLoading: bool,
  watchSymbols: arrayOf(shape({})),
  removeSymbol: func,
  sortWatchList: func,
  entities: arrayOf(string),
  rehydrated: bool,
  symbols: arrayOf(shape({})),
  refreshSymbolsList: func
};
HomeScreen.defaultProps = {
  getSymbols: () => {},
  navigation: {},
  isLoading: false,
  watchSymbols: [],
  removeSymbol: () => {},
  sortWatchList: () => {},
  entities: [],
  rehydrated: false,
  symbols: [],
  refreshSymbolsList: () => {}
};

const mapStateProps = ({
  symbolsList: { isLoading, symbols },
  watchList: { watchSymbols, entities },
  _persist: { rehydrated }
}) => ({ isLoading, watchSymbols, entities, rehydrated, symbols });
const mapDispatchToProps = dispatch => ({
  getSymbols: bindActionCreators(getSymbolsList, dispatch),
  removeSymbol: bindActionCreators(removeSymbolAction, dispatch),
  sortWatchList: bindActionCreators(sortWatchListAction, dispatch),
  refreshSymbolsList: bindActionCreators(refreshSymbolsListAction, dispatch)
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(HomeScreen);
