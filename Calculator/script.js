const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let str = "";
let operatorAdded = false;
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value == "=") {
            str = eval(str);
            input.value = str;
            operatorAdded = false;
        } 
        
        else if (value == "AC") {
            str = "";
            input.value = str;
            operatorAdded = false;
        } 
        
        else if (value == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        
        } 
        
        else if (['+', '-', '*', '/', '%'].includes(value)) {
            if (!operatorAdded) {
                str += value;
                input.value = str;
                operatorAdded = true;
            }
        } else {
            str += value;
            input.value = str;
            operatorAdded = false;
        }
    });
});