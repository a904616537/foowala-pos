import React, {
  Component
} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ListView
} from 'react-native';

let data = ['分类一', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二', '分类二'];

class UpdateMenu extends Component {

	constructor(props) {
	    super(props);
	    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
	        loaded: false;
	    this.state = {
	      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
	    };
	}

	componentDidMount() {
		this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          loaded: true
        });
	  }

	render() {
		return (
			<View style={styles.menu}  alwaysBounceHorizontal={true}  >
				<ListView dataSource={this.state.dataSource} renderRow={this.menuNav} />
		        <Text style={styles.add_btn}>添加分类</Text>
	        </View>
		)
	}

	menuNav(lab) {
		return (
			<View style={styles.menu_nav}>
				<Text style={styles.menu_nav_lab}>{lab}
					<Text style={styles.menu_nav_img}>22</Text>
				</Text>
				
			</View>
			)
	}
}

const styles = StyleSheet.create({
	menu: {
		width: Dimensions.get('window').width * 0.3,
		height: Dimensions.get('window').height * 0.9,
		alignSelf: 'flex-start',
		borderColor: 'aliceblue',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderTopColor: '#f5f5f5',
		
	},
	menu_nav: {
		alignItems:'flex-start',
		backgroundColor: '#eee',
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		borderTopWidth: 1,
		borderTopColor: '#f5f5f5',
		borderStyle: 'solid',
		justifyContent: 'center',
		paddingVertical: 5
	},
	menu_nav_lab: {
		flex:1,
		paddingLeft: 10,
		fontSize: 10,
		color: '#666'
	},
	menu_nav_img: {
		alignSelf:'flex-end',
		borderLeftWidth: 1,
		borderStyle:'solid',
		borderColor: '#f5f5f5',
		width: 30,
		height: 30
	},
	add_btn: {
		textAlignVertical: 'center',
		textAlign:'center',
	    fontSize: 12,
	    color: '#999',
	    margin: 5,
	    borderWidth: 1,
	    borderStyle: 'dashed',
	    borderColor: '#aaa',
	    padding: 5
	},

});

module.exports = UpdateMenu;

