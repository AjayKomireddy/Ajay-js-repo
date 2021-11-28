// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here BMI = mass / (height * height)
    if (mass<=0){
        return "INVALID INPUT";
    }
    else if (height<=0){
        return "INVALID INPUT";
    }
    else{
        var BMI= parseInt(mass/(height*height));
        return BMI;
    }
}


module.exports = BMICalculator;


