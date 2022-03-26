import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  FlatList,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BackgroundView, Text} from '../../components';
import {COLORS} from '../../themes';
import {mapLocalhostToIp, sWidth} from '../../utils';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {requestGameDetail} from '../../redux/thunk/gameActionThunk';

class DetailScreen extends Component {
  renderRating = () => {
    const {
      game: {rating},
    } = this.props;
    const listStar = [];
    for (let index = 0; index < Math.floor(rating); index++) {
      listStar.push(
        <IonicIcon
          key={index}
          name="ios-star-sharp"
          size={20}
          color={COLORS.lightPurple}
        />,
      );
    }
    if (5 - rating > 0.5) {
      listStar.push(
        <IonicIcon
          key={6}
          name="ios-star-half-sharp"
          size={20}
          color={COLORS.lightPurple}
        />,
      );
    } else {
      listStar.push(
        <IonicIcon
          key={6}
          name="ios-star-sharp"
          size={20}
          color={COLORS.gray}
        />,
      );
    }
    listStar.push(<Text>{rating}</Text>);
    return listStar;
  };

  componentDidMount() {
    this.props.dispatch(requestGameDetail(this.props.route.params.id));
  }
  render() {
    const {
      game: {title, subTitle, icon, preview, age, description},
    } = this.props;
    const imageBackground = preview ? preview[0] : undefined;
    return (
      <BackgroundView edges={['bottom']}>
        <Image
          source={{uri: imageBackground}}
          style={{width: sWidth, height: 200}}
        />
        <BackgroundView style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backButton}>
            <AntIcon name="close" color={COLORS.white} size={30} />
          </TouchableOpacity>
        </BackgroundView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Image
              source={{uri: icon}}
              style={{width: 80, height: 80, borderRadius: 8}}
            />
          </View>
          <View style={{flex: 5}}>
            <Text title bold>
              {title}
            </Text>
            <Text subText>{subTitle}</Text>
          </View>
          <View style={{flex: 1}}>
            <IonicIcon name="cloud-download" size={30} color={COLORS.white} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {this.renderRating()}
          </View>
          <View>
            <Text>{age}</Text>
          </View>
          <View>
            <Text>Game of day</Text>
          </View>
        </View>
        <FlatList
          style={{flexGrow: 0, marginVertical: 20}}
          horizontal
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          snapToInterval={360}
          data={preview}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={{height: 200, width: 350, borderRadius: 8}}
            />
          )}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
        />
        <View style={{paddingHorizontal: 20}}>
          <Text subText>{description}</Text>
        </View>
      </BackgroundView>
    );
  }
}

const mapStateToProps = state => ({
  game: state.GameReducer.game,
});

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: COLORS.opacityBlack,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
