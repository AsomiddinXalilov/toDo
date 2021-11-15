var list = document.getElementById("list")

button.addEventListener("click", function(event){
    event.preventDefault()


    var newList = document.createElement("li")
    newList.textContent=input.value
    newList.setAttribute("class", "item")
    list.appendChild(newList)
    input.value=""
})

input.addEventListener("keyup", function(e){
    if (e.which === 13){
        var newList = document.createElement("li")
        newList.textContent=input.value
        newList.setAttribute("class", "item")
        list.appendChild(newList)
        input.value=""
    }

})