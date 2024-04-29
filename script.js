let textt = document.querySelector(".display");


function calculate(input){
    textt.value += input;
}
function Evaluate(){
    try {
        
        textt.value = eval(textt.value);
    } catch (error) {
        textt.value = "Error..."
    }
}
function Clear(){
    textt.value = " ";
}