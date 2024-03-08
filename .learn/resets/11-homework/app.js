let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromDollarToYen = function(valueInYen) {
    
    let valueInYen = (valueInDollar * 156.5) / valueInDollar;
    
    return valueInYen;
}

console.log(fromEuroToDollar)
console.log(fromDollarToYen)


const sum = (a,b) => {
    return a+b
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen, }
