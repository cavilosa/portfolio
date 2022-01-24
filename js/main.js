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


hexagons.forEach(each => each.addEventListener('mouseover', ()=> {
    each.style.backgroundImage = 'url("images/purple-flower.png")';
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
const toProjects = document.querySelector(".to-projects")
toProjects.addEventListener("click", (e) => {
    document.querySelector("#projects").style.display = "block";
    document.querySelector("#projects").scrollIntoView(true)
})
links.forEach(each => each.addEventListener("click", () => {
    const nameOfSection = each.children[1].classList.value
    const section = document.querySelector("#" + nameOfSection)
    // section.style.height = "100vh";
    section.style.display = "block";
    section.scrollIntoView(true);
    // console.log(section)
}))


const menuLinks = document.querySelectorAll(".dropdown-content a")
menuLinks.forEach(each => each.addEventListener("click", () => {
    // console.log(each)
    const name = each.innerHTML.toLowerCase()
    const section = document.querySelector("#" + name)
    section.style.display = "block"
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

if (window.performance) {
    // console.info("window.performance works fine on this browser");
  }
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    // console.info( "This page is reloaded" );
    const links = document.querySelectorAll(".links")
    links.forEach( each => each.style.display = "none")
  } else {
    // console.info( "This page is not reloaded");
  }
