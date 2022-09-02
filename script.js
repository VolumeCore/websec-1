let option = document.querySelector("#optionForCalculate");
let val1 = document.querySelector("#input1");
let val2 = document.querySelector("#input2");
let res = document.querySelector("#result");

function calculate() {
    switch (option.value) {
        case "1":
            res.innerHTML = +val1.value + (+val2.value);
            break;
        case "2":
            res.innerHTML = +val1.value - (+val2.value);
            break;
        case "3":
            res.innerHTML = +val1.value * (+val2.value);
            break;
        case "4":
            if (+val2.value === 0) {
                alert("На 0 делить нельзя");
                break;
            }
            res.innerHTML = +val1.value / (+val2.value);
            break;
    }
}