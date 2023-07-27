import {View} from 'react-native';
import MatrixDimension from '../components/MatrixDimension';
import {colDown, colUp, rowDown, rowUp} from '../helpers';
import Matrix from '../components/Matrix';
import CalculateButton from '../components/CalculateButton';
import {useCallback, useEffect, useState} from 'react';
import {
    createMatrix,
    determinant,
    adjointMatrix,
    inverseMatrix,
    matrixRank,
    matrixTrace,
    matrixTranspose,
    roundMatrix,
} from '../helpers/JustMatrixFunctions';

const JustMatrix = ({route}) => {
    const [row, setRow] = useState(2);
    const [col, setCol] = useState(2);
    const [matrixData, setMatrixData] = useState(Array(row).fill().map(() => Array(col).fill(0)));

    const handleMatrixChange = useCallback((newData) => {
        setMatrixData(newData);
    }, []);

    useEffect(() => {
        setMatrixData(prevData => createMatrix(col, row, prevData));
    }, [row, col]);

    const handleCalculate = () => {
        if (route.name === "Determinant") {
            const det = determinant(matrixData);
            console.log('Determinant: ', det);
        }
        else if (route.name === "MatrixTranspose") {
            const transpose = matrixTranspose(matrixData);
            console.log('Matrix Transpose: ', transpose);
        }
        else if (route.name === "MatrixInverse") {
            let inverseResult = inverseMatrix(matrixData);
            inverseResult = roundMatrix(inverseResult);
            console.log('Matrix Inverse: ', inverseResult);
        }
        else if (route.name === "MatrixRank") {
            const rank = matrixRank(matrixData);
            console.log('Matrix Rank: ', rank);
        }
        else if (route.name === "MatrixTrace") {
            const trace = matrixTrace(matrixData);
            console.log('Matrix Trace: ', trace);
        }
        else if (route.name === "AdjoinMatrix") {
            const adj = adjointMatrix(matrixData);
            console.log('Adjoin Matrix: ', adj);
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
                <Matrix row={row} col={col} matrixData={matrixData} onMatrixChange={handleMatrixChange} />
            </View>

            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: 20 }}>
                <CalculateButton onPress={handleCalculate} text="Calculate" />
            </View>

        </View>
    );
}
export default JustMatrix;
