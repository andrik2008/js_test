var regex = /\w{5,5}\s\w{5,5}/g;
var input = 'We all know that Apple sucks ever since March.';
var output = input.replace(regex,"Lorem Ipsum");
console.log(output);