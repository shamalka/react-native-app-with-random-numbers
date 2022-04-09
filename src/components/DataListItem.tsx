import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window');
EStyleSheet.build({$rem: width / 380});

const DataListItem = ({ item, navigation }: any) => {
    return (
        <View style={styles.newsListItem}>
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
                <Text>{item.code}</Text>
                <Text>{item.number}</Text>
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    newsListItem: {
        flex:1,
        height: "110rem",
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        elevation: 5,
        // flexDirection: 'row'
    },
    image: {
        width: "110rem",
        height: "110rem",
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10
        borderRadius: 10,
    },
    newsItemTitle: {
        color: 'black',
        fontSize: "17rem",
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    newsItemDescription: {
        color: 'gray',
        fontSize: "12rem",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    sourceChip: {
        backgroundColor: '#000',
        opacity: 0.2,
        borderRadius: 11,
    },
    sourceChipText: {
        color: 'black',
        fontSize: "11rem",
        margin: 6
    },
})

export default DataListItem;