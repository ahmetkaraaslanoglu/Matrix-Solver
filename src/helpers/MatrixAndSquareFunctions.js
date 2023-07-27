export function multiplyScalar (matrix, scalar) {
    return matrix.map(row => row.map(value => scalar * value));
}

export function matrixPower (matrix, power) {
    let result = matrix;
    for(let i = 1; i < power; i++) {
        result = multiplyMatrix(result, matrix);
    }
    return result;
}

function multiplyMatrix (matrixA, matrixB) {
    const rowsA = matrixA.length, colsA = matrixA[0].length;
    const rowsB = matrixB.length, colsB = matrixB[0].length;

    if (colsA !== rowsB) return null;

    let result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}
