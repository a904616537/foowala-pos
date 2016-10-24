'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

var styles    = require('../style/base'),
    home_img  = require('../public/img/home.png'),
    bones_img = require('../public/img/bones.png');



class Example extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    return (
      <ScrollableTabView
        tabBarPosition="bottom"
        scrollWithoutAnimation={true}>
      <Text tabLabel='Tab1'/>
      <Text tabLabel='Tab2'
        onChangeTab={(obj) => {
            console.log('index:' + obj.i);
          }
        }/>
      <Text tabLabel='Tab3'/>
      <Text tabLabel='Tab4'/>
      <Text tabLabel='Tab5'/>
      <Text tabLabel='Tab6'/>
    </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Example;
