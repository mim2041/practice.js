function paperRequirements(q1, q2, q3){
    const firstBookPageRequired = q1 * 100;
    const secondBookPageRequired = q2 * 200;
    const thirdBookPageRequired = q3 * 300;

    const totalPageRequired = firstBookPageRequired + secondBookPageRequired + thirdBookPageRequired;
    return totalPageRequired;
}

const totalPaperRequired = paperRequirements(50, 20, 25);
console.log(totalPaperRequired);