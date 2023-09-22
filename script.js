let ol = document.querySelector('ol');

function changelist() {
    let first = ol.firstElementChild;
    let last = ol.lastElementChild;
    ol.insertBefore(last, first);
}

changelist(ol)

let main = document.querySelector('main');
let section1 = main.children[1];
let section2 = main.children[2];

function changetitle1() {
    let titre1 = section1.querySelector('h2');
    let titre2 = section2.querySelector('h2');
    section1.insertBefore(titre2, titre1);
}

function changetitle2() {
    let titre1 = section1.children[1];
    let titre2 = section2.children[2];
    section2.insertBefore(titre1, titre2);
}



function removetitle2({
    let sectionrem = main.children[2];
    main.removeChild(main.section2);
});



changetitle1(section1)
changetitle2(section2)
