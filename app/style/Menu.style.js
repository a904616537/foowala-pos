import {
  StyleSheet
} from 'react-native';
/*菜单管理*/
const styles = StyleSheet.create({
	setmenunav:{
		padding: 0
	},
	menu_nav{
		color: '#333',
		fontSize: 17,
		height: 60,
		backgroundColor: '#eee',
		borderColor: '#ddd',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderTopColor: '#f5f5f5',
		borderTopWidth: 1,
		paddingVertical: 15
	},

	menu_span{
		justifyContent: 'flex-start',
		borderStyle: 'solid',
		borderLeftColor:'#ddd',
		borderLeftWidth: 1,
		paddingLeft: 30
		paddingRight: 15
	},

	add_btn{
		textAlign: 'center',
		fontSize: 24,
		color: '#999'
		margin: 30,
		borderStyle: 'dashed',
		borderWidth: 1,
		borderColor: 'aaa',
		padding: 15
	},

	add_i{
		fontSize: 24
		color: '#ccc'
	},

	setmenu{
		padding: 20
	},

	setmenu_item{
		justifyContent: 'flex-start',
		padding: 10
	},

	setmenu_inner{
		backgroundColor: '#fff'
		paddingVertical: 10,
		paddingHorizontal: 15,
		overflow: 'hidden',
		borderRadius: 3,
		textShadowOffset: {width: 5, height: 5},
		textshadowColor: '#eee',
		textShadowRadius: 5
	},

	setmenu_info{
		justifyContent: 'flex-start',
		width: 80，
		lineHeight: 24
	},

	setmenu_name{
		fontSize: 15
	},

	setmenu_price{
		color: '#f5525a'
	},

	setmenu_more{
		float: 'left',
		width: 20,
		borderLeftWidth: 1,
		borderStyle:'solid',
		borderColor:'#eee',
		textAlign: 'center',
		color: '#999',
		lineHeight: 48
	}
});

module.exports = styles;
