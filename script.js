const BUTTONS = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "x", "c", 0, "=", "/"];

let buttons_container = document.getElementById("buttons-conainer")

const create_buttons = (buttons) => {
    buttons_container.innerHTML = ""
    let button_elements = buttons.map((item)=>{
        const div = document.createElement("div")
        div.className = "col-3 mb-3"
        const btn = document.createElement("btn")
        
        if(isNaN(item)){
            if (item == "c") btn.className = "clear-button"
            else if (item == "=") btn.className = "equal-button"
            else btn.className = "arith-button"
        } else btn.className = "number-button"
        
        btn.classList.add("btn")
        btn.innerText = item
        btn.addEventListener("click", ()=> onClickHandler(item))
        div.append(btn)
        return div
    })

    buttons_container.append(...button_elements)
}

create_buttons(BUTTONS)

let display = document.getElementById("display_val")

let expresstion = ""

function onClickHandler (key) {
    if (key === "c") expresstion = ""
    else if(key === "=") expresstion = eval(expresstion)
    else if (isNaN(key)) expresstion = expresstion  + " " + (key === "x" ? "*" : key) + " "
    else expresstion = expresstion + key

    display.innerText = expresstion || 0
}