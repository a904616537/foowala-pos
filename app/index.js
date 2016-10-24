import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView
} from 'react-native';

var haha      = require('./public/img/bgm.jpg'),
    styles    = require('./style/base'),
    TabBarIOS = require('./module/tab1');

var REQUEST_URL = 'http://127.0.0.1:9023/';

class IndexView extends Component {
constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        loaded: false;
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <View style={styles.container}>
          <Image source={haha} style={styles.instructions} />
          <TabBarIOS></TabBarIOS>
        </View>
      
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.msg}</Text>
        </View>
      </View>
    );
  }
}


module.exports = IndexView;