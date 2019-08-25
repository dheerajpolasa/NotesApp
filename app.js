const chalk = require('chalk');
console.log(chalk.blue("Hello world"));
let integer = 2;
if(integer % 2 != 0) {
    console.log(chalk.green("Yes...GO GREEN"));
} else {
    console.log(chalk.bgRed("Fucked up"));
}
console.log(chalk.yellow("Yeah"));

console.log(process.argv[2])