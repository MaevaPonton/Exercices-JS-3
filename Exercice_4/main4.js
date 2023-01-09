/* changer la couleur de la bordure en fonction de si les mots de passe sont pareils ou non */

let password = document.getElementById("password")
console.log(password)
let confirmPassword = document.getElementById("confirmPassword")
console.log(confirmPassword)
let button = document.getElementById("button")


button.addEventListener('click', () => 
{
    if (confirmPassword.value == password.value)
    {
        password.style.border='3px solid green',
        confirmPassword.style.border='3px solid green';
    } else { 
    password.style.border='3px solid red',
    confirmPassword.style.border='3px solid red';
    }
        
})

