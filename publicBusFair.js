function publicBusFair(people){
    const busQuantity = parseInt(people / 50);
    const peopelAfterBus = people % 50;

    const microbusQuantity = parseInt(peopelAfterBus / 11);
    const peopleAfterMicrobus = peopelAfterBus % 11;

    const busAndMicrobus = (busQuantity*50) + (microbusQuantity*11);
    remainingPeople = people - busAndMicrobus;
    totalCost = remainingPeople * 250;
    return totalCost;
}

const publicBus = publicBusFair(365);
console.log(publicBus);