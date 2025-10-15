
console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');
const listPhotos = document.getElementById('listPhotos');


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
const gridLink = document.getElementById('grid');
const listLink = document.getElementById('list');
gridLink.addEventListener("click", async function () {
    listPhotos.innerHTML = '';
    try {
        const response = await fetch("https://raw.githubusercontent.com/jazminruiz16/wdd231/main/chamber/members.json"); // Wait for the fetch to complete 
        const data = await response.json(); // Wait for the response to be converted to JSON
        // Output the fetched data
        data.industries.forEach(industries => {
            const listItem = document.createElement("figure");
            listItem.innerHTML = '<div><figcaption><span class="titlePhoto">' + industries.name + '</span><br>Adress: ' + industries.adress + '<br>Phone number: ' + industries.phonenumber + '<br>Membership level: ' + industries.membershiplevel + '<br>Information: ' + industries.information + ' </figcaption><img src="' + industries.imageurl + '" alt="' + industries.name + '" width=250 loading="lazy"></div>';
            listPhotos.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
    listPhotos.classList.add("gridclass");
    listPhotos.classList.add("directorygrid");
    listPhotos.classList.remove("listclass");
});
listLink.addEventListener("click", async function () {
    listPhotos.innerHTML = '';
    try {
        const response = await fetch("https://raw.githubusercontent.com/jazminruiz16/wdd231/main/chamber/members.json"); // Wait for the fetch to complete 
        const data = await response.json(); // Wait for the response to be converted to JSON
        // Output the fetched data
        data.industries.forEach(industries => {
            const listItem = document.createElement("div");
            listItem.innerHTML = '<p>' + industries.name + '</p><p>' + industries.adress + '</p><p>' + industries.phonenumber + '</p><p>MSL: ' + industries.membershiplevel + '</p><p>info.: ' + industries.information + '</p>';
            listPhotos.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
    listPhotos.classList.add("listclass");
    listPhotos.classList.remove("gridclass");
    listPhotos.classList.remove("directorygrid");



});
const fetchData = async () => {
    listPhotos.innerHTML = '';
    try {
        const response = await fetch("https://raw.githubusercontent.com/jazminruiz16/wdd231/main/chamber/members.json"); // Wait for the fetch to complete 
        const data = await response.json(); // Wait for the response to be converted to JSON
        // Output the fetched data
        data.industries.forEach(industries => {
            const listItem = document.createElement("figure");
            listItem.innerHTML = '<div><figcaption><span class="titlePhoto">' + industries.name + '</span><br>Adress: ' + industries.adress + '<br>Phone number: ' + industries.phonenumber + '<br>Membership level: ' + industries.membershiplevel + '<br>Information: ' + industries.information + ' </figcaption><img src="' + industries.imageurl + '" alt="' + industries.name + '" width=250 loading="lazy"></div>';
            listPhotos.appendChild(listItem);
        });

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
fetchData();

const form = document.querySelector("#form");
form.addEventListener("submit", () => {
    const date = new Date();
    document.getElementById("timestamp").value = date;
});

