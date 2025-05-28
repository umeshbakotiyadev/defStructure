import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from '../utils';
import { MapWithClusteringScr } from '../screens';

const AppRoute = () => {

    /** SHOW/HIDE SPLACE SCREEN */
    const [isSp, setIsSp] = useState<boolean>(true);

    return <NavigationContainer>
        <AppStack.Navigator screenOptions={{
            headerShown: false
        }} >
            <AppStack.Screen name='MapWithClusteringScr' component={MapWithClusteringScr} />
        </AppStack.Navigator>
    </NavigationContainer>
}

export default AppRoute