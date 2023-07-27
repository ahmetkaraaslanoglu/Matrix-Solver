import React from 'react';
import { View, TextInput } from 'react-native';

const Matrix = ({ row, col, matrixData, onMatrixChange, style }) => {
    const handleTextChange = (text, rowIndex, colIndex) => {
        const newData = [...matrixData];
        newData[rowIndex][colIndex] = Number(text);
        onMatrixChange(newData);
    }

    return (
        <View style={style}>
            {matrixData.map((item, index) => (
                <View key={index} style={{flexDirection:'row'}}>
                    {item.map((innerItem, innerIndex) => (
                        <TextInput
                            style={{borderWidth:0.5, width:48, height:48}}
                            key={innerIndex}
                            keyboardType='numeric'
                            placeholder='0'
                            value={innerItem.toString()}
                            onChangeText={(text) => handleTextChange(text, index, innerIndex)}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

export default Matrix;
