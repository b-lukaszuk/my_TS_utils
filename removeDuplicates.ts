interface Dictionary<T> {
    [Key: string]: T;
};

function id(x: any): any {
    return x;
}

function getUnique(arr: any[],
    arrEltToKey: Function = id,
    keyToArrElt: Function = id): any[] {

    let result: Dictionary<number> = {};
    for (let elt of arr) {
        result[arrEltToKey(elt)] = 1;
    }
    return Object.keys(result).map(elt => keyToArrElt(elt));
}

export default getUnique;
