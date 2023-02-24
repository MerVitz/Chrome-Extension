
let myLeads = ["Amakalu ", "Vitalis"]
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    console.log (myLeads)
})
let listItems = ""
 for (let i= 0; i < myLeads.length; i++) {
listItems+= "<li>" + myLeads[i] +"</li>"
console.log(listItems)
 }
 ///DOM manipulation has a cost
 ulEl.innerHTML = listItems