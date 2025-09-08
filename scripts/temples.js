
console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');


button.addEventListener("click", function () {
    menu.classList.toggle('open');
    console.log(menu); 
    if (button.innerHTML ==='☰') {
        button.textContent = '❌';
    }
    else {
        button.textContent = '☰';
    }

});
