
function showContent(contentId) {
    const allContentBlocks = document.querySelectorAll('.main__content');
    allContentBlocks.forEach(block => {
        if (block.id === contentId) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}


const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const listItem = document.querySelectorAll('.header__container-nav-item');

function toggleActiveClass() {
    main.classList.toggle('active');
}

logo.addEventListener('click', toggleActiveClass);
listItem.forEach((e) => e.addEventListener('click', toggleActiveClass));

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1023) {
        main.classList.add('active');
    } else {
        main.classList.remove('active');
    }
});


window.dispatchEvent(new Event('resize'));
  

