let overlay=document.querySelector(".popup-overlay")
let popubox=document.querySelector(".popup-box")
let add_but=document.querySelector("#add-popu-button")

add_but.addEventListener("click",function(){
    overlay.style.display="block"
    popubox.style.display="block"
})

let cancelpopu=document.querySelector("#cancle-popu")

cancelpopu.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popubox.style.display="none"
})


let book=document.querySelector("#book")
let author=document.querySelector("#author")
let short=document.querySelector("#short")
let container=document.querySelector(".container")
let addpopu=document.querySelector("#add-popu")

addpopu.addEventListener("click",function(event){
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${book.value}</h2>
            <h5>${author.value}</h5>
            <p>${short.value}</p>
            <button onclick="del(event)">delete</button>`
    container.append(div)
    overlay.style.display="none"
    popubox.style.display="none"
})

function del(event){
    event.target.parentElement.remove()
}