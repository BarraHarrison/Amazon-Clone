document.addEventListener('DOMContentLoaded', (event) => {
    //  JavaScript code here

    const imgs = document.querySelectorAll('.header-slider ul img');
    const prev_btn = document.querySelector('.control_previous');
    const next_btn = document.querySelector('.control_next');

    
    let n = 0;
    
    function changeSlide(){
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
            
        }
        imgs[n].style.display = 'block';
    }
    changeSlide();
    console.log(n);
    
    prev_btn.addEventListener('click', (e)=>{
        e.preventDefault(); // Prevents the default anchor action
        if(n > 0){
            n--;
        }else{
            n = imgs.length - 1;
        }
        changeSlide();
        console.log(e)
    })
    next_btn.addEventListener('click', (e)=>{
        e.preventDefault(); // Prevents the default anchor action
        if(n < imgs.length - 1){
            n++;
        }else{
            n = 0;
        }
        changeSlide();
        console.log(e);
    })
    
    const scrollContainer = document.querySelectorAll('.products');
    for (const item of scrollContainer) {
        item.addEventListener('wheel', (evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
        });
    }



});












