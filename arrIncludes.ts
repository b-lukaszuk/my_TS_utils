function isInArr(what: any, anArr: any[], eqlWhatAndArrEltFn: Function): boolean {
    for (let i = 0; i < anArr.length; i++) {
        if (eqlWhatAndArrEltFn(what, anArr[i])) {
            return true;
        }
    }
    return false;
}

export default isInArr;
