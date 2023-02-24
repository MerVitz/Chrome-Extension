
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
// 1. store the delete button in deleteBtn varible
const deleteBtn = document.querySelector("#delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// 2. liste for the double clicks on the delete button
// 3. when clicked , clear storage, clear leads, an cler the dom

deleteBtn.addEventListener("dblclick", function () {
    console.log("Double clicked")
    localStorage.clear()
    myLeads = []
    renderLeads()
}) 

inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

    function renderLeads() {
    let listItems = ""
    for (let i= 0; i < myLeads.length; i++) {
    listItems+= `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i] }
    </a>
    </Li>`
    console.log(listItems)

    ulEl.innerHTML = listItems
}

    }
