function cropHydrated(array) {
    let rowSize = array.length


    let result = [];
    for (i = 0; i < rowSize; i++) {
        columnSize = array[0].length;
        for (j = 0; j < columnSize; j++) {
                temp = findNeighbours(array, i, j);
                temp.push(array[i][j]);
                count = 0;
                temp.forEach((v) => (v === "w" && count++));
                if(count > 2 || count === 0){
                    return false;
                }
            
        }

    }

    return true;
}

function findNeighbours(array, i, j) {
    let rowLimit = array.length - 1;
    let columnLimit = array[0].length - 1;
    let result = [];
    for (x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
        for (y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
            if (x != i || y != j) {
                result.push(array[x][y]);
            }
        }
    }
    return result;
}

console.log(cropHydrated([
    [ "w", "c", "c", "c" ],
    [ "c", "c", "c", "w" ],
    [ "c", "w", "c", "c" ]
  ]) // true
  );

console.log(cropHydrated([
    [ "w", "c", "c", "w" ],
    [ "c", "c", "c", "c" ],
    [ "c", "w", "c", "w" ]
  ]) );

  console.log(cropHydrated([
    [ "w", "c", "c", "w" ],
    [ "c", "c", "w", "c" ],
    [ "c", "c", "c", "c" ]
  ]));