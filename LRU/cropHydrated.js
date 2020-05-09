function cropHydrated(array) {
    let rowSize = array.length


    let result = [];
    for (i = 0; i < rowSize; i++) {
        columnSize = array[0].length;
        for (j = 0; j < columnSize; j++) {
            temp = findNeighbours(array, i, j);
            console.log(temp);
            if (array[i][j] != "w" && !temp.includes("w")) {
                return false;
            }
        }

    }

    return true;
}

cropHydrated([["c", "c"],
["c", "c"],
["c", "c"]]);

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
