import React, {useState, useCallback, useEffect} from 'react';
import {View, Button} from 'react-native';
import Matrix from '../components/Matrix';
import MatrixDimension from '../components/MatrixDimension';
import CalculateButton from '../components/CalculateButton';
import {createMatrix} from '../helpers/JustMatrixFunctions';
import {addMatrix, subtractMatrix, multiplyMatrix} from '../helpers/DoubleMatrixFunctions';
import {colDown, colUp, rowDown, rowUp} from '../helpers';

const DoubleMatrix = ({route}) => {
    const [rowA, setRowA] = useState(2);
    const [colA, setColA] = useState(2);
    const [rowB, setRowB] = useState(2);
    const [colB, setColB] = useState(2);
    const [matrixDataA, setMatrixDataA] = useState(Array(rowA).fill().map(() => Array(colA).fill(0)));
    const [matrixDataB, setMatrixDataB] = useState(Array(rowB).fill().map(() => Array(colB).fill(0)));
    const [displayMatrixA, setDisplayMatrixA] = useState(true);

    const handleMatrixChangeA = useCallback((newData) => {
        setMatrixDataA(newData);
    }, []);

    const handleMatrixChangeB = useCallback((newData) => {
        setMatrixDataB(newData);
    }, []);

    useEffect(() => {
        setMatrixDataA(prevData => createMatrix(colA, rowA, prevData));
        setMatrixDataB(prevData => createMatrix(colB, rowB, prevData));
    }, [rowA, colA, rowB, colB]);

    const handleCalculate = () => {
        if (route.name === "MatrixAddition") {
            const addResult = addMatrix(matrixDataA, matrixDataB);
            console.log("A + B = ", addResult);
        } else if (route.name === "MatrixSubtraction") {
            const subtractResult = subtractMatrix(matrixDataA, matrixDataB);
            console.log("A - B = ", subtractResult);
        } else if (route.name === "MatrixMultiplication") {
            const multiplyResult = multiplyMatrix(matrixDataA, matrixDataB);
            console.log("A * B = ", multiplyResult);
        }
    };

    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            {displayMatrixA ?
                <MatrixDimension
                    row={rowA}
                    col={colA}
                    rowUp={() => setRowA(prevRow => rowUp(prevRow))}
                    rowDown={() => setRowA(prevRow => rowDown(prevRow))}
                    colUp={() => setColA(prevCol => colUp(prevCol))}
                    colDown={() => setColA(prevCol => colDown(prevCol))}
                />
                :
                <MatrixDimension
                    row={rowB}
                    col={colB}
                    rowUp={() => setRowB(prevRow => rowUp(prevRow))}
                    rowDown={() => setRowB(prevRow => rowDown(prevRow))}
                    colUp={() => setColB(prevCol => colUp(prevCol))}
                    colDown={() => setColB(prevCol => colDown(prevCol))}
                />
            }

            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                <Button onPress={() => setDisplayMatrixA(true)} title="A Matrix"/>
                <Button onPress={() => setDisplayMatrixA(false)} title="B Matrix"/>
            </View>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Matrix
                    row={displayMatrixA ? rowA : rowB}
                    col={displayMatrixA ? colA : colB}
                    matrixData={displayMatrixA ? matrixDataA : matrixDataB}
                    onMatrixChange={displayMatrixA ? handleMatrixChangeA : handleMatrixChangeB}
                />
            </View>

            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', margin: 20}}>
                <CalculateButton onPress={handleCalculate} text="Calculate"/>
            </View>
        </View>
    );
}

export default DoubleMatrix;
