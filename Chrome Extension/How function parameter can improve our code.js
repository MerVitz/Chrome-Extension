
let myLeads = []
let oldLeads = []
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 tabBtn.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
  })
function render(leads) {
    let listItems = ""
    for (let i= 0; i < leads.length; i++) {
    listItems+= `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i] }
    </a>
    </Li>`
    console.log(listItems)

    ulEl.innerHTML = listItems
}

    }
deleteBtn.addEventListener("dblclick", function () {
    console.log("Double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
}) 

inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

