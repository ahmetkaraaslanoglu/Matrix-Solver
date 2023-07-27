import {View, Text} from 'react-native';
import React from 'react';
import DimensionButton from './DimensionButton';

interface MatrixDimensionProps {
    row: number;
    col: number;
    rowUp: () => void;
    rowDown: () => void;
    colUp: () => void;
    colDown: () => void;
}

const MatrixDimension = ({row,col,rowDown,rowUp,colUp,colDown}:MatrixDimensionProps) => {
    return (
        <View style={{paddingTop:16,flexDirection:'row', alignItems:'center', justifyContent: 'space-around'}}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', marginHorizontal:20}}>
                <DimensionButton text={"+"} onPress={rowUp}/>
                <Text style={{fontSize:14,marginRight:4,marginLeft:4,fontWeight:'500'}}>Row</Text>
                <DimensionButton text={"-"} onPress={rowDown}/>
            </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18}}>{row}x{col}</Text>
            </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row', marginHorizontal:20}}>
                <DimensionButton text={"+"} onPress={colUp}/>
                <Text style={{fontSize:14,marginRight:4,marginLeft:4,fontWeight:'500'}}>Col</Text>
                <DimensionButton text={"-"} onPress={colDown}/>
            </View>

        </View>
    )
}
export default MatrixDimension;
