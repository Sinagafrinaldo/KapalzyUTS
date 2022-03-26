import React, { useState } from 'react';
import { View, Text, Button, ScrollView, Alert, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Beranda1 from './Beranda1';
import Beranda2 from './Beranda2';
import Beranda3 from './Beranda3';
const Stack = createStackNavigator();
import styles from './style';



function Beranda() {
    return (

        <Stack.Navigator initialRouteName="Beranda1">
            <Stack.Screen options={{ headerShown: false }} name="Beranda1" component={Beranda1} />
            <Stack.Screen options={{ headerShown: false }} name="Beranda2" component={Beranda2} />
            <Stack.Screen options={{ headerShown: false }} name="Beranda3" component={Beranda3} />
        </Stack.Navigator>

    );
}

export default Beranda