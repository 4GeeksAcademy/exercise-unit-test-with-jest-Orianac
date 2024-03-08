let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    
    let valueEuroInDollar = valueInEuro * 1.07;
    
    return valueEuroInDollar;
}

// DollarToYen
const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * (156.5 / 1.07);
    
    return valueInYen;
}

// YenToPound
const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * (0.87 / 156.5);
    
    return valueInPound;
}

console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(2))

const sum = (a,b) => {
    return a+b
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }
