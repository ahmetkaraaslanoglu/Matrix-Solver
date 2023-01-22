import { re } from 'mathjs';
import React, {useEffect, useState} from 'react';
import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';

const MultiplyScalar = ({navigation}) => {
    const [colNum,setColNum] = useState(2);
    const [rowNum,setRowNum] = useState(2);
    const [resultRowNum,setResultRowNum] = useState(2);
    const [matrixArr,setMatrixArr] = useState(createMatrix(colNum,rowNum));
    const [scalar,setScalar] = useState(1);
    const [solutionArr,setSolutionArr] = useState([]);

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

    useEffect(() => {
        const oldMatrix = [...matrixArr];
        setMatrixArr(createMatrix(colNum,rowNum,oldMatrix));
    },[rowNum,colNum])


    function multiplyScalar(matrix) {

        const result = [];
        for (let i = 0; i < matrix.length; i++) {
            const row = [];
            for (let j = 0; j < matrix[i].length; j++) {
                row.push(matrix[i][j] * scalar);
            }
            result.push(row);
        }
        console.log(result);
        setSolutionArr(result);
    }

    function addRow () {
        if (rowNum <=4 && resultRowNum <= 5){
            setRowNum((current) => current + 1);
        } else {
            Alert.alert("Matrisin Satır sayısı en fazla 5 olabilir")
        }
    }

    function deleteRow(){
        setRowNum((current) => current -1);
    }

    function addCol () {
        if (colNum <= 4){
            setColNum((current) => current + 1);
        }
        else {
            Alert.alert("Matrisin Sütun sayısı en fazla 5 olabilir")
        }

    }

    function deleteCol(){
        setColNum((current) => current -1);
    }


    return(
        <View style={{flex:1}}>

            <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <TouchableOpacity
                    style={{height:30,width:40,backgroundColor:'blue',justifyContent:'center',alignItems:'center',marginRight:50}}
                    onPress={() => {navigation.goBack();}}>
                    <Text style={{color:'white'}}>Geri</Text>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:24}}>Multiply By Scalar</Text>
            </View>

            {/*İnput Matrix*/}
            <View style={{flex:6,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                <View style={{marginRight:14}}>
                    {matrixArr.map((item,index) => {
                        return(
                            <View key={index} style={{flexDirection:'row'}}>
                                {item.map((innerItem,innerIndex) => {
                                    return(
                                        <TextInput style={{borderWidth:1,width:50,height:40}}
                                                   key={innerIndex}
                                                   keyboardType={'numeric'}
                                                   placeholder={"0"}
                                                   onChangeText={(text) => {
                                                       matrixArr[index][innerIndex] = text;
                                                   }}/>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>
            </View>

            {/*Hesapla Butonu ve Çarpılacak Değer İnputu*/}
            <View style={{flex:1,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{marginRight:10}}>
                    <TouchableOpacity
                        style={{height:45,width:100,backgroundColor:'black',borderRadius:20,justifyContent:'center',alignItems:'center'}}
                        onPress={() => {
                            multiplyScalar(matrixArr);
                        }}>
                        <Text style={{color:'white',fontSize:20}}>Hesapla</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginLeft:10}}>
                    <TextInput style={{borderWidth:1,width:50,height:40}}
                               placeholder={"1"}
                               value={scalar}
                               onChangeText={(text) => {
                                   setScalar(text);
                               }}/>
                </View>
            </View>



            {/*Output Matrix*/}
            <View style={{flex:6,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                {solutionArr.map((item,index) => {
                    return(
                        <View key={index} style={{flexDirection:'row'}}>
                            {item.map((innerItem,innerIndex) => {
                                return <Text key={innerIndex} style={{marginRight:10,fontSize:24}}>{innerItem}</Text>
                            })}
                        </View>
                    );
                })}
            </View>



            {/*Row Arttırma ve Azaltma */}
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
export default MultiplyScalar;
