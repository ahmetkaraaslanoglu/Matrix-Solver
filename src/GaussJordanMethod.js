import React, {useEffect, useState} from 'react';
import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as math from 'mathjs';
import SelectionButton from './helpers/SelectionButton';

const GaussJordanMethod = ({navigation}) => {
    const [colNum,setColNum] = useState(2);
    const [rowNum,setRowNum] = useState(2);
    const [resultRowNum,setResultRowNum] = useState(2);
    const [matrixArr,setMatrixArr] = useState(createMatrix(colNum,rowNum));
    const [resultMatrix,setResultMatrix] = useState(createResultMatrix(resultRowNum));
    const [solutions,setSolutions] = useState([]);


    // [ [0,0,0] , [0,0,0] , [0,0,0] ]

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

    function createResultMatrix(rowNum, oldMatrix = []){
        let result = oldMatrix;
        if(result.length < rowNum) {
            for(let i = result.length; i < rowNum; i++) {
                result.push(0);
            }
        } else if(result.length > rowNum) {
            result.splice(rowNum);
        }
        return result;
    }


    useEffect(() => {
        const oldMatrix = [...matrixArr];
        const oldResultMatrix = [...resultMatrix];
        setMatrixArr(createMatrix(colNum,rowNum,oldMatrix));
        setResultMatrix(createResultMatrix(resultRowNum,oldResultMatrix));
    }, [colNum,rowNum])

    function addRow () {
        if (rowNum <=4 && resultRowNum <= 5){
            setRowNum((current) => current + 1);
            setResultRowNum((current) => current +1);
        } else {
            Alert.alert("Matrisin Satır sayısı en fazla 5 olabilir")
        }
    }

    function deleteRow(){
        setRowNum((current) => current -1);
        setResultRowNum((current) => current -1);
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

    function CalculateElimination(matrixArr,resultMatrix){
        let eliminatedArray = [];
        eliminatedArray = matrixArr;

        let resMat = [];
        resMat = resultMatrix;

        const n = eliminatedArray.length;

        for (let i =0;i<n-1; i++){
            let pivot = eliminatedArray[i][i];
            for (let j = i+1; j < n; j++) {
                let divideValue = (-1 * eliminatedArray[j][i]) / pivot;
                for (let k = 0; k < colNum; k++){
                    eliminatedArray[j][k] = Number(eliminatedArray[i][k]) * divideValue + Number(eliminatedArray[j][k]);
                }
                resMat[j] = Number(resMat[i]) * divideValue + Number(resMat[j]);
            }
        }

        for (let i = n-1; i>=0; i--){
            let OppositePivot = eliminatedArray[i][i];
            for (let j = i-1; j >=0 ; j--){
                let OppDivideValue = (-1 * eliminatedArray[j][i]) / OppositePivot;
                for (let k = colNum-1; k >= 0; k-- ){
                    eliminatedArray[j][k] = Number(eliminatedArray[i][k]) * OppDivideValue + Number(eliminatedArray[j][k]);
                }
                resMat[j] = Number(resMat[i]) * OppDivideValue + Number(resMat[j]);
            }
        }

        let solutionArray = [];

        for (let i = 0; i<n; i++){
            let unknow = Number(resMat[i]) / Number(eliminatedArray[i][i]);
            solutionArray.push(unknow);
        }

        setSolutions(solutionArray);

        console.log("*********************************");
        console.log("Çözüm Kümesi = "+solutionArray);
        console.log("*********************************");


        for (let i = 0; i < eliminatedArray.length; i++) {
            let row = "";
            for (let j = 0; j < eliminatedArray[i].length; j++) {
                row += eliminatedArray[i][j] + ", ";
            }
            console.log(row);
        }

        console.log("---------------------------------------");

        for (let i = 0; i < resultMatrix.length;i++){
            console.log(  resultMatrix[i] + ", ");
        }
    }

    return (
        <View style={{flex:1,backgroundColor:'white'}}>

            {/*Header*/}
            <View style={{flex:1,backgroundColor:'black',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Button title="<" onPress={() => {navigation.goBack();}}/>
                <Text style={{fontSize:24,color:'white'}}>Gauss Jordan Elimination</Text>
            </View>

            {/*Content*/}
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

                <View style={{marginLeft:14}}>
                    {resultMatrix.map((item,index) => {
                        return (
                            <TextInput style={{borderWidth:1,width:50,height:40}}
                                       key={index}
                                       keyboardType={'numeric'}
                                       placeholder={"0"}
                                       onChangeText={(text) => {
                                           resultMatrix[index] = text;
                                       }}
                            />
                        )
                    })}

                </View>
            </View>
            <View style={{flex:6,backgroundColor:'white'}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        style={{height:45,width:100,backgroundColor:'black',borderRadius:20,justifyContent:'center',alignItems:'center'}}
                        onPress={() => {
                            CalculateElimination(matrixArr,resultMatrix);
                        }}>
                        <Text style={{color:'white',fontSize:20}}>Hesapla</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{fontSize:40}}>Çözüm Kümesi :</Text>
                    {solutions.map((data,index) => {
                        return(
                            <View key={index} >
                                <Text style={{fontSize:40}}>x{index+1} = {(data % 1 !== 0) ? data.toFixed(3) : data}</Text>
                            </View>
                        );
                    })}
                </View>


            </View>


            {/*Alt Butonlar*/}
            <View style={{flex:1.2,backgroundColor:'white',margin:10,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>

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
export default GaussJordanMethod;
