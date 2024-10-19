
function calc() {
  let fromUnit = Number(document.querySelector(".from").value);
  let toUnit = Number(document.querySelector(".to").value);
  let number = document.querySelector(".number-input").value;

  document.querySelector('.result').innerHTML = 'Result: ' +((toUnit * number) / fromUnit);
    
}

function reset(){
  document.querySelector(".number-input").value = '';
  document.querySelector('.result').innerHTML = 'Result: ';
  document.querySelector(".to").value = 0.001;
  document.querySelector(".from").value = 0.001;
}
