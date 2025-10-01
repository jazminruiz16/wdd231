const params = new URLSearchParams(window.location.search);
const name = params.get('first'); // "John"
const age = params.get('age'); // "30"
console.log(params.get('first'));