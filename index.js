const logo = document.querySelector('.logo');
const subs = document.querySelector('.subscribe');

window.addEventListener('load',()=>{
    logo.addEventListener('click',()=>{
        window.location.pathname = '/index.html'
    })

    subs.addEventListener('click',()=>{
        window.location.pathname = '/src/pages/subscribe/index.html'
    })
})