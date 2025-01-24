
var headerText = document.getElementById("header")

headerText.innerHTML += "<header>JavaScript Made This!!</header>"
headerText.innerHTML += "<span>Brendon</span><header>wrote the JavaScript</header>"
    // headerText.style.color = "orange"





    var eraseButton = document.getElementById("#clear-button")

    eraseButton.document.addEventListener("click",clear)

    var messages = document.getElementsByClassName("#messages")

    function clear() {
        messages.parentNode.removeChild(messages);
    }