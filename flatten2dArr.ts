function flatten2dArr(arr2d: any[][]): any[] {
    let arr1d: any[] = [];
    for (let r = 0; r < arr2d.length; r++) {
        for (let c = 0; c < arr2d[r].length; c++) {
            arr1d.push(arr2d[r][c]);
        }
    }
    return arr1d;
}

export default flatten2dArr;
