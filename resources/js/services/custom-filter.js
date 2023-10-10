export function currencyFormat(value) {
    if (typeof value !== 'number') {
        return value;
    }
    return 'S$' + value.toFixed(2); // Adjust the number of decimal places as needed
}
