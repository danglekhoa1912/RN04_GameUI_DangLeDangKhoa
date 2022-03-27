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
          Streaming
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
            style={{flexGrow: 0, marginVertical: 15}}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 30}} />}
            data={listGame}
            renderItem={({item}) => {
              const {icon} = item;
              return (
                <Image
                  source={{uri: icon}}
                  style={{width: 80, height: 80, borderRadius: 10}}
                />
              );
            }}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <Text title>Live Games</Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.lightPurple}}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{paddingBottom: 80}}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{height: 30}} />}
            data={listGame}
            renderItem={({item}) => {
              const {preview, title} = item;
              const backgroundImage = preview ? preview[0] : undefined;
              return (
                <View>
                  <Image
                    source={{uri: backgroundImage}}
                    style={{width: '100%', height: 200, borderRadius: 8}}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      flexDirection: 'row',
                      right: 0,
                      padding: 5,
                    }}>
                    <Text
                      style={{
                        backgroundColor: COLORS.lightPurple,
                        borderRadius: 5,
                        marginRight: 5,
                        padding: 3,
                      }}>
                      {title}
                    </Text>
                    <Text
                      style={{
                        backgroundColor: COLORS.lightRed,
                        borderRadius: 5,
                        padding: 3,
                      }}>
                      Live
                    </Text>
                  </View>
                </View>
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
