let display = document.querySelector('.display');
let evaluation = [];

// number input buttons

let numberInput = document.querySelectorAll('.number');

for (let i = 0; i < numberInput.length; i++) {
   numberInput[i].addEventListener('click', function(){
      evaluation += this.value;
      display.innerHTML = evaluation;
      console.log(evaluation);
   });
}

// operator input buttons

let operatorInput = document.querySelectorAll('.operator');

for (let i = 0; i < operatorInput.length; i++) {
   operatorInput[i].addEventListener('click', function(){
      evaluation += this.value;
      display.innerHTML = evaluation;
      console.log(evaluation);
   });
}

// evalute button

let evaluate = document.querySelector('.evaluate');

evaluate.addEventListener('click', function(){
   display.innerHTML = (eval(evaluation));
   console.log(eval(evaluation));
});

// clear button

let clear = document.querySelector('.clear');

clear.addEventListener('click', function(){
   evaluation = [];
   display.innerHTML = evaluation;
   console.log(evaluation);
});

// length check

if (evaluation.length > 15) {
   console.log('too long!');
}
