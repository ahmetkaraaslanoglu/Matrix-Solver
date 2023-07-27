import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectionMethod from './src/SelectionMethod';
import JustMatrix from './src/functions/JustMatrix';
import MatrixAndSolution from './src/functions/MatrixAndSolution';
import MatrixAndSquare from './src/functions/MatrixAndSquare';
import DoubleMatrix from './src/functions/DoubleMatrix';
const Stack = createNativeStackNavigator();
const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen"
                              component={SelectionMethod}
                              options={{
                                  headerTitleAlign:'center',
                                  title:'Matrix Solver',
                                  headerTitleStyle:{
                                      color:'white',
                                      fontSize:25,
                                      fontWeight:'bold',
                                  },
                                  headerStyle:{
                                      backgroundColor:'black',
                                  },
                              }}
                />
                <Stack.Screen name="MatrixTranspose" component={JustMatrix}/>
                <Stack.Screen name="Determinant" component={JustMatrix}/>
                <Stack.Screen name="MatrixInverse" component={JustMatrix}/>
                <Stack.Screen name="MatrixRank" component={JustMatrix}/>
                <Stack.Screen name="MatrixTrace" component={JustMatrix}/>
                <Stack.Screen name="AdjoinMatrix" component={JustMatrix}/>
                <Stack.Screen name="MultiplyScalar" component={MatrixAndSquare}/>
                <Stack.Screen name="MatrixPower" component={MatrixAndSquare}/>
                <Stack.Screen name="GaussJordan" component={MatrixAndSolution}/>
                <Stack.Screen name="MatrixMultiplication" component={DoubleMatrix}/>
                <Stack.Screen name="MatrixSubtraction" component={DoubleMatrix}/>
                <Stack.Screen name="MatrixAddition" component={DoubleMatrix}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default App;
