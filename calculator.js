let expression = '';
let degreeMode = true; 

const expressionInput = document.getElementById("expression");
const historyLog = document.getElementById("log");
let radMode = document.getElementById('radMode');
let degMode = document.getElementById('degMode');

function setDegMode() {
    degreeMode = true;
    radMode.style.color='';
    radMode.style.textShadow='';
    degMode.style.color='lime';
    degMode.style.textShadow = '0 0 10px lime, 0 0 20px lime, 0 0 30px lime'
}

function setRadMode() {
    degreeMode = false;
    degMode.style.color='';
    degMode.style.textShadow='';
    radMode.style.color='lime';
    radMode.style.textShadow = '0 0 10px lime, 0 0 20px lime, 0 0 30px lime'
}

function input_value(val) {
    expression += val;
    expressionInput.value = expression;
}


function Clean() {
    expression = '';
    expressionInput.value = expression;
}

function backspace() {
    expression = expression.slice(0, -1);
    expressionInput.value = expression;
}

function sqrt() {
    expression += 'sqrt(';
    expressionInput.value = expression;
}

function cbrt() {
    expression += 'cbrt(';
    expressionInput.value = expression;
}


function inv() {
    expression += '1/(';
    expressionInput.value = expression;
}

function abs() {
    expression += 'abs(';
    expressionInput.value = expression;
}


function calculate() {
    try {
    
        let result = math.evaluate(expression);

       
        addToHistory(expression, result);

        
        expression = result.toString();
        expressionInput.value = expression;
    } catch (error) {
      
        vibrateContainer();
    }
}

function trigFunc(func, value) {
    if (degreeMode) {
        return func(math.unit(value, 'deg')); 
    } else {
        return func(value); 
    }
}

function addToHistory(exp, result) {
    let li = document.createElement('li');
    li.textContent = `${exp} = ${result}`;
    historyLog.appendChild(li);
}

function input_value_trig(funcName) {
    if (degreeMode) {
        expression += `${funcName}(math.unit(`;
    } else {
        expression += `${funcName}(`;
    }
    expressionInput.value = expression;
}
function vibrateContainer() {
    const container = document.querySelector('.container');
    container.classList.add('shake');

    setTimeout(() => {
        container.classList.remove('shake');
    }, 500);
}


