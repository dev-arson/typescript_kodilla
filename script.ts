const btnElem = document.querySelector('.sum-btn') as HTMLInputElement;
const numInput = document.querySelector('.num-input') as HTMLInputElement;

function sum(a: number, b: number) {
  console.log(a + b);
}

btnElem.addEventListener('click', () => { sum(5, +numInput.value) });
