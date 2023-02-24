
let myLeads = []
let oldLeads = []
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse (localStorage.getItem("myLeads"))
const deleteBtn = document.querySelector("#delete-btn")
// Grab  save btn  andstore itin a tabBtn variable
let tabBtn = document.querySelector("#tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
 const tabs = [
    {url: "https://www.linkedin.com/in/Amakalu-Vitalis/"}
 ]

 tabBtn.addEventListener("clicked", function(){
    chrome.tabs.query({active: true, currrentWindow: true} , function*(tabs){
        console.log(tabs)
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
    })
 })



 myLeads.push(tabs[0].url)
 localStorage.setItem("myLeads",JSON.stringify(myLeads))



















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

