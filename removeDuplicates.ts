interface Dictionary<T> {
    [Key: string]: T;
};

function getUniqueInts(arr: number[]): number[] {
    let result: Dictionary<number> = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = 1;
    }
    return Object.keys(result).map(s => parseInt(s));
}

function getUniqueStrings(arr: string[]): string[] {
    let result: Dictionary<number> = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = 1;
    }
    return Object.keys(result);
}

export { getUniqueInts, getUniqueStrings };
