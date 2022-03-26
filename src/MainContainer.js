import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Beranda from './screens/Beranda';
import Pesanan from './screens/Pesanan';
import Pembatalan from './screens/Pembatalan';
import Lainnya from './screens/Lainnya';

//Screen names
const homeName = "Beranda";
const pesananName = "Pesanan";
const pembatalanName = "Pembatalan";
const lainnyaName = "Lainnya"

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            padding: 10,
            height: 70,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === pesananName) {
              iconName = focused ? 'book' : 'book-outline'
            } else if (rn === pembatalanName) {
              iconName = focused ? 'remove-circle' : 'remove-circle-outline'
            } else if (rn === lainnyaName) {
              iconName = focused ? 'menu' : 'menu-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}


        tabBarOptions={{
          activeTintColor: '#00579c',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 12 },

        }}>

        <Tab.Screen name={homeName} component={Beranda}

          options={{
            headerShown: false
          }} />
        <Tab.Screen name={pesananName} component={Pesanan}
          options={{
            headerTitle: 'Daftar Pemesanan',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#024d88',
            },
            headerTintColor: 'white'

          }} />
        <Tab.Screen name={pembatalanName} component={Pembatalan}
          options={{
            headerTitle: 'Daftar Pembatalan',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#024d88'
            },
            headerTintColor: 'white'
          }} />
        <Tab.Screen name={lainnyaName} component={Lainnya}
          options={{
            headerTitle: 'Lainnya',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#024d88'
            },
            headerTintColor: 'white'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;