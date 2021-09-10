document.querySelector('.menu-btn').addEventListener('click', function (e) {
    document.body.classList.toggle('menu-is-open');
});

document.querySelectorAll('.section__content').forEach(item => {
    item.addEventListener('click', function () {
        document.body.classList.toggle('menu-is-open');
        if (this.dataset.name === 'site') {
            document.querySelector('.menu__content').textContent = 'Давайте обсудим, какой сайт Вы хотите';
            document.querySelector('.form__project').style.display = "none";
            document.querySelector('.form__input').style.display = "flex";
        } else {
            document.querySelector('.menu__content').textContent = 'Коллекция проектов';
            document.querySelector('.form__input').style.display = "none";
            document.querySelector('.form__project').style.display = "contents";
        }
    });
});
