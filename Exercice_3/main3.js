/* pour changer la couleur du texte en fonction du bouton appuyé */

let green = document.querySelector(".color.green");
console.log(green)
let red = document.querySelector(".color.red");
console.log(red)
let blue = document.querySelector(".color.blue");
console.log(blue)
let text = document.getElementById("text");
console.log(text)

green.addEventListener ("click", () => {
    text.style.color = "green";
})

red.addEventListener ("click", () => {
    text.style.color = "red";
})

blue.addEventListener ("click", () => {
    text.style.color = "blue";
})
