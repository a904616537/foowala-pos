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
  },

  btn{
    alignItems: 'center',
    height: 50,
    paddingVertical: 30,
    color: '#666',
    fontSize: 17
  },

  left_panel{
    width: 400
    position: 'absolute',
    top:70,
    left: 0,
    bottom: 0,
    padding: 15,
    backgroundColor: '#fff'
  },

  right_panel{
    position: 'absolute',
    overflow: 'hidden',
    right:0,
    top:70,
    bottom:0,
    left: 400,
    backgroundColor: '#f5f5f5'
  }
});

module.exports = styles;
