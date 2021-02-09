"use strict";

const guessBot = function() {
  let randomNumber = 36;
  return function(){
    let userNumber = prompt("Угадай число от 0 до 100!");
    if (userNumber === null){
      alert("Игра окончена!");
   } else if (isNaN(userNumber)){
     alert("Введи число!");
     play();     
   } else if (+userNumber > randomNumber){
     alert("Загаданное число меньше!");
     play();
   } else if (+userNumber < randomNumber){
     alert("Загаданное число больше!");
     play();
   } else if (+userNumber == randomNumber){
     alert("Поздравляю, Вы угадали!!!");
   }
  };
};

const play = guessBot();

const goPlay = function(){
  let quest = confirm("Хочешь поиграть?!")
  if (quest === true){
    play();
  } else alert("До свидания!");
};

goPlay();



