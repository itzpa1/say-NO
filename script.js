const wrapper = document.querySelector('.wrapper');
const box = document.querySelector('.box');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const openBox = document.querySelector('.box h2');
const img = document.querySelector('.wrapper img');
const btnGroup = document.querySelector('.btn-group');
const mp3 = document.querySelector('audio');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

openBox.addEventListener('click', () => {
    setTimeout(() => {
        box.style.display = "none";
        wrapper.style.display = "flex";
    }, 1000);
    mp3.play();

});

yesBtn.addEventListener('click', () => {
    img.src = "/img/2.gif";
    question.innerHTML = 'I Love You Too :)';
    btnGroup.style.opacity = "0";
    setTimeout(() => {
        img.src = "/img/4.gif";
    }, 4000);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
