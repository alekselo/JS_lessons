let str = prompt("Введите строку").trim();

function mamba(){
  if (!isNaN(str)){
    alert("Это не строка!");
  } else if (str.length > 30){
    console.log(str.substr(0,30)+"...");
  } else if (str.length < 30){
    console.log(str);
  }
};


mamba();