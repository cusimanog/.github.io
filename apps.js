const navSlide=()=>{
    const burger = document.querySelectorelector('.burger');
    const nav= document.querySelector('.page-nav-links');
    
    burger.addeventlistener('click',()=>{
        nav.classList.toggle('page-nav-active');
    });
}
navSlide();
