const input = document.querySelector('.list-content__input'),
      list = document.querySelector('.list-arr'),
      button = document.querySelector('.list-display'),
      alertAdd = document.querySelector('#list__add'),
      alertUF = document.querySelector('#list__none'),
      listBlock = document.querySelector('.list__block'),
      close = document.querySelector('.close'),
      arrList = [];
function background() {
    let header = document.querySelector('.header'),
        circle = document.querySelector('.circle'),
        slider = document.querySelector('.slider');
    if (header.classList.contains('light')) {
        circle.style.transform = 'translateX(26px)';
        slider.style.background = '#4b4b4b';
        close.style.color = '#ebebeb'
        header.classList.remove('light');
        header.classList.add('dark');
    } else {
        circle.style.transform = 'translateX(0px)';
        slider.style.background = '#ccc';
        close.style.color = '#2b2b2b'
        header.classList.remove('dark');
        header.classList.add('light');
    }
}
function addElement() {
    arrList.push(`Задание: ${input.value} <br>`);
    list.innerHTML = arrList.join(' ');
}
document.querySelector('.switch').addEventListener("click", () => {
    background();
})
document.querySelector('.list-content__add').addEventListener('click', () => {
    if (input.value == '') {
        alertUF.classList.add('visible');
        setTimeout(() => {
            alertUF.classList.remove('visible');
        }, 1500);
    } else {
        addElement();
        input.value = '';
        alertAdd.classList.add('visible');
        setTimeout(() => {
            alertAdd.classList.remove('visible');
        }, 1500);
    }
});
window.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        if (input.value == '') {
            alertUF.classList.add('visible');
            setTimeout(() => {
                alertUF.classList.remove('visible');
            }, 1500);
        } else {
            addElement();
            input.value = '';
            alertAdd.classList.add('visible');
            setTimeout(() => {
                alertAdd.classList.remove('visible');
            }, 1500);
        }
    }
})
document.querySelector('.list-display').addEventListener('click', function () {
    listBlock.classList.add('showList');
});
document.querySelector('.close').addEventListener('click', function () {
    listBlock.classList.remove('showList');
});