function Calculate(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    const result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy🧖🏻‍♂️";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "🫃🏻Overweight🙇🏻‍♂️";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity🙇🏻‍♂️";
        }
    }
}