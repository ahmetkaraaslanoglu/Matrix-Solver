import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

const MatrixSubtraction = () => {
    const [colNumA,setColNumA] = useState(2);
    const [rowNumA,setRowNumA] = useState(2);
    const [colNumB,setColNumB] = useState(2);
    const [rowNumB,setRowNumB] = useState(2);
    const [matrixA,setMatrixA] = useState(createMatrixA(colNumA,rowNumA));
    const [matrixB,setMatrixB] = useState(createMatrixB(colNumB,rowNumB));
    // if true -> matrixA false -> matrixB
    const [whichMatrix,setWhichMatrix] = useState(true);
    const [solutionMatrix,setSolutionMatrix] = useState([]);

    function matrixSub() {
        const solution = [];
        for (let i = 0; i < matrixA.length; i++) {
            const row = [];
            for (let j = 0; j < matrixA[i].length; j++) {
                row.push(Number(matrixA[i][j]) - Number(matrixB[i][j]));
            }
            solution.push(row);
        }
        return solution;
    }


    function createMatrixA(numColumns, numRows, oldMatrix) {
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

    function createMatrixB(numColumns, numRows, oldMatrix) {
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

    function addRowA () {
        if (rowNumA <=5){
            setRowNumA((current) => current + 1);
        } else {
            Alert.alert("Matrisin Satır sayısı en fazla 6 olabilir")
        }
    }

    function addRowB () {
        if (rowNumB <=5 ){
            setRowNumB((current) => current + 1);
        } else {
            Alert.alert("Matrisin Satır sayısı en fazla 6 olabilir")
        }
    }

    function deleteRowA(){
        setRowNumA((current) => current -1);
    }

    function deleteRowB(){
        setRowNumB((current) => current -1);
    }

    function addColA () {
        if (colNumA <= 5){
            setColNumA((current) => current + 1);
        }
        else {
            Alert.alert("Matrisin Sütun sayısı en fazla 6 olabilir")
        }
    }

    function addColB () {
        if (colNumB <= 5){
            setColNumB((current) => current + 1);
        }
        else {
            Alert.alert("Matrisin Sütun sayısı en fazla 6 olabilir")
        }
    }

    function deleteColA(){
        setColNumA((current) => current -1);
    }

    function deleteColB(){
        setColNumB((current) => current -1);
    }

    useEffect(() => {
        const oldMatrixA = [...matrixA];
        setMatrixA(createMatrixA(colNumA,rowNumA,oldMatrixA));
    },[rowNumA,colNumA]);

    useEffect(() => {
        const oldMatrixB = [...matrixB];
        setMatrixB(createMatrixB(colNumB,rowNumB,oldMatrixB));
    },[rowNumB,colNumB])

    return(
        <View style={{flex:1}}>

            <View style={{flex:0.8,backgroundColor:'white',flexDirection:'row'}}>
                <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}
                                  onPress={()=> {
                                      setWhichMatrix(true)
                                  }}>
                    <Text style={{fontSize:26,color:'white'}}>MatrixA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}
                                  onPress={() => {
                                      setWhichMatrix(false)
                                  }}>
                    <Text style={{fontSize:26,color:'white'}}>MatrixB</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:5,backgroundColor:'gray'}}>
                {whichMatrix ? (
                    // matrixA Seçilmiş ise gösterilecek matrix
                    <View style={{flex:6,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={{marginRight:14}}>
                            <Text>matrixA</Text>
                            {matrixA.map((item,index) => {
                                return(
                                    <View key={index} style={{flexDirection:'row'}}>
                                        {item.map((innerItem,innerIndex) => {
                                            return(
                                                <TextInput style={{borderWidth:1,width:50,height:40}}
                                                           key={innerIndex}
                                                           keyboardType={'numeric'}
                                                           placeholder={"0"}
                                                           onChangeText={(val) => {
                                                               const newMatrixA = [...matrixA];
                                                               newMatrixA[index][innerIndex] = val;
                                                               setMatrixA([...newMatrixA]);
                                                           }}
                                                    // value={`${innerItem}`}
                                                           value={innerItem}
                                                />
                                            );
                                        })}
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                ):(
                    // matrixB Seçilmiş ise gösterilecek matrix
                    <View style={{flex:6,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={{marginRight:14}}>
                            <Text>matrixB</Text>
                            {matrixB.map((item,index) => {
                                return(
                                    <View key={index} style={{flexDirection:'row'}}>
                                        {item.map((innerItem,innerIndex) => {
                                            return(
                                                <TextInput style={{borderWidth:1,width:50,height:40}}
                                                           key={innerIndex}
                                                           keyboardType={'numeric'}
                                                           placeholder={"0"}
                                                           onChangeText={(val) => {
                                                               const newMatrixB = [...matrixB];
                                                               newMatrixB[index][innerIndex] = val;
                                                               setMatrixB([...newMatrixB]);
                                                           }}
                                                    // value={`${innerItem}`}
                                                           value={innerItem}


                                                />
                                            );
                                        })}
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                )}
            </View>

            {/*Output Matrix and Button */}
            <View style={{flex:6,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                {whichMatrix ? (
                    <>
                        {solutionMatrix.map((item,index) => {
                            return(
                                <View key={index} style={{flexDirection:'row'}}>
                                    {item.map((innerItem,innerIndex) => {
                                        return <Text key={innerIndex} style={{marginRight:10,fontSize:24}}>{innerItem}</Text>
                                    })}
                                </View>
                            );
                        })}
                    </>

                ):(
                    <TouchableOpacity style={{height:50,width:300,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:40}}
                                      onPress={() => {
                                          setSolutionMatrix(matrixSub());
                                          setTimeout(() => {
                                              setWhichMatrix(true);
                                          },100);
                                      }}>
                        <Text style={{fontSize:20,color:'white'}}>Hesapla</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/*  Row Col Counter  */}
            <View style={{flex:1,backgroundColor:'white',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',margin:8,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:4}}
                        onPress={() => {
                            addRowA();
                            addRowB()
                        }}>
                        <Text style={{color:'white'}}> Row +</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:32}}>{rowNumA}</Text>

                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginLeft:4}}
                        onPress={() => {
                            deleteRowA();
                            deleteRowB()
                        }}>
                        <Text style={{color:'white'}}> Row -</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>{rowNumA}x{colNumB}</Text>
                </View>

                <View style={{flexDirection:'row',margin:8,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginRight:4}}
                        onPress={() => {
                            addColA();
                            addColB();
                        }}>
                        <Text style={{color:'white'}}> Col +</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:32}}>{colNumA}</Text>

                    <TouchableOpacity
                        style={{height:50,width:50,backgroundColor:'black',justifyContent:'center',alignItems:'center',borderRadius:50,marginLeft:4}}
                        onPress={() => {
                            deleteColA();
                            deleteColB();
                        }}>
                        <Text style={{color:'white'}}> Col -</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
export default MatrixSubtraction;
