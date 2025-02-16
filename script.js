// generate buttons
const numbersContainer = document.querySelector('.numbersContainer');
for(let i = 0; i <= 9; i++) {
  const button = document.createElement('button');
  button.classList = 'numberButton';
  button.textContent = i;
  button.addEventListener('click', () => {
    console.log(`pressed button ${i}`);
  });
  numbersContainer.appendChild(button);
}

let a;
let b;
let operation;

function operate(a, b, operation) {
  switch(operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}