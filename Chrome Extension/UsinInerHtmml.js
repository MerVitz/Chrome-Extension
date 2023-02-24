
let myLeads = ["Amakalu ", "Vitalis"]
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    console.log (myLeads)
})
for (let i= 0; i < myLeads.length; i++) {
 ulEl.innerHTML+= "<li>" + myLeads[i]


}