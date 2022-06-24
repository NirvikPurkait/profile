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


var dropdownList = document.getElementsByClassName('dropdownList');
// gets the dropdown list element

var dropdownList1 = dropdownList[0];
var dropdownList2 = dropdownList[1];
var dropdownList3 = dropdownList[2];
// gets the each dropdown list


function displayingAboutDropdown() {

    dropdownList1.classList.toggle('hide')
}
















function displayingWorkDropdown() {

    if (dropdownList2.style.display == 'block') {
        dropdownList2.style.display = 'none';
    }
    else {
        dropdownList2.style.display = 'block'
    }
}
function displayingGalaryDropdown() {

    if (dropdownList3.style.display == 'block') {
        dropdownList3.style.display = 'none';
    }
    else {
        dropdownList3.style.display = 'block'
    }
}