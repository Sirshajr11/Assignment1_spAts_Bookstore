let intro= document.querySelector('.intro');
let logo= document.querySelector('.logo-head');
let logospan= document.querySelectorAll('.log');
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logospan.forEach((span,idx)=> {
            
        
            setTimeout(()=>{
                span.classlist.add('active');
            
            },(idx+1)*400)
        })
        setTimeout(()=>{
            logospan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*50);
            });
        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh';
        },2300);
    })
})
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
Footer