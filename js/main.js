document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded")
});

document.querySelector(".name").addEventListener("mouseover", nameMeaning);
document.querySelector(".name").addEventListener("mouseleave", nameBack);

async function nameMeaning(event) {
    event.preventDefault();

    let name = document.querySelector(".name-meaning")
    console.log("meaning", name)
    name.style.display = "inline"
}

async function nameBack(event) {
    event.preventDefault();
    let name = document.querySelector(".name-meaning")
    console.log("name back", name)
    name.style.display = "none";
}

let hexagons = document.querySelectorAll(".hexagon");

hexagons.forEach(each => each.addEventListener('mouseover', ()=> {
    each.style.backgroundImage = 'url("images/flower.jpg")';
    each.style.backgroundRepeat = "no-repeat";
    each.style.backgroundPosition = "center";
    each.style.backgroundSize = "cover";
}))

hexagons.forEach(each => each.addEventListener("mouseleave", () => {
    each.style.backgroundImage = 'url("images/pink-honeycomb.jpg")';
}))