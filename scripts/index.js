
console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');


button.addEventListener("click", function () {
    menu.classList.toggle('open');
    if (button.innerHTML === '☰') {
        button.textContent = '❌';
        header.style.height = '300px';

    }
    else {
        button.textContent = '☰';
        header.style.height = '150px';

    }

});

const modal = document.querySelector('#myModal');
const closeModal = document.querySelector('#closeModal');
modal.showModal(); // display the modal dialog right away.
// Usually you will want to wait for a user action to show the modal dialog
closeModal.addEventListener('click', () => {
    modal.close();
});

const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');
const homeLink = document.getElementById('home');
oldLink.addEventListener("click", function () {
    let old = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 2000;
    });
    listPhotos.innerHTML = '';
    old.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
newLink.addEventListener("click", function () {
    let newest = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2000;
    });
    listPhotos.innerHTML = '';
    newest.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
largeLink.addEventListener("click", function () {
    let large = temples.filter(temple => {
        const area = temple.area;
        return area >= 90000;
    });
    listPhotos.innerHTML = '';
    large.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
smallLink.addEventListener("click", function () {
    let small = temples.filter(temple => {
        const area = temple.area;
        return area <= 10000;
    });
    listPhotos.innerHTML = '';
    small.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
homeLink.addEventListener("click", function () {
    listPhotos.innerHTML = '';
    temples.forEach(temple => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
        listPhotos.appendChild(listItem);
    });
});
const figureTemple = temples.map((temple) => {
    const listItem = document.createElement("figure");
    listItem.innerHTML = '<figcaption><span class="titlePhoto">' + temple.templeName + '</span><br>LOCATION: ' + temple.location + '<br>DEDICATED: ' + temple.dedicated + '<br>SIZE: ' + temple.area + ' sq ft</figcaption><img src="' + temple.imageUrl + '" alt="' + temple.templeName + '" loading="lazy">';
    listPhotos.appendChild(listItem);
});
