// Program Konversi Suhu Tanpa Built-in Method
function temperatureConverter() {
    const suhuCelcius = 30;

    const formula = {
        suhuReamur: 4 / 5 * suhuCelcius,
        suhuFahrenheit: (9 / 5 * suhuCelcius) + 32,
        suhuKelvin: suhuCelcius + 273
    };

    const hasil = formula;

    console.log('Program Konversi Suhu Tanpa Built-in Method');
    console.log('Suhu Celcius Adalah: ' + suhuCelcius);
    console.log('Suhu Reamur Adalah: ' + hasil.suhuReamur);
    console.log('Suhu Fahrenheit Adalah: ' + hasil.suhuFahrenheit);
    console.log('Suhu Kelvin Adalah: ' + hasil.suhuKelvin);

    return hasil;
}

temperatureConverter();

console.log('');

// Program Konversi Suhu dengan Built-in Method
function temperatureConverterBuiltInMethod() {
    const suhuCelcius = 30;

    const formula = {
        suhuReamur: 4 / 5 * suhuCelcius,
        suhuFahrenheit: (9 / 5 * suhuCelcius) + 32,
        suhuKelvin: suhuCelcius + 273
    };

    const hasil = Object.entries(formula).map(([satuan, nilai]) => {
        return satuan + ': ' + Number(nilai.toFixed(2));
    });

    console.log('Program Konversi Suhu Dengan Built-in Method');
    console.log('Suhu Celcius Adalah: ' + suhuCelcius);
    console.log(hasil.join('\n'));

    return formula;
}
temperatureConverterBuiltInMethod();