'use strict';

let lang = prompt("Какой язык предпочитаете?", "ru/en");
let namePerson = prompt("Введите имя");

function ifElse(){
  if (lang == "ru"){
    console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
  } else if (lang == "en"){
    console.log("Mn, Tu, Wd, Th, Fr, Sa, Sn");
  }
};

function switchCase(){
  switch (lang) {
    case "ru":
      alert("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
      break;
    case "en":
      alert("Mn, Tu, Wd, Th, Fr, Sa, Sn");
      break;
  }
};

function funcArray(){
  let langArray = [];
  langArray['ru'] = ["Пн, Вт, Ср, Чт, Пт, Сб, Вс"];
  langArray['en'] = ["Mn, Tu, Wd, Th, Fr, Sa, Sn"];

  console.log(langArray[lang]);
};

function rolePerson(){
  let message = (namePerson == "Артём") ? "Директор!" :
      (namePerson == "Максим") ? "Преподаватель" :
       "Студент!";
      console.log(message);
  };
 










ifElse();
switchCase();
funcArray();
rolePerson();