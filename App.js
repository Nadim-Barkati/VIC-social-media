import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { Component } from 'react';
import io from 'socket.io-client';

export default class App extends Component{

  render(){
  return (
      <Navigator />
  );
}
}