let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

// Toggle Navbar
menuBtn.onclick = (e) => {
  e.stopPropagation(); // prevent immediate close
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
  menuBtn.classList.toggle('fa-times'); // switch menu icon
};

document.querySelector('#menu-btn').onCLick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    menuBtn.classList.remove('fa-times');
};

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    };

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
  }
});

