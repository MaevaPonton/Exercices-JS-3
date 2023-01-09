/* pour afficher ou enlever du texte en fonction du bouton appuyer */

let afficher = document.querySelector("a[href='#A");
let masquer = document.querySelector("a[href='#M");
 console.log(afficher);
let text = document.getElementById("text");

masquer.addEventListener("click", () => {
    text.style.display = "none";
    /*text.classList.add('hidden') */
})

afficher.addEventListener("click", () => {
    text.style.display = "block";
    /* text.classList.remove('hidden') */

})

