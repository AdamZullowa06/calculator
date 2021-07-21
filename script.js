const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearE1  = document.querySelector('.all-clear');
const clearEntityE1 = document.querySelector('.las-entity-clear');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersE1.forEach( number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
});

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}

function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalE1.addEventListener('click', (e) => {
    if( !dis1Num || !dis2Num ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
})

clearE1.addEventListener('click', (e) => {
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '0';
})

clearEntityE1.addEventListener('click', (e) => {
    display2E1.innerText = '';
    dis2Num = '';
})

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonE1(e.key);
    } else if (
        e.key === '*' ||
        e.key === '/' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ) {
        clickOperation(e.key);
    } else if(e.key === '*' || e.key == 'x') {
        clickOperation('X');
    } else if (e.key == 'Enter' || e.key === "=") {
        clickEqual();
    } else if (e.key == 'Escape') {
        clickClearE1();
    } else if (e.key == 'q') {
        clickClearEntityE1();
    }
})

function clickButtonE1(key) {
    numbersE1.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationE1.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}

function clickEqual() {
    equalE1.click();
}

function clickClearE1() {
    clearE1.click();
}

function clickClearEntityE1() {
    clearEntityE1.click();
}