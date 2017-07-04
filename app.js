clearDisplay = () => {
    const display = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calculationFinished = true;
    operation = operations.none;
}
clearLastValue = () => {
    const display = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}
numInput = digit => {
    const display = document.getElementById('display');
    clearLastValue();
    if (display.value === '0'){
      display.value = ''
    };
    display.value += digit;
}
insertDecimal = () => {
    var display = document.getElementById('display');
    clearLastValue();
    if (display.value.indexOf('.') === -1) display.value += '.';
}
const operations = {
    none: (stored, displayed) =>  displayed,
    add: (stored, displayed) => stored + displayed,
    subtract: (stored, displayed) => stored - displayed,
    multiply: (stored, displayed) => stored * displayed,
    divide: (stored, displayed) => {
      if (displayed === 0){
        return 'Undefined';
      } else {
        return stored / displayed;
      }
    }
};
setOperation = command => {
    const display = document.getElementById('display');
    calculate();
    storedNum = display.value;
    if (display.value === 'NaN'){
      display.value = "Error";
    }
    if(display.value > 999999999){
      display.value = 'Error';
    }
    if (operations.hasOwnProperty(command))
        operation = operations[command];
}
calculate = () => {
    const display = document.getElementById('display');
    display.value = operation(+storedNum, +display.value);
    if (display.value === 'NaN'){
      display.value = 'Error';
    }
    if(display.value > 999999999){
      display.value = 'Error';
    }
    calculationFinished = true;
    operation = operations.none;
}
'addEventListener' in window
  ? window.addEventListener('load', clearDisplay)
  : window.attachEvent('onload', clearDisplay);
