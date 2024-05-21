"use strict";
let nm = 8;
let corners = [
    "circle",
    "semi-circle",
    "triangle",
    "square",
    "pentagon",
    "hexagon",
    "heptagon",
    "octagon",
    "aragon",
    "decagon",
];
getFacts(randomIntFromInterval(0, corners.length));
function getFacts(nm) {
    if (corners.length > nm && Number.isInteger(nm) && nm >= 0) {
        if (document.getElementById('js-result'))
            document.getElementById('js-result').innerHTML = corners[nm];
        console.log(corners[nm]);
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
