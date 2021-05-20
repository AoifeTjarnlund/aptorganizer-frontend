var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.cgitreateTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].addEventListener = function() {
        let div = this.parentElement;
        div.style.display = "none";
        console.log("hallå");
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").nodeValue;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("You must write something");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\y00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}