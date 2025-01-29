const globalVariable = "Ini Global Variables";  
  
function parentFunction() {  
  const parentVariable = "Ini Variable Induk";  
  
  function closures() {  
    const closuresVariable = "Ini Local Variables";  
    return closuresVariable + " dan " + parentVariable;  
  }  
  
  return closures();  
}  
  
console.log(parentFunction()); // Output: Ini Local Variables dan Ini Variable Induk  
