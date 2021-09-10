var firstNumber=0;
var secondNumber=0;
var operCode = null;

function addDigit(digitToAdd){
    if (parseInt(document.getElementById('result').value) <10e+10)
    {
        
        if (document.getElementById('result').value ==0){
            document.getElementById('result').value =digitToAdd;
        }
        else {
            document.getElementById('result').value +=digitToAdd;
        }
    }

}

function operation(operationCode){
    firstNumber = document.getElementById('result').value;
    secondNumber = 0;
    operCode = operationCode;
    clearTheInput();
}

function clearTheInput(){
    document.getElementById('result').value=0;
}

function calculate(){
    if (operCode!=null)
    {
        secondNumber = document.getElementById('result').value;
        if (operCode==0){
            result = parseInt(firstNumber)/parseInt(secondNumber);
        }
        else if (operCode==1){
            result = parseInt(firstNumber)*parseInt(secondNumber);
        }
        else if (operCode==2){
            result = parseInt(firstNumber)-parseInt(secondNumber);
        }
        else if (operCode==3){
            result = parseInt(firstNumber)+parseInt(secondNumber);
        }
        else if (operCode==4){
            result = parseInt(firstNumber)/2;
        }
        document.getElementById('result').value = result;
        operCode=null;
    }
} 

function resetAll(){
    var firstNumber=0;
    var secondNumber=0;
    var operCode = null;
    clearTheInput();
}
