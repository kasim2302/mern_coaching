

const Total_cart_Amount = (arr) => {
    return arr.reduce((total,item) => total + item.price , 0)
}
console.log((Total_cart_Amount([ { product: "Laptop", price: 50000 }, { product: "Mouse", price: 500 }, { product: "Keyboard", price: 1500 } ])));
