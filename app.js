#! /usr/bin/env node
import inquirer from "inquirer";
const computerNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "usernumber",
        type: "number",
        message: "Please enter a number between 1 - 10 :",
    },
]);
if (answer.usernumber === computerNumber) {
    console.log("congratulation! you enter a right number.");
}
else {
    console.log("worng number please enter a right number.");
}
