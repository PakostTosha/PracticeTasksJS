// Импортируем .JSON объект, который содержит в себе пары "ключ-значение"
import json from '../js/imgs.json'  assert { type: "json" }
// Из полученного объекта вытаскиваем значение по ключу, в котором
// содержится необходимый нам массив объектов
let galleryImages = json["galleryImages"]

// Галерея
let galleryList = document.querySelector('.gallery-list')
// Шаблон фотографии
let TempImg = document.querySelector('#gallery-item-template').content;
let TempContentImg = TempImg.querySelector('.gallery-item')
// Лист (точки) количества фотографий
let dotList = document.querySelector('.select-img-list')
// Шаблон метки выбранной фотографии
let TempDot = document.querySelector('#select-img-list-template').content
let TempContentDot = TempDot.querySelector('.img-item')

// Индекс выделенной картинки (понадобится для слайдера)
let selectedIndex;

// Перебор полученного массива, настройка и добавление элемента в галерею
for (let i = 0; i < galleryImages.length; i++) {
    let jsonItem = galleryImages[i]
    // Клонирование шаблона
    let galleryItem = TempContentImg.cloneNode(true)
    let dotItem = TempContentDot.cloneNode(true)
    let galleryImg = galleryItem.querySelector('img')
    // Добавление стилей центральной выбранной картинке и точке
    if (i == Math.floor(galleryImages.length / 2)) {
        selectedIndex = i
        galleryItem.classList.add('selected')
        dotItem.classList.add('dot-selected')
    }
    // Настройка атрибутов img
    galleryImg.src = jsonItem["src"]
    galleryImg.alt = jsonItem["alt"]
    // Добавление в список галереи
    galleryList.appendChild(galleryItem)
    // Добавление в лист количества (точек) фотографий
    dotList.appendChild(dotItem)
}


// Слайдер
let turnNextButton = document.querySelector('.turn-next') // Вперёд
let turnBackButton = document.querySelector('.turn-back') // Назад

let slider = document.querySelector('.gallery-list')
let dotSlider = document.querySelector('.select-img-list')
let sliderItems = slider.querySelectorAll('.gallery-item')
let dotItems = dotSlider.querySelectorAll('.img-item')

let offset = 0
let imgs = document.querySelectorAll('.gallery-item img')
let gap = 25

turnNextButton.addEventListener('click', function () {
    // Выделение активного элемента
    sliderItems[selectedIndex].classList.remove('selected')
    dotItems[selectedIndex].classList.remove('dot-selected')
    if (selectedIndex + 1 < imgs.length) {
        offset = offset - imgs[selectedIndex].width / 2 - gap - imgs[selectedIndex + 1].width / 2
        selectedIndex += 1
    }
    else {
        offset = 0
        selectedIndex = Math.floor(imgs.length / 2)
        while (selectedIndex > 0) {
            offset = offset + imgs[selectedIndex].width / 2 + gap + imgs[selectedIndex - 1].width / 2
            selectedIndex -= 1
        }
    }
    sliderItems[selectedIndex].classList.add('selected')
    dotItems[selectedIndex].classList.add('dot-selected')
    // Сдвиг слайдера влево
    slider.style.left = offset + 'px'
    console.log('offset ' + offset)
    console.log('selectedIndex ' + selectedIndex)
})

turnBackButton.addEventListener('click', function () {
    // Выделение активного элемента
    sliderItems[selectedIndex].classList.remove('selected')
    dotItems[selectedIndex].classList.remove('dot-selected')
    if (selectedIndex - 1 >= 0) {
        offset = offset + imgs[selectedIndex].width / 2 + gap + imgs[selectedIndex - 1].width / 2
        selectedIndex -= 1
    }
    else {
        offset = 0
        selectedIndex = Math.floor(imgs.length / 2)
        while (selectedIndex < imgs.length - 1) {
            offset = offset - imgs[selectedIndex].width / 2 - gap - imgs[selectedIndex + 1].width / 2
            selectedIndex += 1
        }
    }
    sliderItems[selectedIndex].classList.add('selected')
    dotItems[selectedIndex].classList.add('dot-selected')
    // Сдвиг слайдера вправо
    slider.style.left = offset + 'px'
    console.log('offset ' + offset)
    console.log('selectedIndex ' + selectedIndex)
})


// Открытие-закрытие меню кнопкой
let flag = false
// true - меню открыто, false - меню закрыто
let menuButton = document.querySelector('.nav-item.menu')
let menuContent = document.querySelector('.menu-section')
let menuIconX = menuButton.querySelector('img')
let header = document.querySelector('header')
let headerLogoImg = header.querySelector('.logo img')
let decor = document.querySelector('.background-decor')

menuButton.onclick = function () {
    flag = !flag
    // Кнопка меню
    menuButton.classList.toggle('opened')
    menuIconX.classList.toggle('hidden')
    // Блок меню
    menuContent.classList.toggle('opened')
    // Спрятать декоративный фон
    decor.classList.toggle('hidden')
    if (flag) {
        // Меняется путь иконки на белый лого
        headerLogoImg.src = "src/img/logo-white.svg"
        // Фон header
        header.style.backgroundColor = "#272727";
    } else {
        // Вернуть изменения
        headerLogoImg.src = "src/img/logo.svg"
        header.style.backgroundColor = "transparent";
    }

}

// Добавление стилей активного топика в открытом меню
let topics = document.querySelectorAll('.menu-section .topic-item')
topics.forEach(topic => {
    topic.onclick = function () {
        let active = document.querySelector('.menu-section .active')
        active.classList.remove('active')
        topic.classList.add('active')
    }
})