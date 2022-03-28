import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {BackgroundView, Text, ViewIcon} from '../../components';
import {COLORS} from '../../themes';
import {requestListGame} from '../../redux/thunk/gameActionThunk';
import {connect} from 'react-redux';

class SteamScreen extends Component {
  componentDidMount() {
    this.props.dispatch(requestListGame());
  }

  renderListLive(item) {
    const {preview, title} = item;
    const backgroundImage = preview ? preview[0] : undefined;
    return (
      <View>
        <Image source={{uri: backgroundImage}} style={styles.image} />
        <View style={styles.containerTitle}>
          <Text
            bold
            style={[
              {
                backgroundColor: COLORS.lightPurple,
              },
              styles.title,
            ]}>
            {title}
          </Text>
          <Text
            bold
            style={[
              {
                backgroundColor: COLORS.lightRed,
                marginLeft: 5,
              },
              styles.title,
            ]}>
            Live
          </Text>
        </View>
      </View>
    );
  }
  render() {
    const listGame = this.props.listGame;

    return (
      <BackgroundView>
        <Text style={{marginLeft: 10}} header>
          Streaming
        </Text>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            placeholderTextColor={COLORS.opacityWhite}
          />
          <TouchableOpacity style={styles.iconSearch}>
            <AntIcon color={COLORS.opacityWhite} name="search1" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerListGame}>
          <Text subText>Populor Gamers</Text>
          <FlatList
            style={{flexGrow: 0, marginVertical: 15}}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 30}} />}
            data={listGame}
            renderItem={({item}) => {
              const {icon} = item;
              return <ViewIcon source={icon} />;
            }}
          />
        </View>
        <View style={styles.containerLive}>
          <View style={styles.titleLive}>
            <Text title bold>
              Live Games
            </Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.lightPurple}}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={{paddingBottom: 80}}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{height: 30}} />}
            data={listGame}
            renderItem={({item}) => this.renderListLive(item)}
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

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: COLORS.darkGray,
    borderRadius: 35,
    margin: 20,
  },
  input: {
    color: COLORS.white,
    paddingLeft: 30,
  },
  iconSearch: {
    position: 'absolute',
    right: 20,
    paddingVertical: 10,
  },
  containerListGame: {marginHorizontal: 20},
  containerLive: {marginHorizontal: 20},
  titleLive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  containerTitle: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 18,
  },
});
