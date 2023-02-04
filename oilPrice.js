function oilPrice(digelQuantity, petrolQuantity, octenQuantity){
    const digelPerLiter = 114;
    const petrolPerLiter = 130;
    const octenPerLiter = 135;

    const totalDigelPrice = digelQuantity * digelPerLiter;
    const totalPetrolPrice = petrolQuantity * petrolPerLiter;
    const totalOctenPrice = octenQuantity * octenPerLiter;

    const total = totalDigelPrice + totalPetrolPrice + totalOctenPrice;
    return total;
}

const totalPrice = oilPrice(0,2,3);
console.log(totalPrice);