document.addEventListener('DOMContentLoaded', () => {
  

  function switchTabs(tabsSelector, contentSelector, activeClass) {
    // Получаем элементы по селекторам
    const tabs = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(contentSelector);
  
    // Добавляем обработчик события клика на каждый таб
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Скрываем все элементы контента
        content.forEach((item) => {
          item.classList.remove("show");
          item.classList.add("hide");
        });
  
        // Убираем активный класс у всех табов
        tabs.forEach((button) => {
          button.classList.remove(activeClass);
        });
  
        // Показываем нужный элемент контента и добавляем активный класс к табу
        content[index].classList.remove("hide");
        content[index].classList.add("show");
        tab.classList.add(activeClass);
      });
    });
  }
  
  // Вызываем функцию, передавая селекторы и класс
  switchTabs(".destination_tab", ".destination_content", "destination_tab--active");
  switchTabs(".dots__nav-item", ".technology-content", "dots__nav-item--active");

  
// Слайдер с точками

const contentDots = document.querySelectorAll(".crew_content");
const btnDotsWrapper = document.querySelector(".crew-dots__nav");

const dots = [];

for (let i = 0; i < contentDots.length; i++) {
  const dot = document.createElement("button");

  dot.dataset.slideTo = i;
  dot.classList.add("crew-dots__nav-item");
  if (i == 0) dot.classList.add("crew-dots__nav-item--active");

  if (i != 0) contentDots[i].classList.add("hide");
  dot.addEventListener("click", showSliderDots);
  btnDotsWrapper.append(dot);
  dots.push(dot);
}

function showSliderDots(e) {
  const slideTo = e.target.dataset.slideTo;

  contentDots.forEach((item) => item.classList.add("hide"));
  contentDots[slideTo].classList.remove("hide");

  dots.forEach((dot) => dot.classList.remove("crew-dots__nav-item--active"));
  e.target.classList.add("crew-dots__nav-item--active");
}

const burgerBtn = document.querySelector('.menu-icon');
const menuList = document.querySelector('.header_nav_list');
const overlay = document.querySelector('.overlay')

function showBurger() {
  burgerBtn.classList.toggle('menu-icon--active');
  menuList.classList.toggle('header_nav_list--active');
  overlay.classList.toggle('show')

  if (burgerBtn.classList.contains('menu-icon--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
overlay.addEventListener('click', () => {
  burgerBtn.classList.remove('menu-icon--active');
  overlay.classList.remove('show')
  menuList.classList.remove('header_nav_list--active');
  if (burgerBtn.classList.contains('menu-icon--active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

burgerBtn.addEventListener('click', showBurger);
});






