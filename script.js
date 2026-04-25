var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function()
{
popupoverlay.style.display="block"
popupbox.style.display="block"
})
 var cancelbutton=document.getElementById("cancel-popup")
 cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("Book-Title-input")
var authorinput=document.getElementById("Book-Author-input")
var bookShortdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${authorinput.value}</h5>
            <p>${bookShortdescriptioninput.value}</p>
       <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
   popupbox.style.display="none"
})
function deletebook(event)
{
   event.target.parentElement.remove()
} 