import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import GaussJordanMethod from './src/GaussJordanMethod';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectionMethod from './src/SelectionMethod';
import MultiplyScalar from './src/MultiplyScalar';
import Determinant from './src/Determinant';
import MatrixPower from './src/MatrixPower';
import MatrixInverse from './src/MatrixInverse';
import MatrixRank from './src/MatrixRank';
import MatrixTrace from './src/MatrixTrace';
import MatrixTranspose from './src/MatrixTranspose';
import AdjointMatrix from './src/AdjointMatrix';
import MatrixAdditionA from './src/MatrixAdditionA';
import MatrixAdditionB from './src/MatrixAdditionB';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
export const MatrixContext = React.createContext();


function MatrixAddition ()  {
    const [colNum, setColNum] = useState(2);
    const [rowNum, setRowNum] = useState(2);

    return (
        <MatrixContext.Provider value={{colNum, setColNum, rowNum, setRowNum}}>
            <Tab.Navigator>
                <Tab.Screen name={"MatrixAdditionA"} component={MatrixAdditionA}  />
                <Tab.Screen name={"MatrixAdditionB"} component={MatrixAdditionB} />
            </Tab.Navigator>
        </MatrixContext.Provider>
    );
}

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
                <Stack.Screen name="AdjointMatrix" component={AdjointMatrix} options={{headerShown:false}}/>

                <Stack.Screen name="MatrixAddition"
                              component={MatrixAddition}
                              options={{
                                headerTitle:'Matrix Addition',
                                headerTitleAlign:'center',
                                headerTintColor:'white',
                                headerStyle:{
                                    backgroundColor:'black'
                                }
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
