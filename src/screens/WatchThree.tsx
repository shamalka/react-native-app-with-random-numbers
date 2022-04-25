import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DataList from '../components/DataList';

const WatchThree = ({ navigation }: any) => {

const [date, setDate] = useState(new Date())
const [open, setOpen] = useState(false)
const [openDropDown, setOpenDropDown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

const createAlert = () => {
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
        );
}

const openCalender = () => {
    setOpen(true)
}

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text style={styles.latestNewsText}>Watch 3</Text>
      {/* <DataList filters={{}} navigation={navigation} newsType={"headlines"}/> */}

      <View style={styles.button}>
        <Button onPress={createAlert} title="Alert"/>
      </View>
      <View style={styles.button}>
        <Button onPress={openCalender } title="Calender"/>
      </View>
      <View style={styles.button}>
        <Button onPress={openCalender } title="Calender"/>
      </View>
      <View style={styles.button}>
        <DropDownPicker
            open={openDropDown}
            value={value}
            items={items}
            setOpen={setOpenDropDown}
            setValue={setValue}
            setItems={setItems}
        />
      </View>
      <View style={styles.button}>
        <DropDownPicker
            open={openDropDown}
            value={value}
            items={items}
            setOpen={setOpenDropDown}
            setValue={setValue}
            setItems={setItems}
        />
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
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
  button : {
      margin: 10
  }
})

export default WatchThree;