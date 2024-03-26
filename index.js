var add = document.getElementById("add_record");

add.addEventListener('click',function(){

var olitem = document.getElementById("olitem");
var input = document.getElementById("input").value;

var text = document.createTextNode(input);
var NewItem = document.createElement("li");

NewItem.appendChild(text);
olitem.appendChild(NewItem);
});