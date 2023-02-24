
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

//localStorage.setItem( "myName", "Amakalu italis" )
let nem = localStorage.getItem("myName")
console.log(nem)
let mum = localStorage.getItem("Mum")
console.log(mum)
//localStorage.setItem("Mum", "Lonora Ikleng")
localStorage.clear()








inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    inputEl.value = ""
    renderLeads()
    console.log (myLeads)
})

    function renderLeads() {
    let listItems = ""
    for (let i= 0; i < myLeads.length; i++) {
    //listItems+= "<li> <a target='_blank'  href='" + myLeads[i] +"'  >" + myLeads[i] +"</a></li>"
    listItems+= `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i] }
    </a>
    </Li>`

    console.log(listItems)}

    ulEl.innerHTML = listItems
}




