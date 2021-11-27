// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here BMI = mass / (height * height)
    if(mass<=0 ){
        return "INVALID INPUT";
    }
    else if(height<=0 ){
        return "INVALID INPUT";
    }
    else{
    var bmi=parseInt(mass/(height*height));
    return bmi;
    }

}
module.exports = BMICalculator;



