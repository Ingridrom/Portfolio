
function validatefield(){
    const name = document.getElementById("name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const msj_error = document.getElementById("msj_error");
    
    msj_error.style.padding = "20px";
    
    var text;
    if(name.length < 2){
      text = "Enter a valid name";
      msj_error.innerHTML = text;
      return false;
    }

    if (last_name.length<2){
      text = "Enter a valid last name";
      msj_error.inertHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 3){
      text = "Enter a valid email";
      msj_error.innerHTML = text;
      return false;
  }
    if(isNaN(phone) || phone.length < 10){
      text = "Enter a valid phone";
      msj_error.innerHTML = text;
      return false;
    }

    alert("Information successfully sent");
    return true;
  }


function limpiar() {
  document.getElementById ("myform").reset();
}

