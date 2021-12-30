function reshape(arr1d: any[], nrows: number, ncols: number): any[][] {
    if (arr1d.length !== (nrows * ncols)) {
        throw new RangeError("(nrows * ncols) must be equal arr1d.length");
    }
    let result: any[][] = []
    let arrCopy: any[] = [...arr1d];
    for (let r = 0; r < nrows; r++) {
        let row: any[] = [];
        for (let c = 0; c < ncols; c++) {
            let tmp: any = arrCopy.shift()
            row.push(tmp);
        }
        result.push(row);
    }
    return result;
}

export default reshape;
