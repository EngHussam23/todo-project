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
if (q1 === 'yes') {
    alert('Wow, you are awesome!');
    q1_ans = true;
} else if (q1 === 'no') {
    alert('I recommend you to start reading books, it\s good for you brain.');
    q1_ans = false;
} else {
    q1_ans = 'invalid';
    alert('Invalid answer.');
}

let answers;
let q2 = prompt('Do you finish your work in time?');
let q2_ans = false;
if (q2 === 'yes') {
    alert('Great Job, you are awesome!');
    q2_ans = true;
} else if (q2 === 'no') {
    alert('Adding time management to your life has a huge impact on you.');
    q2_ans = false;
} else {
    q2_ans = 'invalid';
    alert('Invalid answer.');
}

let q3 = prompt('Do you drink water every morning?');
let q3_ans = false;
if (q3 === 'yes') {
    alert('Great Job, you are on the way to a healthy life!');
    q3_ans = true;
} else if (q3 === 'no') {
    alert('Thats not good, you need to stay hydrated!');
    q3_ans = false;
} else {
    q3_ans = 'invalid';
    alert('Invalid answer.');
}
answers = { Q1: q1_ans, Q2: q2_ans, Q3: q3_ans };
printAnswers(answers);

function printAnswers(ans_arr) {
    console.log(ans_arr);
}