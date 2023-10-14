import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/SignIn";
import ChatRoom  from "../screens/ChatRoom"

const AppStack  = createNativeStackNavigator();


export default function AppRoutes() {
    return(
        <AppStack.Navigator initialRouteName="ChatRoom">
            <AppStack.Screen 
            name="SigIn"
            component={SignIn}
            options={{
                title: "Faca login"
            }}
            />

            <AppStack.Screen 
            name="ChatRoom"
            component={ChatRoom}
            options={{
                headerShown: false,
            }}
            />
        </AppStack.Navigator>
    )
}