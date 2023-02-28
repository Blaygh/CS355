'use strict'
const $ = document.querySelector.bind(document)

$('#p1btn1').addEventListener('click', p1chngDiv);
$('#p1btn2').addEventListener('click', p1chngDivB);

//page 1 div change functions
function p1chngDiv(){
    $('#p1main').className = 'altDivClass';
};

function p1chngDivB(){
    $('#p1main').className = 'main';
};

