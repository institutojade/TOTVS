//BOTÃO SUBMIT
function onClick() {
    //VERIFICAR NOME COMPLETO
    if(document.getElementById("fname").value == ""){
        document.getElementById('fname').style.borderColor = 'red';
        } else {
            document.getElementById('fname').style.borderColor = 'lightgrey';
        }

    //VERIFICAR E-MAIL
    if(document.getElementById("email").value == ""){
        document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = 'lightgrey';
        }

    //VERIFICAR ENDEREÇO
    if(document.getElementById("adr").value == ""){
        document.getElementById('adr').style.borderColor = 'red';
        } else {
            document.getElementById('adr').style.borderColor = 'lightgrey';
        }

    //VERIFICAR CIDADE
    if(document.getElementById("city").value == ""){
        document.getElementById('city').style.borderColor = 'red';
        } else {
            document.getElementById('city').style.borderColor = 'lightgrey';
        }

    //VERIFICAR ESTADO
    if(document.getElementById("state").value == ""){
        document.getElementById('state').style.borderColor = 'red';
        } else {
            document.getElementById('state').style.borderColor = 'lightgrey';
        }

    //VERIFICAR NOME NO CARTÃO
    if(document.getElementById("cname").value == ""){
        document.getElementById('cname').style.borderColor = 'red';
        } else {
            document.getElementById('cname').style.borderColor = 'lightgrey';
        }

    //VERIFICAR NÚMERO NO CARTÃO
    if(document.getElementById("ccnum").value == ""){
        document.getElementById('ccnum').style.borderColor = 'red';
        } else {
            document.getElementById('ccnum').style.borderColor = 'lightgrey';
        }

    //VERIFICAR DATA DE VALIDADE MÊS
    if(document.getElementById("expmonth").value == ""){
        document.getElementById('expmonth').style.borderColor = 'red';
        } else {
            document.getElementById('expmonth').style.borderColor = 'lightgrey';
        }
    
     //VERIFICAR DATA DE VALIDADE ANO
     if(document.getElementById("expyear").value == ""){
        document.getElementById('expyear').style.borderColor = 'red';
        } else {
            document.getElementById('expyear').style.borderColor = 'lightgrey';
        }
    
    //VERIFICAR CVV
    if(document.getElementById("cvv").value == ""){
        document.getElementById('cvv').style.borderColor = 'red';
        } else {
            document.getElementById('cvv').style.borderColor = 'lightgrey';
        }
}