const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click',() => {
        modalWindow.classList.add('active')
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active')
});

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');
const iframe = modal.querySelector('iframe');

closeBtn.addEventListener('click', () => {
    let videoSrc = iframe.src;
    iframe.src = ''; // Остановка
    iframe.src = videoSrc; // Сброс URL для следующего раза
    modal.style.display = 'none';
});