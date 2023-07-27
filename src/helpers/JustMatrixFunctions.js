export function createMatrix (numColumns, numRows, oldMatrix) {
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
export function determinant(matrix) {

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

export function matrixTranspose(matrix){
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

export function matrixRank(matrix){
    let n = matrix.length;
    let rank = 0;

    for (let i =0;i<n-1; i++){
        let pivot = matrix[i][i];
        for (let j = i+1; j < n; j++) {
            let divideValue = (-1 * matrix[j][i]) / pivot;
            for (let k = 0; k < matrix[0].length; k++){
                matrix[j][k] = Number(matrix[i][k]) * divideValue + Number(matrix[j][k]);
            }
        }
    }

    for (let i =0; i<n; i++){
        for (let j = 0; j < matrix[0].length ; j++) {
            if (matrix[i][j] !== 0){
                rank++;
                break;
            }
        }
    }

    return rank;
}

export function matrixTrace (matrix){
    let sum = 0;
    for (let i = 0; i<matrix.length; i++){
        sum += Number(matrix[i][i]);
    }
    return sum;
}


export function adjointMatrix(matrix) {
    let adj = [...Array(matrix.length)].map(e => Array(matrix.length));
    if (matrix.length === 1) {
        adj[0][0] = 1;
        return adj;
    }

    let sign = 1;
    let subMatrix = [...Array(matrix.length - 1)].map(e => Array(matrix.length - 1));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            getSubMatrix(matrix, subMatrix, i, j, matrix.length);

            sign = ((i + j) % 2 === 0)? 1: -1;
            adj[j][i] = (sign)*(determinant(subMatrix, matrix.length - 1));
        }
    }
    return adj;
}

function getSubMatrix(mat, subMatrix, p, q, n) {
    let i = 0, j = 0;
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (row !== p && col !== q) {
                subMatrix[i][j++] = mat[row][col];
                if (j === n - 1) {
                    j = 0;
                    i++;
                }
            }
        }
    }
}

export function inverseMatrix(matrix) {
    let det = determinant(matrix);
    if (det === 0) {
        console.log("Singular matrix, can't find its inverse");
        return;
    }

    let adj = adjointMatrix(matrix);
    let inverse = [...Array(matrix.length)].map(e => Array(matrix.length));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            inverse[i][j] = adj[i][j]/det;
        }
    }
    return inverse;
}

export function roundMatrix(matrix, precision = 4) {
    return matrix.map(row => row.map(number => parseFloat(number.toFixed(precision))));
}




