document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    console.log("DOM loaded")
    window.scrollTo(0,0)
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
    each.style.backgroundImage = 'url("images/purple-flower.png")';
    // each.style.background = "#0e0e0e";
    // each.style.height = "90%";
    // each.style.width = "80%";
    // each.style.margin = "0px";
    // each.style.backgroundImage =  "url('https://sebhastian.com/img/default.png')";
    // each.style.backgroundRepeat = "no-repeat";
    each.style.backgroundPosition = "center";
    each.style.backgroundSize = "contain";


    // displayInformation(each);
}))

hexagons.forEach(each => each.addEventListener("mouseleave", () => {
    each.style.backgroundImage = 'url("images/pink-honeycomb.jpg")';
    each.style.height = "100%";
    each.style.width = "100%";
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

const links = document.querySelectorAll(".main-row")
links.forEach(each => each.addEventListener("click", () => {
    const nameOfSection = each.children[1].classList.value
    const section = document.querySelector("#" + nameOfSection)
    section.style.height = "100vh";
    section.style.display = "block";
    section.scrollIntoView(true);
    // console.log(section)
}))


const menuLinks = document.querySelectorAll(".dropdown-content a")
menuLinks.forEach(each => each.addEventListener("click", () => {
    // console.log(each)
    const name = each.innerHTML.toLowerCase()
    const section = document.querySelector("#" + name)
    // console.log(section)
    section.style.height = "100vh";
    section.scrollIntoView(true);
    document.querySelector(".dropdown-content").style.display = "none"
    // console.log(section)
}))


const buttonToTop = document.querySelector(".button-to-top");

window.onscroll = () => { scrollFunction() };

async function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonToTop.style.display = "block";
      } else {
        buttonToTop.style.display = "none";
      }
}

async function moveToTop() {
    // console.log("scroll to top")
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    const links = document.querySelectorAll(".links")
    links.forEach( each => each.style.display = "none")

}


// async function displayInformation(each) {
//     // console.log("Display info is on")
//     let info = each.parentElement.nextElementSibling
//     info.style.display = "block"
// }

// async function hideInformation(each) {
//     // console.log("Display info is on")
//     let info = each.parentElement.nextElementSibling
//     info.style.display = "none"
// }



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

