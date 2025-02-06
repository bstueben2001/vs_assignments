const form = document.addItem

const anchor = document.getElementById("list")

    form.addEventListener("submit",function(event){
        event.preventDefault()
        const itemName = form.title.value
        form.title.value = ""

        let newLi = document.createElement("li")

            let item = document.createElement("span")
                item.innerHTML = itemName

            let editButton = document.createElement("button")
                editButton.innerHTML = "edit"
                    //add styles for 'b1' class
                    editButton.addEventListener("click",function(){
                        console.log("This listener works")
                        //input field???
                        


                    })

            let clearButton = document.createElement("button")
                clearButton.innerHTML = "X"
                clearButton.addEventListener("click",function(){
                    console.log("it worked")
                    newLi.remove()
                    })

        newLi.append(item)
        newLi.append(editButton)
        newLi.append(clearButton)

        anchor.appendChild(newLi)
    })

const oldButtons = document.querySelectorAll(".button2")
oldButtons.forEach(button => {
    button.addEventListener("click", function(){
        const li = button.closest("li")
        li.remove()
    })
})