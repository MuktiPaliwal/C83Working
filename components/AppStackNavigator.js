import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen'

export const AppStackNavigator = createStackNavigator({
    DonationScreen: {
        screen: BookDonateScreen,
        navigationOptions: {headerShown: false}
    },
    ReceiverDetailsScreen: {
        screen: ReceiverDetailsScreen,
        navigationOptions: {headerShown: false}
    }},
    {initialRouteName: 'DonationScreen'}
)