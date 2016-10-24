import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    justifyContent : 'center',
    alignItems     : 'center',
    backgroundColor: '#ddd'
  },
  welcome: {
    fontSize : 20,
    textAlign: 'center',
    margin   : 10
  },
  instructions: {
    width: 200,
    height:200
  },
  tabContent: {
    flex      : 1,
    alignItems: 'center',
  },
  tabText: {
    color : 'white',
    margin: 50,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});

module.exports = styles;
