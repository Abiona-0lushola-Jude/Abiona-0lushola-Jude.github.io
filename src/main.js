const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menuBtn')
const Fname = document.querySelector('#name')
const email = document.querySelector('#email')
const submit = document.querySelector('#last-child')
const message = document.querySelector('#message')

function toogle(){
    menu.classList.toggle('open')
    menuBtn.classList.toggle('open')
}

menuBtn.addEventListener('click',toogle)
menu.addEventListener('click',toogle)

// function for the contact
function contact(){
    if(Fname.value === "" || email.value === "" || message.value === ""){
        return alert("Fill in the form")
    }
}
submit.addEventListener('click',contact)

const today = new Date()
const year = today.getFullYear()
document.querySelector('#year').textContent = year