var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);
var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
console.log(randomImageSrc1);
console.log(randomImageSrc2);
document.querySelector(".img1").setAttribute("src", randomImageSrc1);
document.querySelector(".img2").setAttribute("src", randomImageSrc2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
