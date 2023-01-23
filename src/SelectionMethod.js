import React from 'react';
import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import SelectionButton from './helpers/SelectionButton';

const SelectionMethod = ({ navigation }) => {

    return(
        <View style={{flex:1}}>
            <StatusBar backgroundColor={"black"} />
            <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:24,color:'white'}}>Matrix Calculator</Text>
            </View>
            <View style={{flex:12,backgroundColor:'white',justifyContent:'center',alignItems:'center',padding:25}}>
                <ScrollView>

                    <TouchableOpacity onPress={() => {navigation.navigate("GaussJordan");}}>
                        <SelectionButton dataName={"Gauss Jordan Elimination"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate("Determinant")}} >
                        <SelectionButton dataName={"Determinant"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate("MultiplyScalar");}}>
                        <SelectionButton dataName={"MultiplyScalar"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate("MatrixPower")}}>
                        <SelectionButton dataName={"MatrixPower"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigation.navigate("MatrixInverse")}}>
                        <SelectionButton dataName={"MatrixInverse"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> [navigation.navigate("MatrixRank")]}>
                        <SelectionButton dataName={"MatrixRank"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> [navigation.navigate("MatrixTrace")]}>
                        <SelectionButton dataName={"MatrixTrace"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> [navigation.navigate("MatrixTranspose")]}>
                        <SelectionButton dataName={"MatrixTranspose"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> [navigation.navigate("AdjointMatrix")]}>
                        <SelectionButton dataName={"AdjointMatrix"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> [navigation.navigate("MatrixAddition")]}>
                        <SelectionButton dataName={"MatrixAddition"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> {navigation.navigate("MatrixMultiplication")}}>
                        <SelectionButton dataName={"MatrixMultiplication"}/>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}
export default SelectionMethod;
