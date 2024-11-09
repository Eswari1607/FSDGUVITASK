// Here the class to calculate the Uber price:

class UberPriceCalculator {
    constructor(baseFare, costPerkm , kmcovered) {
        this.baseFare = baseFare; 
        this.costPerkm = costPerkm; 
        this.kmcovered = kmcovered; 
    }

    
    calculatePrice() {
        const totalPrice = this.baseFare + (this.costPerkm * this.kmcovered);

        return totalPrice.toFixed(2);
    }
}

const uberprice = new UberPriceCalculator(3, 2, 5.5);


console.log(uberprice);

console.log(uberprice.calculatePrice())