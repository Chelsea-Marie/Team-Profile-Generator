// const shoe = "red";

// const shoe = "red, size 8";

const shoe = {
    color: "red",
    size: 8,
    price: 50
}

console.log(shoe)

shoe.price = shoe.price * 0.5;

console.log(shoe)


class Shoe {
    // properties
    constructor(color, size, price) {
        this.color = color;
        this.size = size;
        this.price = price
    }

    // methods
    onSale() {
        this.price = this.price * 0.5;
    }
}

const shoe1 = new Shoe("blue", 10, 60);
const shoe2 = new Shoe("yellow", 10, 60);

console.log(shoe1)

shoe1.onSale();
shoe2.onSale();

console.log(shoe1)
console.log(shoe2)