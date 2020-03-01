var afbeeldingen = ['images/galaxy-s4.png', 'images/ipad.jpg', 'images/laptop.jpg'];
var max = afbeeldingen.length;
var randomIndex = 0;
function showMedia() {
    randomIndex = Math.floor((Math.random() * max));
    document.getElementById('media').src = afbeeldingen[randomIndex];
}