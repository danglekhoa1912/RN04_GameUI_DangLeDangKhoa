import {StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export class ViewIcon extends Component {
  render() {
    const {source} = this.props;

    return <Image source={{uri: source}} style={styles.icon} />;
  }
}

export default ViewIcon;

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
