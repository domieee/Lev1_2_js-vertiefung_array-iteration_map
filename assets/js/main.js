let drinks = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

const upperDrinks = drinks.map(elem => {
    return elem.toUpperCase();
});

console.log(upperDrinks);