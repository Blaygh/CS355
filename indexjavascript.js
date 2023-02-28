'use strict'

const $ = document.querySelector.bind(document)


$("#indexbtn1").addEventListener('click', indexchngDiv);
$("#indexbtn2").addEventListener('click', indexchngDivB);


// Index div change functions
function indexchngDiv(){
    $('#indexmain').className = 'altDivClass';
}

function indexchngDivB(){
    $('#indexmain').className = 'main';
}
