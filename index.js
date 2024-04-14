import inquirer from "inquirer";
const randomNumbr = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { message: "Enter your number from 1 to 6: ", type: "number", name: "numberGuessed" }
]);
if (answer.numberGuessed === randomNumbr) {
    console.log("Congratulation! You guessed right number ");
}
else {
    console.log("sorry wrong number please Try again!");
}
