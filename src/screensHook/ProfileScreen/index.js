import {View, Image} from 'react-native';
import React, {Component} from 'react';

import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes';
import {connect} from 'react-redux';

class ProfileScreen extends Component {
  renderGameItems({icon, title}) {
    return (
      <View>
        <Image source={{uri: icon}} style={{width: 50, height: 50}} />
        <View>
          <Text>{title}</Text>
          <Text>825 Sales</Text>
        </View>
        <Text>$36</Text>
      </View>
    );
  }

  render() {
    const listGame = this.props.listGame;
    return (
      <BackgroundView>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 2,
          }}>
          <View
            style={{
              backgroundColor: COLORS.gray,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}></View>
          <Text bold>CyberSoft</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 170,
            }}>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 100,
          }}>
          <Text>
            <Text title bold>
              250
            </Text>{' '}
            <Text style={{fontSize: 12, color: COLORS.gray}}>Games</Text>
          </Text>
          <Text>
            <Text title bold>
              4
            </Text>{' '}
            <Text style={{fontSize: 12, color: COLORS.gray}} subText>
              Purchases
            </Text>
          </Text>
        </View>
        <View style={{flex: 5, alignItems: 'center'}}>
          <Text subText title>
            Purchased Games
          </Text>
          <View>{this.renderGameItems(listGame)}</View>
        </View>
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => ({
  listGame: state.GameReducer.listGame,
});

export default connect(mapStateToProps)(ProfileScreen);
