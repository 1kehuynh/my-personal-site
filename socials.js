let emailbutton = document.getElementById('email-button');
let hidden = document.getElementById('hidden');
emailbutton.addEventListener('click', ()=> {
    hidden.innerText = "The email button does nothing because I don't want you to email me. It is only here for visuals and for fun. Comment through stardance instead.";
})