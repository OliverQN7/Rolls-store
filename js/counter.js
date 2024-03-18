// Кнопки "+" и "-" счетчика и сам счетчик
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// Обработчики события по клику "+"
btnMinus.addEventListener("click", function () {
  // Проверяем чтобы счетчик был больше 0
  if (parseInt(counter.innerText) > 0) {
    // Изменяем текст в счетчике
    counter.innerText = --counter.innerText;
  }
});
// Обработчики события по клику "-"
btnPlus.addEventListener("click", function () {
  // Изменяем текст в счетчике
  counter.innerText = ++counter.innerText;
});
