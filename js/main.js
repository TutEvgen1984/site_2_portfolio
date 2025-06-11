/* #region  Обработчики кнопок */
/* Звук для кнопок */
var audio1 = new Audio('../audio/knopka-klik-myagkii-blizkii-nizkii.mp3');
var audio2 = new Audio('../audio/knopka-klik-shumnyii-blizkii-zvonkii.mp3');
/* Создали скрытый звук */

// К сожалению, прямое взаимодействие с псевдоэлементами ::before и ::after через JavaScript или jQuery невозможно, так как они не являются частью DOM.

/* #region  Кнопка zoom-out */
document.querySelector('.header__zoom-out').addEventListener("click", function () {
  /* Одноразовое проигрывание звука */
  audio1.play();
})
/* #endregion Кнопка zoom-out */

/* #region  Кнопки навигации */
/* Кнопка №1 "Why Alivio"  */
document.querySelectorAll('.header__nav-a')[0].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №2 "Solutions" */
document.querySelectorAll('.header__nav-a')[1].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №3 "Community" */
document.querySelectorAll('.header__nav-a')[2].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №4 "Pricing" */
document.querySelectorAll('.header__nav-a')[3].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* #endregion Кнопки навигации */

/* #region  Кнопка Sign in */
document.querySelector('.auth-block__sign-in').addEventListener("click", function () {
  /* Показать dialog в виде модального окна */
  document.querySelector('#sign-in--dialog').showModal();

  /* Одноразовое проигрывание звука */
  audio1.play();
})

/* #region  Модальное окно кнопки Sign in */
/* Ниже скрипт, который закрывает модалку по клику на BackDrop. Этот скрипт скоро может быть не нужен так как появились (в экспериментальном режиме) специальыне атрибуты closedby="none" — юзер ничего не закроет сам. closedby="closerequest" — закрывается при нажатии клавиши ESC (или другого триггера закрытия). closedby="any" — модалка закрывается по клику снаружи или ESC */
/* подцепляемся к модальному окну, слушаем клик и выполняем функцию */
document.querySelector('dialog').addEventListener("click", closeOnBackDropClick);

/* функция, которая будет закрывать модальное окно если пользователь кликнет по backdrop (подложка, оверлей) */
function closeOnBackDropClick({ currentTarget, target }) {
  console.log('currentTarget = ', currentTarget);
  console.log('target = ', target);
  const dialogElement = currentTarget;
  /* currentTarget всегда будет элементом, к которому привязан обработчик. То есть элементом, на котором вызывался addEventListener(). */

  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) {
    dialogElement.close();
  }
}

/* Кнопка Login в модальном окне */
document.querySelector('.sign-in--dialog__btn-login').addEventListener("click", function () {
  /* Одноразовое проигрывание звука */
  audio1.play();
  alert("Вы вошли на сайт");
});

/* #endregion Модальное окно кнопки Sign in */

/* #endregion Кнопка Sign in */

/* #region Start Trial */

const trial_btn = document.querySelector('.auth-block__trial-btn');
trial_btn.addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio1.play();

  /* Всплывающее сообщение */
  trial_btn.classList.toggle('auth-block__trial-btn--popup');
  setTimeout(() => trial_btn.classList.toggle('auth-block__trial-btn--popup'), 1000);
})

/* #endregion Start Trial */

/* #region Find-your-way */

// Кнопка №1, секция 1
const find_btn1 = document.querySelectorAll('.btn--find-your-way--common')[0];
find_btn1.addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio1.play();

  /* Всплывающее сообщение */
  find_btn1.classList.toggle('btn--find-your-way--common--popup');
  setTimeout(() => find_btn1.classList.toggle('btn--find-your-way--common--popup'), 1000);
})

// Кнопка №2, секция 4
const find_btn2 = document.querySelectorAll('.btn--find-your-way--common')[1];
find_btn2.addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio1.play();

  /* Всплывающее сообщение */
  find_btn2.classList.toggle('btn--find-your-way--common--popup');
  setTimeout(() => find_btn2.classList.toggle('btn--find-your-way--common--popup'), 1000);
})
/* #endregion Find-your-way*/

/* #region  Let’s get started */
const started_btn = document.querySelector('.s03--content-left__btn');
started_btn.addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio1.play();

  /* Всплывающее сообщение */
  started_btn.classList.toggle('s03--content-left__btn--popup');
  setTimeout(() => started_btn.classList.toggle('s03--content-left__btn--popup'), 1000);
})
/* #endregion Let’s get started */

/* #region  Footer_logo */
document.querySelector('.footer-logo--a').addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});
/* #endregion Footer_logo */

/* #region  Footer_nav */
/* Кнопка №1 "Why Alivio"  */
document.querySelectorAll('.footer__link')[0].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №2 "Solutions"  */
document.querySelectorAll('.footer__link')[1].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №3 "Community"  */
document.querySelectorAll('.footer__link')[2].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* Кнопка №4 "Pricing"  */
document.querySelectorAll('.footer__link')[3].addEventListener('click', function () {
  /* Одноразовое проигрывание звука */
  audio2.play();
});

/* #endregion Footer_nav */

/* #endregion Обработчики кнопок */