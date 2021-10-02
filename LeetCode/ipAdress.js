// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
function defangIpAdress(address){
    //create an array 
    let resultArray = [];
    //loop through array
        //we search for element which equals '.'
        //we then replace element with [.]
    for(let index = 0; index < address.length; index++){
        if(address[index] === '.'){
            resultArray.push('[.]'); 
        } else {
            resultArray.push(address[index]);
        }
    }
    return resultArray;
}