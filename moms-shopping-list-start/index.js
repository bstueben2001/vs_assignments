const form = document.addItem

form.addEventListener("submit",function(event){
    event.preventDefault()
    const itemName = form.title.value
    form.title.value = ""

    var newItem = [
        itemName,
        "edit",
        "X"
    ]

    var currentLi = document.getElementById("list")

    var newLi = document.createElement("li")
        newLi.textContent = newItem[0]

    var editButton = document.createElement("button")
        editButton.innerHTML = newItem[1]
            //add styles for 'b1' class

            editButton.addEventListener("click",function(){
                console.log("This listener works")
                //input field???
                const itemName = form.title.value
                newLi.textContent = itemName
            })
    
    var clearButton = document.createElement("button")
        clearButton.innerHTML = newItem[2]
            clearButton.addEventListener("click",function(){
                console.log("So does this one")

            })

    for(let i = 0; i < newItem.length; i++)
        currentLi.append(newLi)
        currentLi.append(editButton)
        currentLi.append(clearButton)

})

clearButton.addEventListener("click",function(){
    for(let i = 0; i < newItem.length; i++)
        newLi.remove(newLi)
        newLi.remove(editButton)
        newLi.remove(clearButton)
})
