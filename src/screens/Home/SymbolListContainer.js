import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { arrayOf, shape, func, string } from "prop-types";
import ListHeader from "../../components/ListHeader";
import ListItem from "../../components/ListItem";
import styles from "./styles";

export default class SymbolsListContainer extends PureComponent {
  state = {
    refresh: false,
    refreshing: false
  };

  keyExtractor = (item, index) => index.toString();

  doRefreshList = text => {
    const { sortWatchList } = this.props;
    sortWatchList(text);
    this.setState(preState => ({ refresh: !preState.refresh }));
  };

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      const { onPullRefresh } = this.props;
      onPullRefresh();
      this.setState({ refreshing: false });
    });
  };

  render() {
    const { watchSymbols, deleteSymbol, entities } = this.props;
    const { refresh, refreshing } = this.state;
    return (
      <FlatList
        data={watchSymbols}
        ListHeaderComponent={() => (
          <ListHeader sortWatchList={this.doRefreshList} />
        )}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            symbolKey={entities[index]}
            index={index}
            deleteSymbol={deleteSymbol}
          />
        )}
        style={styles.listContainer}
        keyExtractor={this.keyExtractor}
        extraData={refresh}
        stickyHeaderIndices={[0]}
        refreshing={refreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }
}
SymbolsListContainer.propTypes = {
  watchSymbols: arrayOf(shape({})),
  deleteSymbol: func,
  sortWatchList: func,
  entities: arrayOf(string),
  onPullRefresh: func
};
SymbolsListContainer.defaultProps = {
  watchSymbols: [],
  deleteSymbol: () => {},
  sortWatchList: () => {},
  entities: [],
  onPullRefresh: () => {}
};
