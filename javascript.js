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

$('#p1btn1').addEventListener('click', p1chngDiv);
$('#p1btn2').addEventListener('click', p1chngDivB);

//page 1 div change functions
function p1chngDiv(){
    $('#p1main').className = 'altDivClass';
};

function p1chngDivB(){
    $('#p1main').className = 'main';
};

$('#p2btn1').addEventListener('click',p2chngDiv);
$('#p2btn2').addEventListener('click',p2chngDivB);

//page 2 div change functions
function p2chngDiv(){
    $('#p2main').className = 'altDivClass';
}

function p2chngDivB(){
    $('#p2main').className = 'main';
}


