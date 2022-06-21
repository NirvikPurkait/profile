function changingNavSection() {

    let toChange = document.getElementsByClassName('navListSm');

    let toCross = document.getElementsByClassName('hamburger');

    if (toChange[0].style.display == 'flex') {
        toChange[0].style.display = 'none'
    }
    else {
        toChange[0].style.display = 'flex'
    }

    toCross[0].classList.toggle('cross');

}