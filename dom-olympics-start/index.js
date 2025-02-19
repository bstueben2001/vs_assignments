
var headerText = document.getElementById("header")

headerText.innerHTML += "<header>JavaScript Made This!!</header>"
headerText.innerHTML += "<span>Brendon</span><header>wrote the JavaScript</header>"
    // headerText.style.color = "orange"





    // var eraseButton = document.getElementById("#clear-button")

    // eraseButton.document.addEventListener("click",clear)

    // var messages = document.getElementsByClassName("#messages")

    // function clear() {
    //     messages.parentNode.removeChild(messages);
    // }

    const themeOption = document.getElementById("theme-drop-down")
    themeOption.addEventListener("change",function(event){
        const selectedOption = event.target.value
        const left = document.querySelectorAll("message left")
        const right = document.querySelectorAll("message right")
        if(selectedOption === "theme-one"){
            console.log("blue-brown, huzzah!")
            left.forEach(function(element){
                element.style.color = "blue"
            })
            right.forEach(function(element){
                element.style.color = "brown"
            })
        } else if(selectedOption === "theme-two"){
            console.log("red-black, hooray!")
            left.forEach(function(element){
                element.style.color = "red"
            })
            right.forEach(function(element){
                element.style.color = "black"
            })
        }
    })



