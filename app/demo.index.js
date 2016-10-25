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

import UpdateMenu from './module/menu/update.menu';
import UpdateProduct from './module/product/update.product';

class DemoView extends Component {
	render() {
		return (
			<View style={{flexDirection:'row'}}>
				<UpdateMenu></UpdateMenu>
				<UpdateProduct></UpdateProduct>
			</View>
		)
	}
}

module.exports = DemoView;