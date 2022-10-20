export const toSellOrNotToSell = (obj) => {
    let readySell = []; //stores pottery that will be sold. don't export
    if (obj.weight >= 6 && obj.cracked === false) {
        obj.price = 40
        readySell.push(obj)
    }
    else if (obj.weight < 6 && obj.cracked === false) {
        obj.price = 20;
        readySell.push(obj)
    }
    return readySell
}
export const usePottery = (arr) => {
    const readySellCopy = [...arr]
    return readySellCopy
}