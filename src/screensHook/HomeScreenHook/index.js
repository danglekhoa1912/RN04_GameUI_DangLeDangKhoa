import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {BackgroundView, Text, Header} from '../../components';
import GameItem from './components/GameItem';
import {useDispatch, useSelector} from 'react-redux';
import {requestListGame} from '../../redux/thunk/gameActionThunk';

const HomeScreenHook = () => {
  const LeftComponent = (
    <View>
      <Text header style={styles.headerText}>
        Hello <Text bold>CyberSoft,</Text>
      </Text>
      <Text>Best games for today</Text>
    </View>
  );

  const listGame = useSelector(state => state.GameReducer.listGame);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestListGame());
  }, []);
  return (
    <BackgroundView>
      <Header
        LeftComponent={LeftComponent}
        RightComponent={<View style={styles.avatar} />}
      />
      <FlatList
        data={listGame}
        renderItem={({item}) => <GameItem game={item} />}
        ItemSeparatorComponent={() => <View style={{height: 60}} />}
        contentContainerStyle={{paddingBottom: 60}}
        showsVerticalScrollIndicator={false}
      />
    </BackgroundView>
  );
};

export default HomeScreenHook;

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
