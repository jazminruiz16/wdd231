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