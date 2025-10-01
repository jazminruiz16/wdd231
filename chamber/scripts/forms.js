const otitle = document.querySelector("#otitle");
const output = document.querySelector("#output");
const form = document.querySelector("#form");
const review = /^[A-Za-z\s-]+$/;
function testInfo(organizationaltitle) {
    const ok = review.exec(organizationaltitle.value);
    output.textContent = ok
        ? `Thanks, your phone number is ${ok[0]}`
        : `${organizationaltitle.value} only can have alpha characters, hyphens, and spaces with a minimum of seven (7) characters `;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(otitle);
});
const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
