// Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
  // Объявляем переменную для счетчика
  let counter;

  // Проверка строго по кнопкам "+" и "-"
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    //Находим див с числом счётчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой "+" и "-"
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  } else if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 0) {
      counter.innerText = --counter.innerText;
    }
  }
});
