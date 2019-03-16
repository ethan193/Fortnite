var locations = ["Tilted Towers", "Pleasant Park", "Shifty Shafts", "Salty Springs", "Retail Row", "Paradise Palms"]

function chooseLocation() {
    document.getElementById("pickLocation").innerHTML = locations[Math.random() * 6];
}