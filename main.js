class RandomError extends Error{
    constructor(message){
        super(message);
        this.name = "Just some Error";
    }
}

class NotNumberError extends Error{
    constructor(message){
        super(message);
        this.name = "Non-Number Error";
    }
}
class OperationError extends Error{
    constructor(message){
        super(message);
        this.name = "Operation Error";
    }
}

function calculate(){
    let toOutput;
    let output = document.getElementById("output");
    try{
        let n1 = Number(document.getElementById("firstNum").value);
        let n2 = Number(document.getElementById("secondNum").value);
        let operation = document.getElementById("operator"); 
        if(isNaN(n1) || isNaN(n2)){
            throw new NotNumberError("Inputs contain non-numerical values!");
        }
        if(operation.value=="+"){
            toOutput = n1+n2;
        }
        else if(operation.value=="-"){
            toOutput = n1-n2;
        }
        else if(operation.value=="/"){
            toOutput = n1/n2;
            if(n2 == 0){
                throw new OperationError("Indivisible by 0");
            }
        }
        else{
            toOutput = n1*n2;
        }
    }catch(err){
        if(err instanceof NotNumberError){
            console.error(err.name + ": " + err.message);
            toOutput = "Non-valid Input"
        }
        else if (err instanceof OperationError){
            console.error(err.name +": " + err.message);
            toOutput = err.message;
        }
        else{
            console.error(err.name + ": " + "Some other error...")
            toOutput = "Seems we ran into some issues..."
        }
    }finally{
        document.getElementById("firstNum").value = "";
        document.getElementById("secondNum").value = "";
        output.textContent = toOutput;
    }
}

function consoleLogDemo(){
    console.log("Console Log Demo");
}

function consoleErrorDemo(){
    console.error("Console Error Demo");
}

function consoleDir(){
    console.dir(document.head);
}

function consoleDirxml(){
    console.dirxml(document.body);
}

function consoleError(){
    let msg = "Uh-oh!";
    console.error({msg});
}

const label = 'Log Group'
function consoleGroupStart(){
    console.group(label);
}

function consoleGroupEnd(){
    console.groupEnd(label);
}

function consoleTable(){
    console.table([
        {
            operation: "add",
            number: "1",
        },
        {
            operation: "subtract",
            number: "2",
        },
        {
            operation: "divide",
            number: "3",
        },
        {
            operation: "multiply",
            number: "4",
        }
    ])
}

const timeLabel = 'Timer'
function startTimer(){
    console.info("Timer Started!");
    console.time(timeLabel);
}

function endTimer(){
    console.info("Timer Ended!");
    console.timeEnd(timeLabel);
}

function consoleTrace(){
    const traceTest = () => { deep(); };
    const deep = () => { deeper(); };
    const deeper = () => { deepest(); };
    const deepest = () => { console.trace(); };
    traceTest(); 
}

function globalErrorThrower(){
    throw new RandomError("UH-OH");
}

function globalError(){
    try{
        globalErrorThrower();
    }catch(err){
        console.log(err.name);
    }
}

function clearConsole(){
    console.clear();
}
