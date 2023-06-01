// Get your button to JS and test it by logging out "Button clicked".
const Btn = document.getElementById("input-btn");
const Input = document.getElementById("input-el");
const ListEl = document.getElementById("ul-el");
const Delete = document.getElementById("delete-btn");
let myLeads = [];

//localStorage.setItem("wowo", "test for wowo");
//console.log(localStorage.getItem("wowo"));
//localStorage.clear()

// Get leads from local storage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads);
}


// Render leads
function render(leads) {
    let listItems = '';
    for(let i = 0; i < leads.length; i++){
    listItems += `<ul>
        <li> 
            <a href="${leads[i]}" target="_blank">
                ${leads[i]}
            </a>
        </li>
        </ul>`;
    }
    ListEl.innerHTML = listItems ;
};


// Push leads to the leads array when button is clicked.
function clicked() {
    let url = Input.value;
    myLeads.push(url);
    Input.value = '';
    // convert array to string using JSON.stringify() method
    let leadsString = JSON.stringify(myLeads);
    localStorage.setItem("myLeads", leadsString);
    render(myLeads);
    
};

// function to delete it all
function clear() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}

Btn.addEventListener("click", clicked);
Delete.addEventListener("dblclick", clear);

// Listen for double clicks, clear out local storage, clear out array
// clear out DOM


// Deploying to CHROME EXTENSION
// 1. Add an icon for your extension
// 2. manifest.json
// {
//     "manifest_version": 3,
//     "version": "1.0",
//     "name": "Leads Tracker",
//     "action": {
//         "default_popup":"index.html",
//         "default_icon": "icon.png"
//     }
    
// }
// 3. Go to chrome extensions
// 4. Toggle on developer mode
// 5. Choose Load Unpacked extension option
// 6. Locate your project folder and upload

