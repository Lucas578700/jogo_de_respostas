import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp';
import SplashScreen from '../pages/SplashScreen';

import Home from '../pages/Home';
import Pontuacao from '../pages/Ranking';
const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen
                name="Pontuacao"
                component={Pontuacao}
                options={{
                    headerShown: false,
                }}
            />

        </AuthStack.Navigator>
    )
}

export default AuthRoutes;