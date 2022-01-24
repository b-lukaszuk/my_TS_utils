function getArr1dPrefilledWithNum(len: number, fill: number): Array<number> {
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = fill;
    }
    return result;
}

export default getArr1dPrefilledWithNum;