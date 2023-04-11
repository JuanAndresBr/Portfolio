export function testInputs(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; 
  var errors = {};
  if (inputs.name.length > 30) {
    errors.name = "Nombre debe ser menor a 30 caracteres";
  } else if (!inputs.name) {
    errors.name = "Por favor ingrese el nombre";
  }else if(inputs.email.length>50){
    errors.email ="El email debe ser menor de 50 caracteres"
  } else if (!inputs.email) {
    errors.email = "Por favor ingrese el email";
  }else if(!regexEmail.test(inputs.email)){
    errors.email="Ingrese un email correcto por favor"
  }else if(inputs.message.length>500){
    errors.message ="El email debe ser menor de 50o caracteres"
  } else if (!inputs.message) {
    errors.message = "Por favor ingrese el mensaje";
  }
  return errors

}
