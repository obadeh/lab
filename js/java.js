'use strict';

var score = 0;


var name = prompt('what\'s your name?');
alert('hello ' + name + ' welcome to my site, i will ask you some questions about me')
alert('lets go..')
var lab = [
   [
       name+ ' do you think i like programming?',
       'yes i realy do'+' >> your score is ' ,
       'you are wrong'
   ],
   [
       'do you think i like moveis?',
       'yes i like moveis'+' >> your score is ',
       'you are wrong'
   ],
   [
       'do you think i like cofee?',
       'sure, i love cofee'+' >> your score is ',
       'you are wrong'
   ],
   [
       'do you think i like cars?',
       'right, I like cars'+' >> your score is ',
       'you are wrong'
   ],
   [
       'do you think i am happy in programing this site?',
       'absolutely, I am very happy in programming  >> your score is ' ,
       'you are wrong'
   ],
];
function aboutme (){
for (var i = 0; i < lab.length; i++) {
   var currentQuestion = lab[i]; // array of 3 items [prompt, positive, negative]
   var promptIndex = 0;
   var positiveIndex = 1;
   var negativeIndex = 2;
   var currentPrompt = currentQuestion[promptIndex];
   var userResponse = prompt(currentPrompt);
   userResponse = userResponse.toUpperCase();
   var currentPositiveReply = currentQuestion[positiveIndex];
   var currentNegativeReply = currentQuestion[negativeIndex];
   switch (userResponse) {
       case 'YES':
       case 'Y':
           score++ ;
           var text = currentPositiveReply + score;
           alert(text);
           break;
       case 'NO':
       case 'N':
           alert(currentNegativeReply);
           break;
       default:
           alert(' Wrong Answer!');
   }
}}
aboutme();












// var name = prompt('what\'s your name?')
// alert('hello ' + name + ' welcome to my site')

// var q1 = prompt("do i like programming?")

// q1 = q1.toLowerCase()

// switch (q1) {

//     case 'yes':
//         alert("yes i realy do");
//         break;
//     case 'y':
//         alert('yes i realy do');
//         break;

//     case 'no':
//         alert('you are wrong');
//         break;
//     case 'n': alert('you are wrong');
//         break;

//     default: alert('answer whith yes or no please!');


// }

// var q2 = prompt('do i like moveis?')

// q2 = q2.toLowerCase()

// switch (q2) {


//     case "yes":
//         alert("yes i like moveis");
//         break;
//     case "y":
//         alert('yes i like moveis');
//         break;

//     case 'no':
//         alert('you are wrong');
//         break;
//     case 'n':
//         alert('you are wrong');
//         break;

//     default: alert('answer whith yes or no please!');
// }

// var q3 = prompt('do i like engineering?')
// q3 = q3.toLowerCase()

// switch (q3) {

//     case "yes":
//         alert("right, actually iam an engineer");
//         break;
//     case "y":
//         alert('right, actually iam an engineer');
//         break;

//     case 'no':
//         alert('you are wrong');
//         break;
//     case 'n':
//         alert('you are wrong');
//         break;

//     default: alert('answer whith yes or no please!');
// }

// var q4 = prompt('do you think i like cars?')
// q4 = q4.toLowerCase()

// switch (q4) {

//     case "yes":
//         alert("right,I like cars");
//         break;
//     case "y":
//         alert('right,I like cars');

//         break;

//     case 'no':
//         alert('you are wrong');
//         break;
//     case 'n':
//         alert('you are wrong');
//         break;

//     default: alert('answer whith yes or no please!');
// }

// var q5 = prompt('do you think i am happy in programing this site?')

// q5 = q5.toLowerCase()

// switch (q5) {

//     case "yes":
//         alert("right,I am very happy " + name);
//         break;
//     case "y": alert('right,I I am very happy' + name);
//         break;

//     case 'no': alert('you are wrong' + name);
//         break;
//     case 'n': alert('you are wrong' + name);
//         break;

//     default: alert('answer whith yes or no please!' + name);
// }






function myAge(){
var q6 = prompt('guss, how old am I??')
var myAge = 24;
var i;

for (i = 0; (i < 3); i++) {
    if (40 > q6 && q6 > 24) {
        console.log(q6)
        alert('I am younger than ' + q6);

    } else if (18 < q6 && q6 < 24) {
        alert('I am older than ' + q6);
    }

    else if (100 > q6 && q6 > 40) {
        alert(name + ' I am not that old!!');
    }
    else if (0 < q6 && q6 < 18) {
        alert(name + ' I am not that young!!');

    }
    else if (q6 == myAge) {
        score++;
        alert('that\'s right i am 24 years old >> your score is ' + score);
        break;
    }

    else if (i == 2) {
        alert('I am 24 years old');
        break;
    }
    q6 = prompt('guss, how old am I??');
}}
myAge();














function guessingGame(){
var q7= prompt('guss one of my favorit colors')
var j;
q7=q7.toLowerCase()
for(j=0 ;j<5 ;j++){


    if (q7=='blue'){
        score++
        alert('right blue is one of my favorit color '+'your score is ' + score)
        break;
    }
    else if(q7=='black'){
        score++
       alert ('right black is one of my favorit color '+'your score is ' + score)
       break;
    }
    q7= prompt('guss one of my favorit colors')
}
alert('the correct answer is : blue, black')}
guessingGame();

alert('your final score is  >>> ' + score+ '/7')