import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
const Drawer = createDrawerNavigator();
import App1 from '../screens/CreateProduct';
import App2 from '../screens/CreateCategory';
import App3 from '../screens/CreateBrand';
import App4 from '../screens/CreateSize';
import App5 from '../screens/MyOrders';
import App6 from '../screens/Tracking';
import App7 from '../screens/Dashboard'

function MainNav() {
  return (
    <Drawer.Navigator initialRouteName="tab">
    <Drawer.Screen name="tab" component={TabNav} />
    <Drawer.Screen name="C_product" component={App1}/>
    <Drawer.Screen name="C_category" component={App2}/>
    <Drawer.Screen name="C_brand" component={App3}/>
    <Drawer.Screen name="C_size" component={App4}/>
    <Drawer.Screen name="C_myorders" component={App5}/>
    <Drawer.Screen name="C_tracking" component={App6}/>
    <Drawer.Screen name="C_dashboard" component={App7}/>
   

  </Drawer.Navigator>
  );
}

export default MainNav;
