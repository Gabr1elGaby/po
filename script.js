//class active

const navbarNav = document.querySelector('.navbar-nav');


//saat di klik
document.querySelector('#menu-box').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};


//toggle kelas aktiv unutk search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


//luar sidebar agar hilang 
const menuBox = document.querySelector('#menu-box');
const sb = document.querySelector('#search-button');


document.addEventListener('click', function(e) {
    if (!menuBox.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});
