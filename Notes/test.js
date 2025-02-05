// var buttons = document.getElementsByClassName("buttons")
// var buttons = document.querySelectorAll("buttons")

var form = document.title

var ulItem = document.getElementById("list")

form.addEventListener("submit",function(event){
    event.preventDefault()
    const newItem = form.itemName.value
    console.log("Submit value works")
    document.createElement("li")
        ulItem.append(newItem)
        ulItem.append(editButton)
        ulItem.append(clearButton)
    form.itemName.value = ""
})

var editButton = document.getElementById("b1")
    // editButton.style.???
    editButton.addEventListener("click",function(){
        console.log("Edit listener works")
        //replace textContent of newItem with input field, then replace input field with input.value
    })

var clearButton = document.getElementById("b2")
    // clearButton.style.???
    clearButton.addEventListener("click",function(){
        console.log("Clear listener works")
        const newItem = form.itemName.value
        ulItem.remove(newItem)
    })
