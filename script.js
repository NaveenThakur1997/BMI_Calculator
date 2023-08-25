
document.querySelector(".submit").addEventListener("click", function() {
    var weight = parseInt(document.querySelector(".weights").value);
    var height = parseInt(document.querySelector(".heights").value);
    

    if (isNaN(weight) || weight <= 0) {
        document.querySelector(".result").style.display = "initial";
        document.querySelector(".result").innerHTML = "Please Enter a valid Weight";
    } else if (isNaN(height) || height <= 0) {
        document.querySelector(".result").style.display = "initial";
        document.querySelector(".result").innerHTML = "Please Enter a valid Height";
    } else {
        document.querySelector(".result").style.display = "block";
        var bmi = (weight / ((height * height) / 10000)).toFixed(2);
        document.querySelector(".result").innerHTML = "Your BMI is: " + bmi;
    }
});
