"use strict";
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
const userOne = { name: "Ahmed", score: 125 };
function formatUser(utili) {
    console.log(`${utili.name} a un score de ${utili.score}`);
}
formatUser(userOne);
formatUser({ name: "rassoul", score: 156 });
