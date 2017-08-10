let display = document.querySelector('.display_value');
let displayEval = document.querySelector('.display_eval');
let evaluation = [];
let answer;

// integer/operator input buttons

let numberInput = document.querySelectorAll('.input');

for (let i = 0; i < numberInput.length; i++) {
   numberInput[i].addEventListener('click', function(){
      evaluation += this.value;
      display.innerHTML = evaluation;
      console.log(evaluation);
      console.log(evaluation.length);
   });
}

// evalute button

let evaluate = document.querySelector('.evaluate');

evaluate.addEventListener('click', function(){
   let answer = (eval(evaluation));
   displayEval.innerHTML = '= ' + answer;
   console.log(eval(evaluation));
});

// clear button

let clear = document.querySelector('.clear');

clear.addEventListener('click', function(){
   evaluation = [];
   display.innerHTML = evaluation;
   displayEval.innerHTML = evaluation;
   console.log(evaluation);
});

// number check
