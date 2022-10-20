export const firePottery = (obj, num) => {
    obj.fired = true
    if (num > 2200) {
        obj.cracked = true
    } else if (num <= 2200) {
        obj.cracked = false
    }
    return obj
    }