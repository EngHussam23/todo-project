// TODO: 
// As a user, I would like to answer more questions, so you should add new three (Yes/No) questions.
// If the input was empty consider the answer as an "invalid" string.
// Consider putting all the answers into an array.
// Traverse the array and print the items on the console.
// Confirm that your code is following the single responsibility rule. Each function should only do one thing.
// All functions and variables should have a meaningful name (use camelCase).

// userName
let userName = prompt('Enter your name:');
console.log(userName);

// Gender
let gender = prompt('Enter your gender: (male or female)');
console.log(gender);
let gender_state = false;
if (gender === 'male') {
    gender_state = true;
} else if (gender === 'female') {
    gender_state = true;
} else {
    gender_state = false;
    alert('invalid gender');
}

// Age
let age = parseInt(prompt('Enter your age:'));
console.log('age = ' + age);
let age_state = false;
if (age <= 0) {
    age_state = false;
    alert('Invalid age');
} else {
    age_state = true;
}

// Welcome Message
let confirm_message = confirm('Do you want to skip the welcoming message?');
if (gender_state === false) {
    if (confirm_message === false) {
        alert('Hello ' + userName + ' !');
    }
} else if (gender_state === true) {
    if (confirm_message === false) {
        if (gender === 'male') {
            alert('Hello Mr. ' + userName + '!');
        } else if (gender === 'female') {
            alert('Hello Ms. ' + userName + '!');
        }
    }
}

let q1 = prompt('Do you love reading?');
let q1_ans = false;
if (q1 === true) {
    alert('Wow, you are awesome!');
    q1_ans = true;
} else {
    alert('I recommend you to start reading books, it\s good for you brain.');
    q1_ans = false;
}

let q2 = prompt('Do you finish your work in time?');
let q2_ans = false;
if (q1 === true) {
    alert('Great Job, you are awesome!');
    q1_ans = true;
} else {
    alert('Adding time management to your life has a huge impact on you.');
    q1_ans = false;
}

/**
 * TODO: Continue with q3 and the array
 */








// let q1 = confirm('Did you finish your assignment?');
// if (q1 === true) {
//     alert('Great Job, you are awesome!');

//     let q2 = confirm('Would you like to watch a movie?');
//     if (q2 === true) {
//         alert('Alright, have fun!');
//         let q3 = confirm('Would you like some snack with it?');
//         if (q3 === true) {
//             alert('Alright, snacks are on the way!');
//         } else {
//             alert('Alright, snacks are not on the way!');
//         }
//     } else {
//         alert('Alright, I highly recommend reading a book or taking a nap 😉');
//     }
// } else {
//     alert('Come on get to work, the assignment won\'t finish it self! 🙄');
// }
