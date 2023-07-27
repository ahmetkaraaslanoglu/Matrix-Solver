export function gaussElimination(coefficients, results) {
    let matrix = [];
    for (let i = 0; i < coefficients.length; i++) {
        matrix[i] = coefficients[i].concat(results[i]);
    }

    let n = results.length;

    for (let i=0; i<n; i++) {
        let maxRow = i;
        for (let j=i+1; j<n; j++) {
            if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
                maxRow = j;
            }
        }

        let temp = matrix[i];
        matrix[i] = matrix[maxRow];
        matrix[maxRow] = temp;

        let c = 1.0 / matrix[i][i];
        for (let j=i; j<n+1; j++) {
            matrix[i][j] *= c;
        }

        for (let j=0; j<n; j++) {
            if (j !== i) {
                c = matrix[j][i];
                for (let k=i; k<n+1; k++) {
                    matrix[j][k] -= matrix[i][k] * c;
                }
            }
        }
    }

    let x = new Array(n);
    for (let i=0; i<n; i++) {
        x[i] = matrix[i][n];
    }
    return x;
}
