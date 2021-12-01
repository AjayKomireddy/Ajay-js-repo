function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
    // var newArr=[]
    // for(var i=0;i<arr.length;i++){
    //     if(arr[i]%2==0){
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr
    const result = arr.filter(num => num%2==0);
    return result
}

function multiplyByN(arr, n) {
  
    function multi(num){
        return num*n;
    }
    return arr.map(multi);
}


function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    var newArr2=[]
    for(var i=0;i<arr.length;i++){
        if(i!=n){
            newArr2.push(arr[i])
        }   
    }
    return newArr2
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}