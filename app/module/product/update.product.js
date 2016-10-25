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

import editor_img from '../../public/img/edit_24.png';

let data = [{name: '北京', price: 19.8}, {name: '北京烤肥肠', price: 19.8},{name: '北京烤ssssssssssssssssssssssssss肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8}, {name: '北京烤肥肠', price: 19.8},{name: '北京烤肥肠', price: 19.8},{name: '北京烤肥肠', price: 19.8}];
	

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
			<View style={styles.man}  alwaysBounceHorizontal={true} >
				<ListView dataSource={this.state.dataSource} renderRow={this.productNav} contentContainerStyle={styles.man_list}  initialListSize={4} pageSize={3} horizontal={true}/>
		        <Text style={styles.man_add_btn}>添加商品</Text>
	        </View>
		)
	}

	productNav(product) {
		return (
			<View style={styles.man_product}>
				<View style={styles.man_info}>
					<Text allowFontScaling={true} numberOfLines={1} style={styles.man_info_name}>{product.name}</Text>
					<Text allowFontScaling={true} numberOfLines={1} style={styles.man_info_price}>￥ {product.price}</Text>
				</View>
				<Image source={editor_img} style={styles.man_update} />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	man: {
		height: Dimensions.get('window').height * 0.9,
		alignSelf: 'flex-start',
		flex:1,
		paddingTop: 20,
		paddingVertical: 5,
		backgroundColor: '#f5f5f5',
	},
	man_list: {
		width: Dimensions.get('window').width * 0.7,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1
	},
	man_product: {
		flexDirection:'row',
		alignItems: 'center',
		margin: 5,
		width: 70,
		height: 30,
		backgroundColor: '#fff',
		
	},
	man_info: {
		width: 50,
		padding: 5,
		borderRightWidth: 1,
		borderColor: '#f5f5f5',
		borderStyle: 'solid'
	},
	man_info_name: {
		fontSize: 6,
		lineHeight: 8,

	},
	man_info_price: {
		fontSize: 4,
		color: '#f5525a',
		
	},
	man_update: {
		width: 10,
    	height:10,
    	marginVertical: 5,
    	margin: 5
	},
	man_add_btn: {
		margin: 8,
		height: 30,
		fontSize: 12,
	    color: '#999',
		borderStyle: 'dashed',
		borderColor: '#aaa',
		borderWidth: 1,
		lineHeight: 30,
		textAlign:'center'
	}
});

module.exports = UpdateMenu;

