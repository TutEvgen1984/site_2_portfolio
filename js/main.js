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

document.querySelector('.sign-in--dialog__btn-login').addEventListener("click", btn_login);

function btn_login() {
  alert("Вы вошли на сайт");
}

/* #region Обработчики кнопок */
// К сожалению, прямое взаимодействие с псевдоэлементами ::before и ::after через JavaScript или jQuery невозможно, так как они не являются частью DOM.

/* #region Start Trial */

const trial_btn = document.querySelector('.auth-block__trial-btn');
trial_btn.addEventListener('click', function () {
  trial_btn.classList.toggle('auth-block__trial-btn--popup');
  setTimeout(() => trial_btn.classList.toggle('auth-block__trial-btn--popup'), 1000);
})

/* #endregion Start Trial */

/* #region Find-your-way */

// Кнопка №1, секция 1
const find_btn1 = document.querySelectorAll('.btn--find-your-way--common')[0];
find_btn1.addEventListener('click', function () {
  find_btn1.classList.toggle('btn--find-your-way--common--popup');
  setTimeout(() => find_btn1.classList.toggle('btn--find-your-way--common--popup'), 1000);
})

// Кнопка №2, секция 4
const find_btn2 = document.querySelectorAll('.btn--find-your-way--common')[1];
find_btn2.addEventListener('click', function () {
  find_btn2.classList.toggle('btn--find-your-way--common--popup');
  setTimeout(() => find_btn2.classList.toggle('btn--find-your-way--common--popup'), 1000);
})
/* #endregion Find-your-way*/

/* #region  Let’s get started */
const started_btn = document.querySelector('.s03--content-left__btn');
started_btn.addEventListener('click', function () {
  started_btn.classList.toggle('s03--content-left__btn--popup');
  setTimeout(() => started_btn.classList.toggle('s03--content-left__btn--popup'), 1000);
})
/* #endregion Let’s get started */

/* #endregion Обработчики кнопок */