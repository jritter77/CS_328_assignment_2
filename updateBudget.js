const budget = document.getElementById("budget");
const display = document.getElementById("budget_display");


function update() {
    let val = budget.value;

    if (val.length > 6) {
        val = val.slice(0, -6) + "," + val.slice(-6, -3) + "," + val.slice(-3);
    }
    else {
        val = val.slice(0, -3) + "," + val.slice(-3);
    }
    
    display.innerHTML = val;
}


update();

budget.oninput = update;