const wrapper = document.querySelector('.firstQ');
const main = document.querySelector('.main');
const dontLieBtn = document.querySelector('.dont-lie-btn');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const nextBtn = document.querySelector('.next-btn');
const noBtn = document.querySelector('.no-btn');
const startBtn = document.querySelector('.start-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
startBtn.addEventListener('click', () => {
    main.style.visibility = "hidden";
    main.style.position = "absolute";
    wrapper.style.visibility = "visible";
});
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Так бы сразу! :)';
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    nextBtn.style.visibility = "visible";
    dontLieBtn.style.visibility = "hidden";
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    dontLieBtn.style.visibility = "visible";
});