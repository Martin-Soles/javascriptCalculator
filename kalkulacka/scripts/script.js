let expression = [];
let ANS;
function addToExpression(value){
    expression.push(value);
}

function printDislpay(){
    document.getElementById("calculator-dislpay").innerHTML = expression.join(" ");
}

function getResult(){
    let result = eval(expression.join("").toString());
    document.getElementById("calculator-dislpay").innerHTML = result;
    ANS = result;
} 

function getANS(){
    document.getElementById("calculator-dislpay").innerHTML ="ANS";
    expression.push(ANS);
}
function deleteLastItem(){
    expression.pop();
    printDislpay();
}
function deleteAll(){
    expression.splice(0, expression.length);
    printDislpay();
}

    