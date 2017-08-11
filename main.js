// global variables

let display = document.querySelector('.display_value');
let displayEval = document.querySelector('.display_eval');
let evaluation = [];
let lastEval = [];

// integer/operator input buttons

let input = document.querySelectorAll('.input');

for (let i = 0; i < input.length; i++) {
   input[i].addEventListener('click', function(){
      evaluation += this.value;
      display.innerHTML = evaluation;
   });
}

// square root button

let sqRoot = document.querySelector('.sqRoot');

sqRoot.addEventListener('click', function(){
   lastEval = [];
   let answer = (math.eval(evaluation));
   displayEval.innerHTML = Math.sqrt(answer);
   lastEval.push(display.innerHTML);
   lastEval.push(displayEval.innerHTML);
});

// evalute button

let evaluate = document.querySelector('.evaluate');

evaluate.addEventListener('click', function(){
   let answer = (math.eval(evaluation));
   displayEval.innerHTML = answer.toLocaleString({minimumFractionDigits: 2});;
   lastEval.push(display.innerHTML);
   lastEval.push(displayEval.innerHTML)
});

// clear button

let clear = document.querySelector('.clear');

clear.addEventListener('click', function(){
   evaluation = [];
   display.innerHTML = evaluation;
   displayEval.innerHTML = evaluation;
});

// memory button

let memory = document.querySelector('.memory');

memory.addEventListener('click', function() {
   display.innerHTML = lastEval[0];
   displayEval.innerHTML = lastEval[1];
   lastEval = [];
});
