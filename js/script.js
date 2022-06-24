// this function is to showing and hiding the navbar on small sceen

function changingNavSection() {

    let toChange = document.getElementsByClassName('navListSm');
    // gets the navlist for small screen

    let toCross = document.getElementsByClassName('hamburger');
    // gets the hamburger button

    // conditional statement of whether to display the navbar or not
    if (toChange[0].style.display == 'flex') {
        toChange[0].style.display = 'none'
    }
    else {
        toChange[0].style.display = 'flex'
    }

    toCross[0].classList.toggle('cross');

}

// this function is to showing and hiding each dropdown on navbar


var dropdown = document.getElementsByClassName('dropdown');
// gets the dropdown list element

var dropdown1 = dropdown[0];
var dropdown2 = dropdown[1];
var dropdown3 = dropdown[2];
// gets the each dropdown list

function displayingAboutDropdownHover() {
    dropdown1.style.display = 'block'
}

function displayingAboutDropdown() {
    if (dropdown1.style.display == 'none') {
        dropdown1.style.display = 'block'
    }
    else {
        dropdown1.style.display = 'none'
    }
}

function hidingAboutDropdown() {
    dropdown1.style.display = 'none'
}



function displayingWorkDropdownHover() {
    dropdown2.style.display = 'block'
}

function displayingWorkDropdown() {
    if (dropdown2.style.display == 'none') {
        dropdown2.style.display = 'block'
    }
    else {
        dropdown2.style.display = 'none'
    }
}

function hidingWorkDropdown() {
    dropdown2.style.display = 'none'
}


function displayingGalaryDropdownHover() {
    dropdown3.style.display = 'block'
}

function displayingGalaryDropdown() {
    if (dropdown3.style.display == 'none') {
        dropdown3.style.display = 'block'
    }
    else {
        dropdown3.style.display = 'none'
    }
}

function hidingGalaryDropdown() {
    dropdown3.style.display = 'none'
}








