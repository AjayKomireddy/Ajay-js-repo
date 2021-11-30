
function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence===false){
        return "You shouldn't drive"
    }
    else if(hasDrivingLiscence===true){
        if((isTired===true)||(isSober===false)){
            return "You shouldn't drive"
        }
    }
    return "You can drive"
}

module.exports = CanDrive;
