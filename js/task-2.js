function getShippingMessage (country, price, deliveryFee){
    const totalPrice=price+deliveryFee;
    return `Shiping to ${country} will cost ${totalPrice}`;
}
getShippingMessage("Australia", 120, 50);
getShippingMessage("Germany", 80, 20);
getShippingMessage("Sweden", 100, 20);

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));