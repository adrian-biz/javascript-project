import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test Suite: formatCurrency')

console.log('Conversion Test')
if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Zero Conversion Test')
if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Round Down Test')
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('Round Up Test')
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
}




