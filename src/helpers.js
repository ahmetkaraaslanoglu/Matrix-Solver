export const rowUp = (prevRow) => prevRow < 6 ? prevRow + 1 : 6;
export const rowDown = (prevRow) => prevRow > 1 ? prevRow - 1 : 1;
export const colUp = (prevCol) => prevCol < 6 ? prevCol + 1 : 6;
export const colDown = (prevCol) => prevCol > 1 ? prevCol - 1 : 1;
