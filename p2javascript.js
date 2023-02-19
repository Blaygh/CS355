'use strict'
const $ = document.querySelector.bind(document)

$('#p2btn1').addEventListener('click',p2chngDiv);
$('#p2btn2').addEventListener('click',p2chngDivB);

//page 2 div change functions
function p2chngDiv(){
    $('#p2main').className = 'altDivClass';
}

function p2chngDivB(){
    $('#p2main').className = 'main';
}

