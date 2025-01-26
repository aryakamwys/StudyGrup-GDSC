const globalVariable = "Ini Global Variables";  
  
function parentFunction() {  
  var parentVariable = "Ini Variable Induk";  
  
  function closures() {  
    var closuresVariable = "Ini Local Variables";  
    return closuresVariable + " dan " + parentVariable;  
  }  
  
  return closures();  
}  
  
console.log(parentFunction()); // Output: Ini Local Variables dan Ini Variable Induk  
