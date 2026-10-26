window.onload = function() {

const links = {
  blackjack: "https://trinket.io/embed/python3/01072787ca84", 
  connectfour: "https://trinket.io/embed/python3/e4fada7cb2ea"
};

let params = new URLSearchParams(document.location.search);
let project = params.get("project")


   
const frame = document.getElementById("frame");


if (Object.hasOwn(links, project)) {
  frame.src = links[project];
}

}

