import {View, TextInput, Text} from 'react-native';
import MatrixDimension from '../components/MatrixDimension';
import {colDown, colUp, rowDown, rowUp} from '../helpers';
import Matrix from '../components/Matrix';
import CalculateButton from '../components/CalculateButton';
import {useCallback, useEffect, useState} from 'react';
import {createMatrix} from '../helpers/JustMatrixFunctions';
import {multiplyScalar, matrixPower} from '../helpers/MatrixAndSquareFunctions';

const MatrixAndSquare = ({route}) => {
    const [row, setRow] = useState(2);
    const [col, setCol] = useState(2);
    const [matrixData, setMatrixData] = useState(Array(row).fill().map(() => Array(col).fill(0)));
    const [scalar, setScalar] = useState(1);

    const handleMatrixChange = useCallback((newData) => {
        setMatrixData(newData);
    }, []);

    const handleScalarChange = useCallback((value) => {
        setScalar(value);
    }, []);

    useEffect(() => {
        setMatrixData(prevData => createMatrix(col, row, prevData));
    }, [row, col]);

    const handleCalculate = () => {
        if(route.name === 'MultiplyScalar') {
            const result = multiplyScalar(matrixData, scalar);
            console.log('Result: ', result);
        } else if(route.name === 'MatrixPower') {
            const result = matrixPower(matrixData, scalar);
            console.log('Result: ', result);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>

            <MatrixDimension
                row={row}
                col={col}
                rowUp={() => setRow(prevRow => rowUp(prevRow))}
                rowDown={() => setRow(prevRow => rowDown(prevRow))}
                colUp={() => setCol(prevCol => colUp(prevCol))}
                colDown={() => setCol(prevCol => colDown(prevCol))}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Scalar:</Text>
                <TextInput
                    style={{borderWidth:0.5, width:50, height:50, marginBottom: 10}}
                    keyboardType='numeric'
                    placeholder='1'
                    value={scalar.toString()}
                    onChangeText={handleScalarChange}
                />
                <Matrix row={row} col={col} matrixData={matrixData} onMatrixChange={handleMatrixChange} />
            </View>

            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: 20 }}>
                <CalculateButton onPress={handleCalculate} text="Calculate" />
            </View>

        </View>
    );
}
export default MatrixAndSquare;
