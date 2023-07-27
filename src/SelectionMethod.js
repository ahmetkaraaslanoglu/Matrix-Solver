import React from 'react';
import {StatusBar, View} from 'react-native';
import SelectionButton from './components/SelectionButton';

const SelectionMethod = ({ navigation }) => {

    const methodNames = [
        "GaussJordan",
        "Determinant",
        "MultiplyScalar",
        "MatrixPower",
        "MatrixInverse",
        "MatrixRank",
        "MatrixTrace",
        "MatrixTranspose",
        "AdjoinMatrix",
        "MatrixAddition",
        "MatrixMultiplication",
        "MatrixSubtraction",
    ];

    return (
        <View style={{backgroundColor:'gray', flex:1,justifyContent:'center',alignItems:'center',marginBottom:10}} >

            <StatusBar barStyle="light-content" backgroundColor="black"/>

            {methodNames.map((name) => {
                return (
                    <SelectionButton
                        key={name}
                        name={name}
                        goToSolver={() => {navigation.navigate(name);}}
                    />
                );
            })}
        </View>
    );
}
export default SelectionMethod;
