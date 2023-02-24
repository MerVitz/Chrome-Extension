
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputs = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
// console.log(myLeads)
// // myleads fro string to array
// myLeads = JSON.parse(myLeads)
// console.log(myLeads)
// // to push new item to the array
// myLeads.push("Leonora Ikileng")
// console.log(myLeads)
// //the array to the string
// myLeads = JSON.stringify(myLeads)
// console.log( typeof myLeads)



inputs.addEventListener("click", function() {
    myLeads.push (inputEl.value)
    inputEl.value = ""
    // Saving the array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
   

    renderLeads()

    // to verify that it works
    console.log( localStorage.getItem(myLeads) )




    
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


