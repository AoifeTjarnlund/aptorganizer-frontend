var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].addEventListener("click", function() {
        let div = this.parentElement;
        div.style.display = "none";
    })
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement(inputValue) {
    var li = document.createElement("li");
    if (inputValue === undefined){
        inputValue = document.getElementById("myInput").value;
    }
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
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

  
    span.addEventListener("click", function(){
        var div = this.parentElement;
        div.style.display = "none";
    })
    
}
(async () => {
    const komsi = await fetch("http://localhost:8080/message/all")
    const sparad = await komsi.json()

    for (i = 0; i < sparad.length; i++)
        newElement(sparad[i].txt)
})()
