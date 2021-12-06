document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded")
});

// document.querySelector(".name").addEventListener("mouseover", nameMeaning);
// document.querySelector(".name").addEventListener("mouseleave", nameBack);

// async function nameMeaning(event) {
//     event.preventDefault();

//     let name = document.querySelector(".name-meaning")
//     console.log("meaning", name)
//     name.style.display = "inline"
// }

// async function nameBack(event) {
//     event.preventDefault();
//     let name = document.querySelector(".name-meaning")
//     console.log("name back", name)
//     name.style.display = "none";
// }

let hexagons = document.querySelectorAll(".hexagon");

// hexagons.forEach(each => each.addEventListener('mouseover', ()=> {
//     each.style.backgroundImage = 'url("images/flower.jpg")';
//     // each.style.backgroundRepeat = "no-repeat";
//     each.style.backgroundPosition = "center";
//     each.style.backgroundSize = "contain";

//     displayInformation(each);
// }))

// hexagons.forEach(each => each.addEventListener("mouseleave", () => {
//     each.style.backgroundImage = 'url("images/pink-honeycomb.jpg")';
//     each.style.backgroundSize = "cover";

//     hideInformation(each)
// }))
hexagons.forEach(each => each.addEventListener('mouseover', ()=> {
    each.style.backgroundImage = 'url("images/flower.jpg")';
    each.style.backgroundRepeat = "no-repeat";
    each.style.backgroundPosition = "center";
    each.style.backgroundSize = "contain";

    // displayInformation(each);
}))

hexagons.forEach(each => each.addEventListener("mouseleave", () => {
    each.style.backgroundImage = 'url("images/pink-honeycomb.jpg")';
    each.style.backgroundSize = "cover";

    // hideInformation(each)
}))

// Making visible dropdown menu
document.querySelector(".dropdown-button").addEventListener("click", dropdownMenu);

async function dropdownMenu(e){
    e.preventDefault();
    let content = document.querySelector(".dropdown-content")
    content.style.display = "block"
}

document.querySelector(".dropdown-content").addEventListener("mouseleave", dropdownMenuClose);

async function dropdownMenuClose(e){
    e.preventDefault();
    document.querySelector(".dropdown-content").style.display = "none"
}

async function displayInformation(each) {
    // console.log("Display info is on")
    let info = each.parentElement.nextElementSibling
    info.style.display = "block"
}

async function hideInformation(each) {
    // console.log("Display info is on")
    let info = each.parentElement.nextElementSibling
    info.style.display = "none"
}

// window.addEventListener('scroll',(event) => {
//     console.log('Scrolling...');
// });

// document.querySelector(".scroll-down").addEventListener("click", scrollDown)

// async function scrollDown(e) {
//     console.log("Scroll")
//     e.preventDefault;
//     let element = document.querySelector(".main")
//     document.querySelector(".main").style.display = "block"
//     element.style.top = "10px"

// }

// async function scroll() {
//     document.querySelector(".main").scrollIntoView({block: "center", behavior: "smooth"});
// }

