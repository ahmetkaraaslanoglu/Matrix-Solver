import React, {useContext, useEffect, useState} from 'react';
import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {MatrixContext} from '../App'


const MatrixAdditionA = ({navigation,route}) => {
    const {colNum, setColNum, rowNum, setRowNum} = useContext(MatrixContext);
    const [matrixA,setMatrixA] = useState(createMatrix(colNum,rowNum));
    const [resultMatrix,setResultMatrix] = useState([]);

    useEffect(() => {
        if (route.params) {
            setResultMatrix(route.params.matrix);
        }
    }, [route.params]);


    function createMatrix(numColumns, numRows, oldMatrix) {
        const matrix = [];
        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j < numColumns; j++) {
                if (oldMatrix && oldMatrix[i] && oldMatrix[i][j]) {
                    row.push(oldMatrix[i][j]);
                } else {
                    row.push(0);
                }
            }
            matrix.push(row);
        }
        return matrix;
    }

    function addRow () {
        if (rowNum <=5){
            setRowNum((current) => current + 1);
        } else {
            Alert.alert("Matrisin Satır sayısı en fazla 5 olabilir")
        }
    }

    function deleteRow(){
        setRowNum((current) => current -1);
    }

    function addCol () {
        if (colNum <= 5){
            setColNum((current) => current + 1);
        }
        else {
            Alert.alert("Matrisin Sütun sayısı en fazla 5 olabilir")
        }
    }


    function deleteCol(){
        setColNum((current) => current -1);
    }

    useEffect(() => {
        const oldMatrix = [...matrixA];
        setMatrixA(createMatrix(colNum,rowNum,oldMatrix));
    },[rowNum,colNum])

    return (
        <View style={{flex:1}}>
            <View style={{flex:6,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{marginRight:14}}>
                    {matrixA.map((item,index) => {
                        return(
                            <View key={index} style={{flexDirection:'row'}}>
                                {item.map((innerItem,innerIndex) => {
                                    return(
                                        <TextInput style={{borderWidth:1,width:50,height:40}}
                                                   key={innerIndex}
                                                   keyboardType={'numeric'}
                                                   placeholder={"0"}
                                                   onChangeText={(text) => {
                                                       matrixA[index][innerIndex] = text;
                                                   }}/>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>
                <Button title={"bas"} onPress={() => {
                    navigation.navigate("MatrixAdditionB", { matrix: matrixA });
                }}/>
            </View>

            {/*Output Matrix*/}
            <View style={{flex:6,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                {resultMatrix.map((item,index) => {
                    return(
                        <View key={index} style={{flexDirection:'row'}}>
                            {item.map((innerItem,innerIndex) => {
                                return <Text key={innerIndex} style={{marginRight:10,fontSize:24}}>{innerItem}</Text>
                            })}
                        </View>
                    );
                })}
            </View>


            <View style={{flex:1,backgroundColor:'white',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',margin:8,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:4}}
                        onPress={() => {
                            addRow();
                        }}>
                        <Text style={{color:'white'}}> Row +</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:32}}>{rowNum}</Text>

                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginLeft:4}}
                        onPress={() => {
                            deleteRow();
                        }}>
                        <Text style={{color:'white'}}> Row -</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{}}>{rowNum}x{colNum}</Text>
                </View>

                <View style={{flexDirection:'row',margin:8,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:4}}
                        onPress={() => {
                            addCol();
                        }}>
                        <Text style={{color:'white'}}> Col +</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:32}}>{colNum}</Text>

                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginLeft:4}}
                        onPress={() => {
                            deleteCol();
                        }}>
                        <Text style={{color:'white'}}> Col -</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
export default MatrixAdditionA;
