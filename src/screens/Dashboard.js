import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Cog from '../../assets/icons/cog.svg';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerUserImage}
        source={require('../../assets/images/person_05.png')}
      />
      <Image source={require('../../assets/images/paypal.png')} />
      <Cog />
    </View>
  );
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 17.0,
  },
  header: {
    paddingLeft: 9.0,
    paddingRight: 4.0,
    marginBottom: 25.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerUserImage: {
    width: 36,
    height: 36,
    borderRadius: 100,
  },
});

export default Dashboard;
