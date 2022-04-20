import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import DataListItem from './DataListItem';

const DataList = ({ filters, navigation, newsType }: any) => {
  const [listData, setListData]: any = useState([]);

  const codeCharacters:any = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"]

  useEffect(() => {
    const interval = setInterval(() => {
      const data:any = [];

      for (let i = 0; i < 10; i++) {
        const randomNumber = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00)
        const randomInt = parseInt(randomNumber.toFixed(0))
        data.push(
          {
            code: codeCharacters[randomInt] + codeCharacters[randomInt + 1] + codeCharacters[randomInt + 2],
            number: randomNumber.toFixed(2)
          }
        )
      }
      setListData(data)
    }, 1000);
    return () => clearInterval(interval);
    
  }, []);

  const renderItem = ({ item }: any) => <DataListItem item={item} navigation={navigation} />

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, marginBottom: 45 }}>
      <FlatList data={listData} numColumns={2} renderItem={renderItem} keyExtractor={(item, index) => "_" + index.toString()} />
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
  footerLoader: {
    marginVertical: 16,
    alignItems: 'center'
  }
})

export default DataList;