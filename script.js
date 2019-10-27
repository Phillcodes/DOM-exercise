var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

/*var list = document.getElementsByClassName("list")[1];*/

var checkbox = document.getElementsByClassName("checkbox")[1];
var list = document.getElementsByClassName("list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



function addDone() {

checkbox.classList.toggle("done");
}


checkbox.addEventListener("click", addDone);

function underlineParent(event){
	target.li.classList.toggle("done");
}


/*
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

*/
function underLine(e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");

	}
}

ul.addEventListener("click", underLine);
