import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import DataListItem from './DataListItem';

const DataList = ({ filters, navigation, newsType }: any) => {
  const [listData, setListData]: any = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const data:any = [
        {
          code: "AAA",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "BBB",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "CCC",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "DDD",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "EEE",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "FFF",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "GGG",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "HHH",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "III",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        },
        {
          code: "JJJ",
          number: (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        }
      ]
      setListData(data)
    }, 200);
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