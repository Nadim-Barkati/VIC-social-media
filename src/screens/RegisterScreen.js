import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const RegisterScreen = props =>{
  return (<View style={styles.ProfileScreen}>
    <Text>This is the RegisterScreen</Text>
  </View>)
}; 


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default RegisterScreen ;