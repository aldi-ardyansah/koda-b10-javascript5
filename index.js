function temperatureConverter(C) {
    const formula = {
        reamur: 4 / 5 * C,
        fahrenheit: (9 / 5 * C) + 32,
        kelvin: C + 273
    };
    return formula;
}

console.log(temperatureConverter(30).fahrenheit);
console.log(temperatureConverter(30).reamur);
console.log(temperatureConverter(30).kelvin);