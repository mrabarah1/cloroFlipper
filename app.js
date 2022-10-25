const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
 // get random number between 0 - 3 colors[]
 const randomNumber = generateRandomNum();
 
 document.body.style.backgroundColor = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

// function to generate random number from my array
const generateRandomNum = () => {
 return Math.floor(Math.random() * colors.length);
}


















