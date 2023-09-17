import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word",
    }
]);
const words = answer.sentence.split(" ");
console.log(words);
