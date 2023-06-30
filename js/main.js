
var dropDownNav = document.getElementById("dropdown-navbar");

function slideDropdownMenu() {
    /* Changes the #dropdown-navbar classlist thus expands/contracts the navbar. Rest of the animation in styles.css*/

    if (dropDownNav.className == "slidenavup") {
        dropDownNav.classList.replace("slidenavup", "slidenavdown");
    } else if (dropDownNav.className == "slidenavdown") {
        dropDownNav.classList.replace("slidenavdown", "slidenavup");
    } else {
        dropDownNav.className = "slidenavdown"
    }
}

function closeDropDownMenu() {
    /* Empties #dropdown-navbar classlist when window is resized above 730px 
    and uncheck #hamburger-menu-icon */

    let windowWidth = document.documentElement.clientWidth
    let hamburgerMenu = document.getElementById("hamburger-menu-icon")

    if (windowWidth > 700) {
        if (dropDownNav.className != "") {
            dropDownNav.className = "";
            hamburgerMenu.checked = false;
        }
    }
}

window.addEventListener("resize", closeDropDownMenu);

function incrementBasketItems() {
    /* Adds one to basket badge when 'Add to basket clicked'  */
    const numberBadge = document.getElementById("basket-badge");
    const numberBadgeSpan = document.getElementById("basket-badge").firstElementChild;
    let numberOfItems = document.getElementById("basket-badge").firstElementChild.innerHTML;

    numberBadge.style.display = numberOfItems >= 0 ? "inline-block" : "none"
    document.getElementById("basket-badge").firstElementChild.innerHTML = numberOfItems === 0 ? 1 : parseInt(numberOfItems) + 1;

    /* Centers numbers of two digits */
    if (numberOfItems == 9) {
        numberBadgeSpan.style.left = "-9px"
    }
}

function addOnClick() {
    /* Adds onclick attributes to all #buy-buttons */
    let addToBasketButtons = document.getElementsByClassName("buy-button");

    Array.from(addToBasketButtons).forEach(element => {
        element.setAttribute("onclick", "incrementBasketItems()")
    });
}


    var priceBoxes = Array.from(document.querySelectorAll(".price-box")); 
    var nonDisplayedItems = priceBoxes.filter(element => priceBoxes.indexOf(element) > 3);
    nonDisplayedItems.forEach(element => element.style.display ="none");
    
    
        

function showOnlyFirstFourItems() {
    /* Maximizes the number of visible .price-boxes at 3. If "Show More" btn is clicked expands the visible list of items */
    const showMoreButton = document.querySelector(".expand-button");
    showMoreButton.addEventListener("click", showMoreItems);
}

function showMoreItems() {
    
    let firstFourNonDisplayed = [];    
    
    for (let i = 0; i < 4; i++) {
        let shifted = nonDisplayedItems.shift()
        firstFourNonDisplayed.unshift(shifted) 
      } 

    firstFourNonDisplayed.forEach(element => {
        element.style.display = "initial";

    })
}


/* Function calls */

closeDropDownMenu()
addOnClick()
showOnlyFirstFourItems()