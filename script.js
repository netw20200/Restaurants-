AOS.init({duration:1000,easing:"ease-out-cubic",once:false,offset:80});
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const active=menuToggle.classList.toggle('active');nav.classList.toggle('active');menuToggle.setAttribute('aria-expanded',active?'true':'false')});document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{menuToggle.classList.remove('active');nav.classList.remove('active');menuToggle.setAttribute('aria-expanded','false')}))}
const form=document.querySelector('#reservationForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! This demo form is ready to be connected to your booking service.');});
