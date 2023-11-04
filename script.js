var btnElem = document.querySelector('.sum-btn');
var numInput = document.querySelector('.num-input');
function sum(a, b) {
    console.log(a + b);
}
btnElem.addEventListener('click', function () { sum(5, +numInput.value); });
