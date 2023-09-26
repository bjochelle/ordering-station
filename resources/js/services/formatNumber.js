const formatNumber = (number) => {
    return parseFloat(Number(number)).toFixed(2).toLocaleString('en', {minimumFractionDigits: 2}).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const abbrevNumber = (number)=>{
    let quotient = 0;
    if (String(Math.trunc(number)).length < 7) {
        quotient = number / 1000;
        return quotient.toLocaleString('en', {minimumFractionDigits: 2}) + 'K';
    } else {
        quotient = number / 1000000;
        return quotient.toLocaleString('en', {minimumFractionDigits: 2}) + 'M';
    }
};

export {formatNumber,abbrevNumber};