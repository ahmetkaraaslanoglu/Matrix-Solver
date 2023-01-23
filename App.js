import React from 'react';
import GaussJordanMethod from './src/GaussJordanMethod';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectionMethod from './src/SelectionMethod';
import MultiplyScalar from './src/MultiplyScalar';
import Determinant from './src/Determinant';
import MatrixPower from './src/MatrixPower';
import MatrixInverse from './src/MatrixInverse';
import MatrixRank from './src/MatrixRank';
import MatrixTrace from './src/MatrixTrace';
import MatrixTranspose from './src/MatrixTranspose';
import MatrixMultiplication from './src/MatrixMultiplication';
import AdjoinMatrix from './src/AdjoinMatrix';
import MatrixSubtraction from './src/MatrixSubtraction';
import MatrixAddition from './src/MatrixAddition';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={SelectionMethod} options={{headerShown:false}}/>
                <Stack.Screen name="GaussJordan" component={GaussJordanMethod} options={{headerShown:false}}/>
                <Stack.Screen name="MultiplyScalar" component={MultiplyScalar} options={{headerShown:false}}/>
                <Stack.Screen name="Determinant" component={Determinant} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixPower" component={MatrixPower} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixInverse" component={MatrixInverse} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixRank" component={MatrixRank} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixTrace" component={MatrixTrace} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixTranspose" component={MatrixTranspose} options={{headerShown:false}}/>
                <Stack.Screen name="AdjoinMatrix" component={AdjoinMatrix} options={{headerShown:false}}/>
                <Stack.Screen name="MatrixMultiplication" component={MatrixMultiplication} />
                <Stack.Screen name="MatrixSubtraction" component={MatrixSubtraction}/>
                <Stack.Screen name="MatrixAddition" component={MatrixAddition} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
