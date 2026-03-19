// This JavaScript was last updated by the skill: Javascript Standardizer on 2026-03-19 21:50
var App = App || {};

App.initCounter = function initCounter() {
  const countElement = document.getElementById("count");
  const incrementButton = document.getElementById("increment");

  let count = 0;

  function renderCount() {
    countElement.textContent = String(count);
  }

  incrementButton.addEventListener("click", () => {
    count += 1;
    renderCount();
  });
};

App.initCounter();
