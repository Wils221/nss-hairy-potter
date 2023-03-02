
export const PotteryList = (pottery4Sale) => {
    let HTMLstring = "";

    for (const pottery of pottery4Sale) {

    
    HTMLstring += `<section class="pottery" id="pottery--1">
    <h2 class="pottery_properties">Mug</h2> 
    <div class="pottery_properties">
    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
    </div>
    <div class="pottery_price">
        Price is ${pottery.price}
    </div>
    </section>`
}
return HTMLstring
} 