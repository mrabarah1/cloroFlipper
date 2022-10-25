const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", () => {
//  // hexColor is a variable that hold #
//  let hexColor = "#";
//  for(let i = 0; i < 6; i++) {
//   hexColor = hexColor  + hex[generateRandomNum()];
//  } 
//  color.textContent = hexColor;
//  document.body.style.backgroundColor = hexColor;
// });

// // generate random number from my array
// const generateRandomNum = () => {
//  return Math.floor(Math.random() * hex.length);
// }










btn.addEventListener("click", () => {
 let hexColor = "#";
 // run a for loop to iterate the #f15856
 for(let i = 0; i < 6; i++) {
  hexColor = hexColor + hex[generateRandomNum()];
 }
 document.body.style.backgroundColor = hexColor;
 color.textContent = hexColor;
});

// function to generate a random number in the hex[] array
const generateRandomNum = () => {
 return Math.floor(Math.random() * hex.length);
}







