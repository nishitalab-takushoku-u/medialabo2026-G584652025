b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
function greeting() {
    let left = document.querySelector('input#left');
    let right = document.querySelector('input#right');
    let answer = document.querySelector('span#answer');
    answer.textContent = parseInt(left.value) + parseInt(right.value);
}