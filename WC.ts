import inquirer from "inquirer";

const answer: {
  sentence : string
} = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
      message : "Enter your sentence to count the word",
    }
])

const words = answer.sentence.trim().split(" ")
console.log(`Youe sentence word count is ${words.length}`);
