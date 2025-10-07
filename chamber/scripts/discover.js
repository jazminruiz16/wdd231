console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;
import { places } from "../data/places.mjs"; 
console.log(places);
const showHere = document.getElementById("allplaces");
function displayItems(places) {
    places.forEach(place => {
        const thecard = document.createElement('div');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${place.image}`;
        thephoto.alt = place.name;
        thecard.appendChild(thephoto);
        const thetitle = document.createElement('h2');
        thetitle.innerText = place.name;
        thecard.appendChild(thetitle);
        const theaddress = document.createElement('address');
        theaddress.innerText = place.location;
        thecard.appendChild(theaddress);
        const thedesc = document.createElement('p');
        thedesc.innerText = place.description;
        thecard.appendChild(thedesc);
        showHere.appendChild(thecard);      
    });
    
}
displayItems(places);

const timeBetween = document.querySelector("#visits");
let verify=document.getElementById("null")
const theDateToday = new Date();
let lastVisit1 = window.localStorage.getItem("lastVisit-ls");
lastVisit1 = toString(lastVisit1);
verify.textContent = `Your last ${lastVisit1}`;
let lastVisit = theDateToday;
if (lastVisit1 !== "null" && lastVisit1 !== "NaN" && lastVisit1 !== "[object Undefined]") {
    lastVisit = new Date(lastVisit1);
}
else {
    lastVisit = theDateToday;
}

const days = (theDateToday - lastVisit) / 86400000;
if (days < 1) {
    timeBetween.textContent = `Welcome! Let us know if you have any questions.`;
}
else if (days >= 1 && days < 2) {
    timeBetween.textContent = `Back so soon! Awesome!`;
} else {
    timeBetween.textContent = `Your last ${lastVisit1} visited ${Math.round(days)} days ago.`;
}
const modal2 = document.querySelector('#myModalbronze');
const closeModal2 = document.querySelector('#closeModal2');
modal2.show();

closeModal2.addEventListener('click', () => {
    modal2.close();
});

let month = theDateToday.getMonth() + 1;
lastVisit = `${theDateToday.getFullYear()}-${month}-${theDateToday.getDate()}`;
localStorage.setItem("lastVisit-ls", lastVisit);




