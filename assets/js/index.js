'use strict';


// Написать обработчик на событие клик для кнопки, который при одинарном клике на кнопку будет выводить алерт ('Single'), а при двойном кликебудет выводить alert ('double')
ПРи этом событие одинарного клика срабатывать не должно

const btn = document.getElementById("testButton");
btn.addEventListener("click", createClickHandler());

function createClickHandler() {
  let timer = null;
  let clicks = 0;
  return (e) => {
    clicks++;
    if(clicks >= 2) {
      clearTimeout(timer)
      alert ('double');
      clicks = 0;
      return;
    }
    timer = setTimeout(() =>{
      if(clicks === 1) {
        alert ('single');
      }
      click = 0;
    }, 300)
  }
}

// Task 2

const listContainer = document.querySelector(".list-container");
listContainer.addEventListener("click", mainListHandler);

const list = document.querySelectorAll(".listContainer > li");

function mainListHandler({target}) {
  const li = target.closest("li");
  if(li) {
    li.innerHTML += "!";
  }
}



const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", addBtnClickHandler)

function addBtnClickHandler () {
  const li = document.createElement("li");
  li.innerText = "Added Item";
  listContainer.append(li);
}

// Task 3 есть кнопка, которая генерирует квадраты с рандомным цветом. При клике на каждый квадрат, выводить в консоль его цвет

