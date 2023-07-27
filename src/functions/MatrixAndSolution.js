import {View} from 'react-native';
import MatrixDimension from '../components/MatrixDimension';
import {colDown, colUp, rowDown, rowUp} from '../helpers';
import Matrix from '../components/Matrix';
import CalculateButton from '../components/CalculateButton';
import {useCallback, useEffect, useState} from 'react';
import {createMatrix} from '../helpers/JustMatrixFunctions';
import {gaussElimination, solveLinearEquations} from '../helpers/MatrixAndSolutionFunctions';

const MatrixAndSolution = ({route}) => {
    const [row, setRow] = useState(2);
    const [col, setCol] = useState(2);
    const [matrixData, setMatrixData] = useState(Array(row).fill().map(() => Array(col).fill(0)));
    const [resultsData, setResultsData] = useState(Array(row).fill().map(() => Array(1).fill(0)));

    const handleMatrixChange = useCallback((newData) => {
        setMatrixData(newData);
    }, []);

    const handleResultsChange = useCallback((newData) => {
        setResultsData(newData);
    }, []);

    useEffect(() => {
        setMatrixData(prevData => createMatrix(col, row, prevData));
        setResultsData(prevData => createMatrix(1, row, prevData));
    }, [row, col]);

    const handleCalculate = () => {
        console.log("Coefficients Matrix: ", matrixData);
        console.log("Results Matrix: ", resultsData);
        const solutions = gaussElimination(matrixData, resultsData);
        console.log("Solutions: ", solutions);

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

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Matrix style={{marginRight: 10}} row={row} col={col} matrixData={matrixData} onMatrixChange={handleMatrixChange} />
                <Matrix style={{marginLeft: 10}} row={row} col={1} matrixData={resultsData} onMatrixChange={handleResultsChange} />
            </View>

            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: 20}}>
                <CalculateButton onPress={handleCalculate} text="Calculate" />
            </View>

        </View>
    );
}
export default MatrixAndSolution;
