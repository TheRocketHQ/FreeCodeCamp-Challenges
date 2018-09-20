let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d)/; // Change this line
let result = pwRegex.test(sampleWord);