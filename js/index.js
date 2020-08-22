'use strict';

let btn = document.getElementsByClassName('view-btn');

function button(n) {
    currentBtn(n);
}

function currentBtn(n) {
    for (let i=0; i<btn.length; i++) {
        btn[i].className = btn[i].className.replace(" active", "");
    }
    btn[n].className += " active";
}
let sectionA = document.querySelector("#section-a");
let images = document.querySelectorAll(".card-img-top");
let media_lg = window.matchMedia("(min-width: 1200px)");
let media_mob = window.matchMedia("(min-width: 598px)");
let items = document.querySelectorAll("#items");
let items_holder = document.querySelector("#items-holder");

document.querySelector("#list-btn").addEventListener('click', function() {
    button(1);

    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    sectionA.style.display = "block";

    if(media_lg.matches) {
        for (let i=0; i<items.length; i++) {
            items[i].style.width = "90%";
            items[i].style.margin = "1em";
            items_holder.style.justifyContent = "center";
        }
    } else if(media_mob.matches) {
        for (let i=0; i<items.length; i++) {
            items[i].style.width = "97%";
            items[i].style.margin = "0em";
            items_holder.style.justifyContent = "center";
        }
    }

})

document.querySelector("#grid-btn").addEventListener('click', function() {
    button(0);

    for(let i=0; i<images.length; i++) {
        images[i].style.display = ('');
        items[i].removeAttribute('style');
        items_holder.removeAttribute('style');
    }
    
})