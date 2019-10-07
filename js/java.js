'use strict';



var name =prompt('what\'s your name?')
alert('hello '+ name + ' welcome to my site' )

var q1 = prompt("do i like programming?")

q1 = q1.toLowerCase()

switch (q1) {

    case 'yes':
        alert("yes i realy do");
        break;
    case 'y':
        alert('yes i realy do');
        break;

    case 'no':
        alert('you are wrong');
        break;
    case 'n': alert('you are wrong');
        break;

    default: alert('answer whith yes or no please!');


}

var q2 = prompt('do i like moveis?')

q2 = q2.toLowerCase()

switch (q2) {


    case "yes":
        alert("yes i like moveis");
        break;
    case "y":
        alert('yes i like moveis');
        break;

    case 'no':
        alert('you are wrong');
        break;
    case 'n':
        alert('you are wrong');
        break;

    default: alert('answer whith yes or no please!');
}

var q3 = prompt('do i like engineering?')
q3=q3.toLowerCase()

switch (q3) {

    case "yes":
        alert("right, actually iam an engineer");
        break;
    case "y":
        alert('right, actually iam an engineer');
        break;

    case 'no':
        alert('you are wrong');
        break;
    case 'n':
        alert('you are wrong');
        break;

    default: alert('answer whith yes or no please!');
}

var q4 = prompt('do you think i like cars?')
q4 = q4.toLowerCase()

switch (q4) {

    case "yes":
        alert("right,I like cars");
        break;
    case "y":
        alert('right,I like cars');

        break;

    case 'no':
        alert('you are wrong');
        break;
    case 'n':
        alert('you are wrong');
        break;

    default: alert('answer whith yes or no please!');
}

var q5 = prompt('do you think i am happy in programing this site?')

q5 = q5.toLowerCase()

switch (q5) {

    case "yes":
        alert("right,I am very happy " + name );
        break;
    case "y": alert('right,I I am very happy' + name);
        break;

    case 'no': alert('you are wrong' + name);
        break;
    case 'n': alert('you are wrong' + name);
        break;

    default: alert('answer whith yes or no please!' + name);
}
