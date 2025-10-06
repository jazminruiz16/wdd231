console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;
const form = document.querySelector("#form");
const filledform = document.getElementById('filledform');
/*const params = new URLSearchParams(window.location.search);
const name = params.get('name');*/


const submitbutton = document.getElementById('button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');


const selectproduct = document.getElementById('selectproduct');
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    const listItem = document.createElement("option");
    listItem.setAttribute('value',product.id)
    listItem.textContent =  product.name;
    selectproduct.appendChild(listItem);
});

