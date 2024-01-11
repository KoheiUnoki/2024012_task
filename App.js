
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import NewsScreen from './screens/NewsScreen';
import DetailScreen from './screens/DetailScreen';
import WeatherScreen from "./screens/WeatherScreen"
import familyScreen from "./screens/familyScreen"
 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack =()=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="🦍Gorilla News🦍" component={NewsScreen} />
    <Stack.Screen name="Gorilla's Eye👀" component={DetailScreen} />
  </Stack.Navigator>
  )
}

const WeatherStack =()=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="🦍Gorilla Weather🦍" component={WeatherScreen} />
  </Stack.Navigator>
  );
};

const FamilyStack =()=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="🦍Gorilla Family🦍" component={familyScreen} />
  </Stack.Navigator>
  );
};

const screenOption = ({route}) =>({
  tabBarIcon:({color,size}) =>{
    let iconName;

    if (route.name === "🦍News🦍"){
      iconName = "newspaper-o";
    }else if(route.name === "🦍Weather🦍"){
      iconName = "sun-o";
    }else if(route.name === "🦍鵜木家News🦍"){
      iconName = "group";
    }
    return <FontAwesome name = {iconName} size = {size} color={color}/>;
  },
});



export default App = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator screenOptions ={screenOption}>
        <Tab.Screen name="🦍News🦍" component={NewsStack} />
        <Tab.Screen name="🦍Weather🦍" component={WeatherStack} />
        <Tab.Screen name="🦍鵜木家News🦍" component={FamilyStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};