const nav = document.querySelector('#nav');

const topBtn = document.getElementById('top');
const bottomBtn = document.getElementById('bottom');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

topBtn.addEventListener("click", Upclose("right"));
bottomBtn.addEventListener('click', Upclose(bottom));
leftBtn.addEventListener('click', Upclose(left));
rightBtn.addEventListener('click', Upclose(right));

function Upclose(ard) {
    nav.classList.remove('top')
    nav.classList.remove('bottom')
    nav.classList.remove('left')
    nav.classList.remove('right')
    
    nav.classList.add(ard)
 }