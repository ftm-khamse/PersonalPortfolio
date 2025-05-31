const navBtn = document.getElementById('nav-btn');
const navList = document.getElementById('nav-list');

function shoeMenu(e){
    navList.classList.toggle('top-[9%]');
    
}

navBtn.addEventListener('click',shoeMenu);