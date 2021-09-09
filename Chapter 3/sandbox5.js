// for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop', i)
// }
// console.log('loop Finished');

// cycling thru an array 
// const names = ['shuan', 'mario','clem'];

// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// while loop
//const names = ['shaun', 'mario', 'clem'];
// let i = 0 
// while(i <5){
//     console.log('in loop: ', i);
//     i++;
// }

//let i = 0;
// while(i < names.length){
//      console.log(names[i]);
//        i++;
// }

// do while loops
// 

// // if statements
// const age = 25;
// if(age > 20){
//   console.log('you are over 20 years old')
// }

// const ninjas =['shaun', 'clemmyclem', 'rondell', 'mitch']
// if(ninjas.length > 3){
//   console.log("That's a lot of ninjas")
// }

// How to check the current password length

//else if statement
// const password = 'p@s';
// if(password.length >= 12){
//   console.log('that password is awesome');
// } else if(password.length >= 8){
//   console.log('That password is long enough');
// } else {
//   console.log('password is not long enough')
// }

//logical operators * OR || and AND &&

// const password = 'p@ss';
// //the below line checks for # of characters and the @ 
// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is awesome');
//   //
// } else if(password.length >= 8 || password.includes('@')){
//   console.log('That password is long enough');
// } else {
//   console.log('password is not long enough')
// }

// logical NOT (!)

// let user = false;
// if(!user){
//   console.log('You Must Be Logged in to continue');

// }
// console.log(true);
// console.log(false);

// Break and continue

//code for breaking out of a forloop

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//   console.log('Your score: ', scores[i]);
//   if(scores[i] === 100){
//   console.log('You da man, you got the stop score!');
//   break;
//   }
// }

// code for using continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//   if(scores[i] === 0){
//     continue;
//   }

//   console.log('Your score: ', scores[i]);
//   if(scores[i] === 100){
//   console.log('You da man, you got the stop score!');
//   break;
//   }
// }

// switch statements
const grade = "P";
switch(grade){
  case 'A':
    console.log('Your AWESOME, You got an A!')
    break; 
  case 'B':
    console.log('Your AWESOME, You got an B!')
    break; 
  case 'C':
    console.log('Your AWESOME, You got an C!')
    break; 
  case 'D':
    console.log('Your AWESOME, You got an D!')
    break; 
  case 'E':
    console.log('Your AWESOME, You got an E!')
    default:
      console.log('Not valid Grade')
}

