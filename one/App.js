import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}



export default function App() {
  const [value, onChangeText] = React.useState('Enter Email ID');
const [value2, onChangeText2] = React.useState('Enter the file name');
  return (
    <SafeAreaView style={styles.container}>


      <TextInput
       style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
       onChangeText={text => onChangeText(text)}
       value={value}
     />
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText2(text)}
      value={value2}
    />
      <Separator />
      <View>

        <Button
          title="Upload File"
          color="#f194ff"
          onPress={() => Alert.alert('Uploading your file')}
        />
      </View>
      <Separator />
      <View>

        <Button
          title="Download File"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Separator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
