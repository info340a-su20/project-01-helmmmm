'use strict';


// grid and list layout toggle

let btn = document.getElementsByClassName('view-btn');
let index = 0;

function button(n) {
    currentBtn(index = n);
}

function currentBtn(n) {
    for (let i=0; i<btn.length; i++) {
        btn[i].className = btn[i].className.replace(" active", "");
    }
    btn[n].className += " active";
}
let sectionA = document.querySelector("#section-a");
let images = document.querySelectorAll(".card-img-top");
let mediaLarge = window.matchMedia("(min-width: 1200px)");
let mediaMobile = window.matchMedia("(min-width: 598px)");
let items = document.querySelectorAll(".items");
let itemsHolder = document.querySelector("#items-holder");

document.querySelector("#list-btn").addEventListener('click', function() {
    button(1);

    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    sectionA.style.display = "block";

    if(mediaLarge.matches) {
        for (let i=0; i<items.length; i++) {
            items[i].style.width = "90%";
            items[i].style.margin = "1em";
            itemsHolder.style.justifyContent = "center";
        }
    } else if(mediaMobile.matches) {
        for (let i=0; i<items.length; i++) {
            items[i].style.width = "97%";
            items[i].style.margin = "0em";
            itemsHolder.style.justifyContent = "center";
        }
    }

})

document.querySelector("#grid-btn").addEventListener('click', function() {
    button(0);

    for(let i=0; i<images.length; i++) {
        images[i].style.display = ("");
        items[i].removeAttribute('style');
        itemsHolder.removeAttribute('style');
    }
    
})


// search function


let input = document.querySelector("#search-input");
let savedSection = document.querySelectorAll("ul li");
const ULSECTION = document.querySelector("#items-holder");

input.addEventListener('keyup', function() {
    let typed = $(this).val();
    let searchResults = search(typed);

    document.querySelector("ul").innerHTML = "";
    document.querySelector("ul").removeAttribute("style");
    document.querySelector("footer").removeAttribute("style");

    for (let i=0; i<searchResults.length; i++) {
        document.querySelector("ul").appendChild(searchResults[i]);
    }

    if (typed == "") {
        document.querySelector("ul").innerHTML = "";
        for (let i=0; i<savedSection.length; i++) {
            document.querySelector('ul').appendChild(savedSection[i]);
        }
    }

    if (searchResults.length == 0) {
        let noResultMsg = document.createElement('h4');
        noResultMsg.textContent = "Nothing found!";
        noResultMsg.style.margin = "3em";
        noResultMsg.style.color = "#9c9c9c";
        noResultMsg.style.fontWeight = "bold";
        document.querySelector('ul').style.justifyContent = "center";
        document.querySelector("ul").appendChild(noResultMsg);
        document.querySelector("footer").style.position = "fixed";
    }
})

function search(searchText) {
    let displaySection = ULSECTION;
    let resultArr = [];
    searchText = searchText.toLowerCase();
    

    for (let i=0; i<displaySection.children.length; i++) {
        if (displaySection.children[i].id.toLowerCase().includes(searchText)) {
            resultArr.push(displaySection.children[i]);
        } 
    }

    return resultArr;
}