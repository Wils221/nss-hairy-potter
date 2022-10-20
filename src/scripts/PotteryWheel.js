const primaryKey = 1;

export const makePottery = (shape, weight, height) => {
    let pots = {};
    pots.shape = shape;
    pots.weight = weight;
    pots.height = height;
    pots.id = primaryKey
    

    return pots
}