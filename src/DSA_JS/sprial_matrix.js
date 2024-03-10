function matrix(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(Array(n).fill(0));
  }
  console.log(result);

  let counter = 1;
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;

  while (startColumn <= endColumn || startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    if (startRow <= endRow) {
      for (let i = endColumn; i >= startColumn; i--) {
        result[endRow][i] = counter;
        counter++;
      }
      endRow--;
    }

    if (startColumn <= endColumn) {
      for (let i = endRow; i >= startRow; i--) {
        result[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  }
  console.log(result);
  return result;
}

matrix(4);
