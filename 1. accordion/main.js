//input
// give a jumble word
//you have to type the correct
// - if correct, you can again play
// if false you can try again
// "Theme"
// ["t", "h", "e", "m", "e"]
// 5 => random 1 change ehemt
// 4 => random 2 change emeht
// 3 => random 1 change emeht
// 2 random 2 emeht

//loop through the arr
//initialize length
// get a random number
//exchange the value of random index and the arr
//decrement length

function makeJumble(word) {
  const letters = word.split("");
  let length = letters.length;
  letters.forEach((letter, index) => {
    const random = getRandomNumber(length);
    const temp = letters[random];
    letters[random] = letter;
    letters[index] = temp;
  });
  return letters.join("");
}
