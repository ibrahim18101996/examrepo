'use strict'
var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

var doing1 ='';
var time1 ='';
var whatToDo =[];


function render(doing1,time1){
    this.doing1 = doing1;
    this.time1 = time1;
    
    doing1 = getElementById('doing');
    time1 = getElementById('time');
    // var hala =document.getElementById('form');
    for(var i=0 ;i< 5;i++){
        var ule1 = document.createElement('ul');
        var lie1 = document.createElement('li');
        ule1.appendChild(lie1);
        lie1.textContent = getElementById('doing');
        whatToDo.push(doing1);
        var lie2 = document.createElement('li');
        ule1.appendChild(lie2);
        lie2.textContent =getElementById('time');
        whatToDo.push(time1);
        
        // form.appendChild(ule1);
        
    }
    var add = document.getElementById('submit');
    add.addEventListener('submit',whatToDo);
    setItem();
}
render();
function setItem(){
    var submit =JSON.stringify(add);
    localStorage.setItem('newValue',submit);
}
function gitItem(){
if (localStorage.getItem('newValue')){
    var newValue =localStorage.getItem('newValue');
    add =JSON.parse(newValue);
}
}
gitItem();