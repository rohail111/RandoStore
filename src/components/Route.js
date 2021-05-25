import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home'
import AllItemsScreen from '../screens/AllItems'
import AddItemScreen from '../screens/AddItem'
import CheckoutScreen from '../screens/Checkout'
import ThankyouScreen from '../screens/Thankyou'

const Stack = createStackNavigator();

export default class Route extends React.Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AllItems" component={AllItemsScreen} />
                <Stack.Screen name="AddItem" component={AddItemScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
                <Stack.Screen name="Thankyou" component={ThankyouScreen} />
            </Stack.Navigator>
        )
    }
}