// templates strings
const title = 'Best reads of 2021';
const author =  'Clementous';
const likes =  30; 


// concatenation way

//let result = 'The blog called '  +  title +  ' by ' +  author + ' has ' + likes + ' likes';
//console.log(result);

// template string way or template literial

//let result = 'the blog called TITLE by AUTHOR has LIKES likes';
// replace with the following below


// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);



// creating html templates 

let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span> This blog has ${likes} likes</span>
`;

console.log(html);
