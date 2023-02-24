
let myLeads = ["Amakalu ", "Vitalis"]
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    console.log (myLeads)
})
 for (let i= 0; i < myLeads.length; i++) {
//  ulEl.innerHTML+= "<li>" + myLeads[i] +"</li>"
// create Element
// set text content
// append to ul
const li = document.createElement("li")
li.textContent = myLeads[i]
ulEl.append(li)


 }