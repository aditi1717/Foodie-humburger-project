const hamburgerIcon=document.querySelector('.hamburger-menu-container');
const headerContent=document.querySelector('.header-content');
const closeIcon=document.querySelector('.close-icon');
const goTo=document.querySelector('.go-to-top');
const mainContainer=document.querySelector('.container');
const navBar=document.querySelector('.navbar-content')
hamburgerIcon.addEventListener('click',(e)=>{
        headerContent.classList.add('menu-open');
        e.stopPropagation();
    
})
closeIcon.addEventListener('click',(e)=>{
       headerContent.classList.remove('menu-open');
})

navBar.addEventListener('click',(e)=>{
    e.stopPropagation();
})
goTo.addEventListener('click',()=>{
        mainContainer.scroll(0,0);
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open');
})