import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Akun, Home, Pencarian, Laporan, Splash, Login, GantiPassword, DetailPelanggaran, Info} from '../pages';
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainApp = () => {
    return (
    <Tab.Navigator initialRouteName = "Home" activeColor="#153243" barStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => ( 
        <Icon name="home" color={color} size={20} /> ),}}/>
      <Tab.Screen name="Pencarian" component={Pencarian} options={{ tabBarLabel: 'Pencarian', tabBarIcon: ({ color }) => (
        <Icon name="search" color={color} size={20} /> ),}}/>
      <Tab.Screen name="Laporan" component={Laporan} options={{ tabBarLabel: 'Laporan', tabBarIcon: ({ color }) => (
        <Icon name="bookmark" color={color} size={20} /> ),}}/>
        <Tab.Screen name="Akun" component={Akun} options={{ tabBarLabel: 'Profil', tabBarIcon: ({ color }) => (
        <Icon name="person" color={color} size={20} /> ),}}/>
    </Tab.Navigator>
    )
}

const Router = () => {
    return (
    <Stack.Navigator initialRouteName = "Splash">
        <Stack.Screen name="Splash" component={Splash} options = {{headerShown : false}}/>
        <Stack.Screen name="Login" component={Login} options = {{headerShown : false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options = {{headerShown : false}}/>
        <Stack.Screen name="GantiPassword" component={GantiPassword} options = {{headerShown : false}}/>
        <Stack.Screen name="DetailPelanggaran" component={DetailPelanggaran} options = {{headerShown : false}}/>
        <Stack.Screen name="Info" component={Info} options = {{headerShown : false}}/>
    </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    
})
