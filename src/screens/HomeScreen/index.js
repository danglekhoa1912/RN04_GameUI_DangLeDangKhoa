import {View, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {BackgroundView, Text, Header} from '../../components';
import GameItem from './components/GameItem';
import {stackName} from '../../configs/navigationContants';
import {requestListGame} from '../../redux/thunk/gameActionThunk';

class HomeScreen extends Component {
  LeftComponent = (
    <View>
      <Text header style={styles.headerText}>
        Hello <Text bold>CyberSoft,</Text>
      </Text>
      <Text>Best games for today</Text>
    </View>
  );

  onPressGameItem = id => {
    this.props.navigation.navigate(stackName.detailStack, {id});
  };

  componentDidMount() {
    this.props.dispatch(requestListGame());
  }

  render() {
    const {listGame} = this.props;
    return (
      <BackgroundView>
        <Header
          LeftComponent={this.LeftComponent}
          RightComponent={<View style={styles.avatar} />}
        />
        <FlatList
          data={listGame}
          renderItem={({item}) => (
            <GameItem
              game={item}
              onPress={() => this.onPressGameItem(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 60}} />}
          contentContainerStyle={{paddingBottom: 60}}
          showsVerticalScrollIndicator={false}
        />
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => ({
  listGame: state.GameReducer.listGame,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbb',
  },
});
