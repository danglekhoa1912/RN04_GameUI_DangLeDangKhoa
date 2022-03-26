import {View, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes';
import {requestListGame} from '../../redux/thunk/gameActionThunk';
import {connect} from 'react-redux';

class SteamScreen extends Component {
  componentDidMount() {
    this.props.dispatch(requestListGame());
  }

  render() {
    const listGame = this.props.listGame;

    return (
      <BackgroundView>
        <Text style={{marginLeft: 10}} header>
          Sreaming
        </Text>
        <View
          style={{
            backgroundColor: COLORS.darkGray,
            borderRadius: 35,
            margin: 20,
          }}>
          <TextInput
            style={{color: COLORS.white, paddingLeft: 30}}
            placeholder="Search here..."
            placeholderTextColor={COLORS.opacityWhite}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              paddingVertical: 10,
            }}>
            <AntIcon color={COLORS.opacityWhite} name="search1" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text subText>Populor Gamers</Text>
          <FlatList
            style={{flexGrow: 0, marginVertical: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 30}} />}
            data={listGame}
            renderItem={({item}) => {
              const {icon, preview} = item;
              const backgroundImage = preview ? preview[0] : undefined;
              return (
                <Image
                  source={{uri: icon}}
                  style={{width: 80, height: 80, borderRadius: 10}}
                />
              );
            }}
          />
        </View>
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => ({
  listGame: state.GameReducer.listGame,
});

export default connect(mapStateToProps)(SteamScreen);
