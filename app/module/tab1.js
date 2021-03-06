'use strict';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Tabs from 'react-native-tabs';

var styles = require('../style/base'),
  home_img = require('../public/img/home.png'),
  bones_img = require('../public/img/bones.png');



class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'second'
    };
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
         onSelect={el=>this.setState({page:el.props.name})}>
            <Image name="dfd" source={home_img} />
            <Image name="fuck" source={bones_img} selectedIcon={home_img} />
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
        </Tabs>
          <Text style={styles.welcome}>
              Welcome to React Native
          </Text>

          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
      </View>
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