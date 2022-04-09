import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataList from '../components/DataList';

const WatchOne = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text style={styles.latestNewsText}>Watch 1</Text>
      <DataList filters={{}} navigation={navigation} newsType={"headlines"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  latestNewsText: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
})

export default WatchOne;