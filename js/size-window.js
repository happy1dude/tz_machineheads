const numbPoint = document.getElementById("steps-point");
const contentListHeader = document.querySelector('.content-list');
const infoArrow = document.querySelector('.more-info');
const imgHeaderPhoto = document.getElementById("header-photo-img");

const menuBtn = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Вешаем событие на кнопку меню по клику
menuBtn.onclick = () => {
    sidebar.classList.toggle('sidebar__show')
}

// Получаем размер экрана
let width = window.innerWidth;

// Функция отвечает за добавление точки в пунктах при размере экрана меньше 1600рх, и если больше размер, то вернёт к исходному состоянию
let sectionStepsLg = () => {
    if (width < 1600) {
        numbPoint.innerHTML = `
            <div  class="section-steps-wrap__content__box-wrap section-steps-wrap__content__one">
                <p>1.</p>
                <div class="content-text">Выбираем оптимальный для вас формат кофейни</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__two">
                <p>2.</p>
                <div class="content-text">Подписываем договор, вносите паушальный взнос</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__three">
                <p>3.</p>
                <div class="content-text">Помогаем вам подобрать хорошее место и разрабатываем для вас дизайн-проект</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__four">
                <p>4.</p>
                <div class="content-text">Закупаем оборудование, делаем первую закупку продукции</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__five">
                <p>5.</p>
                <div class="content-text">Обучаем команду, рассказываем все свои секреты</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__six">
                <p>6.</p>
                <div class="content-text">️Готово! Наслаждаемся открытием бодрой кофейни=)</div>
            </div>
        `
    } else {
        numbPoint.innerHTML = `
            <div  class="section-steps-wrap__content__box-wrap section-steps-wrap__content__one">
                <p>1</p>
                <div class="content-text">Выбираем оптимальный для вас формат кофейни</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__two">
                <p>2</p>
                <div class="content-text">Подписываем договор, вносите паушальный взнос</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__three">
                <p>3</p>
                <div class="content-text">Помогаем вам подобрать хорошее место и разрабатываем для вас дизайн-проект</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__four">
                <p>4</p>
                <div class="content-text">Закупаем оборудование, делаем первую закупку продукции</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__five">
                <p>5</p>
                <div class="content-text">Обучаем команду, рассказываем все свои секреты</div>
            </div>
            <div class="section-steps-wrap__content__box-wrap section-steps-wrap__content__six">
                <p>6</p>
                <div class="content-text">️Готово! Наслаждаемся открытием бодрой кофейни=)</div>
            </div>
        `
    }
}

// Замена картинки в header'e при изменении экрана
let headerImg = () => {
    if (width < 1190) {
        imgHeaderPhoto.src = 'img/content-img-header2.png'
    } else {
        imgHeaderPhoto.src = 'img/content-img-header.png'            
    }
    
    
}

// Стили списка при размере экрана меньше 1022
let newUl = () => {
    if (width < 1022) {
        infoArrow.classList.remove('section-header-wrapper__content__more-info');
        infoArrow.classList.add('no-arrow');
        contentListHeader.innerHTML = `
            <ul>
                <li>Вложения от <font class="color-numb">375 000</font> р.</li>
                <li>Окупаемость <font class="color-numb">6—8</font> месяцев</li>
            </ul>
            <ul>                
                <li>Выручка от <font class="color-numb">300 000</font> р.</li>
                <li>Запуск от <font class="color-numb">14</font> дней</li>
            </ul>

        `
    } else {
        infoArrow.classList.add('section-header-wrapper__content__more-info');
        infoArrow.classList.remove('no-arrow');
        contentListHeader.innerHTML = `
            <ul>
                <li>Вложения от <font class="color-numb">375 000</font> р.</li>
                <li>Окупаемость <font class="color-numb">6—8</font> месяцев</li>                             
                <li>Выручка от <font class="color-numb">300 000</font> р.</li>
                <li>Запуск от <font class="color-numb">14</font> дней</li>
            </ul>

        `
    }
    
}

// callback-функции
function loop() {
    sectionStepsLg();
    requestAnimationFrame(loop); 
}

function init() {
    newUl();
    loop();
}

loop();
init()
headerImg();
