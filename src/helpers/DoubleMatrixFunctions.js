export function addMatrix(matrixA, matrixB) {
    const rowCount = matrixA.length;
    const colCount = matrixA[0].length;
    let result = new Array(rowCount).fill().map(() => new Array(colCount).fill(0));

    for(let i = 0; i < rowCount; i++) {
        for(let j = 0; j < colCount; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}

export function subtractMatrix(matrixA, matrixB) {
    const rowCount = matrixA.length;
    const colCount = matrixA[0].length;
    let result = new Array(rowCount).fill().map(() => new Array(colCount).fill(0));

    for(let i = 0; i < rowCount; i++) {
        for(let j = 0; j < colCount; j++) {
            result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
    }
    return result;
}

export function multiplyMatrix(matrixA, matrixB) {
    const rowCountA = matrixA.length;
    const colCountA = matrixA[0].length;
    const rowCountB = matrixB.length;
    const colCountB = matrixB[0].length;

    if (colCountA !== rowCountB) {
        throw new Error("Matrislerin çarpılabilmesi için Matrix A'nın sütun sayısı, Matrix B'nin satır sayısına eşit olmalıdır.");
    }

    let result = new Array(rowCountA).fill().map(() => new Array(colCountB).fill(0));

    for(let i = 0; i < rowCountA; i++) {
        for(let j = 0; j < colCountB; j++) {
            for(let k = 0; k < colCountA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}
