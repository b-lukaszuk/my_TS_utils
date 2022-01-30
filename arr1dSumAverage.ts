function getSum(arr1d: number[]): number {
    return arr1d.reduce((acc, curVal) => {
        return acc + curVal;
    }, 0);
}

function getAverage(arr1d: number[]): number {
    return getSum(arr1d) / arr1d.length;
}

export { getSum, getAverage };
