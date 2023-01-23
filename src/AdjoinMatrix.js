import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

const AdjoinMatrix = ({navigation}) => {
    const [colNum,setColNum] = useState(2);
    const [rowNum,setRowNum] = useState(2);
    const [matrixArr,setMatrixArr] = useState(createMatrix(colNum,rowNum));
    const [solutionMatrix,setSolutionMatrix] = useState([]);

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

    function determinant(matrix) {
        if (matrix.length === 1) {
            return matrix[0][0];
        }
        if (matrix.length === 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        }
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            const subMatrix = [];
            for (let j = 1; j < matrix.length; j++) {
                const row = [];
                for (let k = 0; k < matrix.length; k++) {
                    if (k !== i) {
                        row.push(matrix[j][k]);
                    }
                }
                subMatrix.push(row);
            }
            sum += matrix[0][i] * determinant(subMatrix) * (i % 2 === 0 ? 1 : -1);
        }
        return sum;
    }

    function cofactorMatrix(matrix) {
        const cofactorMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            const row = [];
            for (let j = 0; j < matrix.length; j++) {
                const minor = minorMatrix(matrix, i, j);
                const cofactor = Math.pow(-1, i + j) * determinant(minor);
                row.push(cofactor);
            }
            cofactorMatrix.push(row);
        }
        return cofactorMatrix;
    }


    function minorMatrix(matrix, row, col) {
        const minor = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i !== row) {
                const row = [];
                for (let j = 0; j < matrix.length; j++) {
                    if (j !== col) {
                        row.push(matrix[i][j]);
                    }
                }
                minor.push(row);
            }
        }
        return minor;
    }

    function matrixTranspose(matrix){
        const transposeMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            const row = [];
            for (let j = 0; j < matrix.length; j++) {
                row.push(matrix[j][i]);
            }
            transposeMatrix.push(row);
        }
        return transposeMatrix;
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
        const oldMatrix = [...matrixArr];
        setMatrixArr(createMatrix(colNum,rowNum,oldMatrix));
    },[rowNum,colNum])


    return(
        <View style={{flex:1}}>

            {/*Header*/}
            <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <TouchableOpacity
                    style={{height:30,width:40,backgroundColor:'blue',justifyContent:'center',alignItems:'center',marginRight:50}}
                    onPress={() => {navigation.goBack();}}>
                    <Text style={{color:'white'}}>Geri</Text>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:24}}>Adjoint Matrix</Text>
            </View>

            {/*İnput Matrix*/}
            <View style={{flex:6,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
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

            {/*Button*/}
            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{height:50,width:300,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:40}}
                                  onPress={() => {
                                      setSolutionMatrix(matrixTranspose(cofactorMatrix(matrixArr)));
                                  }}>
                    <Text style={{fontSize:20,color:'white'}}>Ek Matrisi Hesapla</Text>
                </TouchableOpacity>

            </View>

            {/*Output Matrix*/}
            <View style={{flex:6,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                {solutionMatrix.map((item,index) => {
                    return(
                        <View key={index} style={{flexDirection:'row'}}>
                            {item.map((innerItem,innerIndex) => {
                                return <Text key={innerIndex} style={{marginRight:10,fontSize:24}}>{innerItem}</Text>
                            })}
                        </View>
                    );
                })}
            </View>

            {/*Row Col */}
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
export default AdjoinMatrix;
