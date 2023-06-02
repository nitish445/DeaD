let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logo')
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
    logoSpan.forEach((span,idx) => {
      setTimeout(()=>{
        span.classList.add('active')
        }, 700+(idx+1)*200);
    });

    setTimeout(()=>{
    logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
        span.classList.remove('active');
        span.classList.add('fade');
            }, (idx+1)*50)
        })
    },2800);
      setTimeout(() => {
        intro.style.top= '-100vh'
        
        },3000);
    })
})



setTimeout(function(){
    document.getElementById('div1').style.visibility = "visible";
    },4500);

