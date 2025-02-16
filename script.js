// variables for operations
let a;
let b;
let operation;
let isA = false, isB = false, isOperation = false;

// buttons
const numbersContainer = document.querySelector('.numbersContainer');
const display = document.querySelector('.displayNumbers');
for(let i = 0; i <= 9; i++) {
  const button = document.createElement('button');
  button.classList = 'numberButton';
  button.textContent = i;
  button.addEventListener('click', () => {
    if(display.textContent == 0) {
      display.textContent = i;
    }
    else {
      display.textContent = display.textContent + i;
    }
  });
  numbersContainer.appendChild(button);
}

// operations
const operationsContainer = document.querySelector('.operationsContainer');
const displayOperation = document.querySelector('.displayOperation');
for(let i = 1; i <= 4; i++) {
  const button = document.createElement('button');
  switch(i) {
    case 1: button.textContent = '+'; break;
    case 2: button.textContent = '-'; break;
    case 3: button.textContent = '*'; break;
    case 4: button.textContent = '/'; break;
  }
  button.addEventListener('click', () => {
      displayOperation.textContent = button.textContent;
      operation = button.textContent;
      a = display.textContent;
      display.textContent = 0;
  });
  operationsContainer.appendChild(button);
}

// functions
function operate(a, b, operation) {
  switch(operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}