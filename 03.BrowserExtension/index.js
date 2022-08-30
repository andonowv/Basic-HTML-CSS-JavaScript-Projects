let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromTheLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromTheLocalStorage){
    myLeads = leadsFromTheLocalStorage
    render(myLeads)
}
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += "<li>" + "<a href='#' target='_blank'>" + leads [i] + "</a>" + "</li> "
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function (){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


