/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}    

if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
} 

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const Linkaction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', Linkaction))

/*=============== HOME TYPED JS ===============*/
var typed = new Typed('#home-subtitle', {
      strings: ['Developer', 'Webdesigner', 'Fronted manager', 'Freelancer'],
      typeSpeed: 50,
      loop:true,
      backSpeed:40,
      backDelay:2000,
      cursor:'_'
    });

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader=()=>{
    const header = document.getElementById('header')
    this.scrollY>50 ? header.classList.add('shadow-header'):
    header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById()
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.sendForm('service_vq9yszn', 'YOUR_TEMPLATE_ID', '#contact-form', '5ONEMFFaGmHFn4yyV').then(
  (response) => {
    console.Message.textContent("Message sent successfully ✅");
  },
  (error) => {
    console.Message.textContent("Message not sent (service error) ❌");
  },
);
}

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
