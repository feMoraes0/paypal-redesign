import React from 'react';
import {View, StyleSheet} from 'react-native';
import CreditCard from './CreditCard';
import Header from './Header';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CreditCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 17.0,
  },
});

export default Dashboard;
