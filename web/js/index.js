'use strict0'

function main(){
    let container = document.querySelector("div.container");
    let cards = container.querySelectorAll("div.card");
    for (let card of cards) {
    card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    }
}
document.addEventListener("DOMContentLoaded", main)
function showDate(){
    //alert(new.Date());
}
document.getElementById("btnfecha");
refBtn.addEventListener("click", showDate);