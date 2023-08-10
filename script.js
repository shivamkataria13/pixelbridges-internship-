const navBtn = document.querySelector(".navBtn")


navBtn.addEventListener('click', ()=>{
    const isOpened = navBtn.getAttribute('aria-expanded');
    if(isOpened === "false"){
        navBtn.setAttribute('aria-expanded', 'true')
    }
    else{
        navBtn.setAttribute('aria-expanded', 'false')
    }
})


// opening navbar
const navbar = document.querySelector(".navbar")
navBtn.addEventListener('click', ()=>{
    if(!navbar.classList.contains('active')){
        navbar.classList.add('active')
        
    }else{
        navbar.classList.remove('active')
    }
})


const choosers = document.querySelectorAll('.chooser')
const chooser1 = document.querySelector('.chooser1')
const chooser2 = document.querySelector('.chooser2')
const chooser3 = document.querySelector('.chooser3')
const chooser4 = document.querySelector('.chooser4')


const about1 = document.querySelector('.about1')
const about2 = document.querySelector('.about2')
const about3 = document.querySelector('.about3')
const about4 = document.querySelector('.about4')


choosers.forEach((chooser) => {
});


chooser1.addEventListener('click', ()=>{
    
    about2.classList.remove('active')
    about3.classList.remove('active')
    about4.classList.remove('active')

    chooser2.classList.remove('active')
    chooser3.classList.remove('active')
    chooser4.classList.remove('active')

    about1.classList.add('active')
    chooser1.classList.add('active')
})    

chooser2.addEventListener('click', ()=>{
    
    about1.classList.remove('active')
    about3.classList.remove('active')
    about4.classList.remove('active')

    chooser1.classList.remove('active')
    chooser3.classList.remove('active')
    chooser4.classList.remove('active')

    about2.classList.add('active')
    chooser2.classList.add('active')
})    

chooser3.addEventListener('click', ()=>{
    
    about1.classList.remove('active')
    about2.classList.remove('active')
    about4.classList.remove('active')

    chooser1.classList.remove('active')
    chooser2.classList.remove('active')
    chooser4.classList.remove('active')

    about3.classList.add('active')
    chooser3.classList.add('active')
})  

chooser4.addEventListener('click', ()=>{
    
    about1.classList.remove('active')
    about2.classList.remove('active')
    about3.classList.remove('active')

    chooser1.classList.remove('active')
    chooser2.classList.remove('active')
    chooser3.classList.remove('active')

    about4.classList.add('active')
    chooser4.classList.add('active')
})    

