const pagenavSlide = () => {
    const burger = document.querySelector('.burger');
    const pagenav = document.querySelector('.pagenav-links');
    const pagenavLinks = document.querySelectorAll('.pagenav-links li');
    
    
    burger.addEventListener('click', ()=> {
        //Toggle Pagenav
        pagenav.classList.toggle('pagenav-active');
       
        //Animate Links
        pagenavLinks.forEach((link,index)=> {
            if(link.style.animtion){
                link.style.animation = '';
            } else {
                link.style.animation = `pagenavLinkFade .5s ease forwards ${index / 7+1}s`;
                }
            });
        //Burger Animation
        burger.classList.toggle('toggle');
        });
    
}

pagenavSlide();
