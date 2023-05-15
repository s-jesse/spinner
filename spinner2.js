//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let array = ["|", "\\", "-", "|", "-", "/", "|"]

for (let i = 0; i < array.length; i++) {

  setTimeout(() => {
  process.stdout.write(`\r ${array[i]}`);
}, 1000 * i);

};

// setTimeout(() => {
//   process.stdout.write('\r/');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\'); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|'); 
// }, 900);