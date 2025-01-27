// Take two variables as inWeekend(boolean) and isSunny(boolean) [No need of user input]
// If isWeekend and isSunny are both true, then display message "Go out and enjoy!"
// If isWeekend is true and isSunny is false, then display message "Netflix and Chill!"
// If isWeekend and isSunny are both false, then display message "You really need to focus on work!"

const isWeekend = false;
const isSunny = false;

if (isWeekend && isSunny) {
  document.write(`<h1>Go out and enjoy...!</h1>`);
} else if (isSunny || isWeekend) {
  document.write(`<h1>Netflix and Chill...!</h1>`);
} else {
  document.write(`<h1>You really need to focus on work...!</h1>`);
}
