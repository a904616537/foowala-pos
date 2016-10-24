'use strict';


import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

var home_img = require('../public/img/home.png'),
  bones_img = require('../public/img/bones.png');



class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  }

  _renderContent(color: string, pageText: string, num ? : number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>0 re-renders of the {pageText}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1,width:500}}>
        <Text style={styles.welcome}>
          TabBarIOS使用实例
        </Text>
        <TabBarIOS
        style={{flex:1,alignItems:"flex-end"}}
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="自定义"
          icon={home_img}
          selected={this.state.selectedTab === '自定义'}
          onPress={() => {
            this.setState({
              selectedTab: '自定义',
            });
          }}
          >
          {this._renderContent('#414A8C', '自定义界面')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === '历史'}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          onPress={() => {
            this.setState({
              selectedTab: '历史',
              notifCount: this.state.notifCount + 1,
            });
          }}
          >
          {this._renderContent('#783E33', '历史记录', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
           systemIcon="downloads"
           selected={this.state.selectedTab === '下载'}
            onPress={() => {
            this.setState({
              selectedTab: '下载',
              presses: this.state.presses + 1
            });
          }}>
           {this._renderContent('#21551C', '下载页面', this.state.presses)}
        </TabBarIOS.Item>

      </TabBarIOS>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBarExample;