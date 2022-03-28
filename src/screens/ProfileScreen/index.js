import {View, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';

import {BackgroundView, Text, ViewIcon} from '../../components';
import {COLORS} from '../../themes';
import {connect} from 'react-redux';
import {requestListGame} from '../../redux/thunk/gameActionThunk';

class ProfileScreen extends Component {
  componentDidMount() {
    this.props.dispatch(requestListGame());
  }

  renderGameItems({icon, title}) {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <ViewIcon source={icon} />
        <View style={{padding: 20}}>
          <Text bold>{title}</Text>
          <Text subText>825 Sales</Text>
        </View>
        <View style={{alignItems: 'flex-end', flex: 1}}>
          <Text bold style={{color: COLORS.lightPurple, paddingTop: 20}}>
            $36
          </Text>
        </View>
      </View>
    );
  }

  render() {
    const listGame = this.props.listGame;
    return (
      <BackgroundView>
        <View style={styles.containerProfile}>
          <View style={styles.avatar}></View>
          <Text bold>CyberSoft</Text>
          <View style={styles.containerInforTable}>
            <Text
              bold
              style={{
                backgroundColor: COLORS.lightPurple,
                borderRadius: 5,
                paddingHorizontal: 8,
              }}>
              Pro Gamer
            </Text>
            <Text
              bold
              style={{
                backgroundColor: COLORS.lightYellow,
                color: 'black',
                borderRadius: 5,
                paddingHorizontal: 8,
              }}>
              Pro Coder
            </Text>
          </View>
        </View>
        <View style={styles.containerInfor}>
          <Text>
            <Text title bold>
              250
            </Text>{' '}
            <Text style={styles.text}>Games</Text>
          </Text>
          <Text>
            <Text title bold>
              4
            </Text>{' '}
            <Text style={styles.text} subText>
              Purchases
            </Text>
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text style={{textAlign: 'center', marginVertical: 20}} subText title>
            Purchased Games
          </Text>
          <FlatList
            contentContainerStyle={{paddingBottom: 30}}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{height: 30}} />}
            data={listGame}
            renderItem={({item}) => this.renderGameItems(item)}
          />
        </View>
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => ({
  listGame: state.GameReducer.listGame,
});

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
  containerProfile: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 3,
  },
  avatar: {
    backgroundColor: COLORS.gray,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  containerInforTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  containerInfor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 100,
  },
  text: {
    fontSize: 12,
    color: COLORS.gray,
  },
});
