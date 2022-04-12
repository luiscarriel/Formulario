const btnValidar = document.getElementById("btn")


function validar(){
const nome = document.getElementById("nome").value;
const sobrenome = document.getElementById("sobrenome").value;
const email = document.getElementById("email").value;
const empresa = document.getElementById("empresa").value;
const ddd = document.getElementById("ddd").value;
const telefone = document.getElementById("telefone").value;

    if(nome == ""){
        alert("Nome obrigatório");
    }
    else if(nome.length >= 20){
        alert("Limite atingido")
    }

    if(sobrenome == ""){
        alert("Sobrenome obrigatório")
    }

    if(empresa == ""){
        alert("Empresa obrigatório")
    }

    if(email == ""){
        alert("Email obrigatório")
    }

    if(ddd == ""){
        alert("DDD obrigatório")
    }
    else if(ddd.length >= 3){
        alert("DDD: Limite atingido max 2 caractere")
    }

    if(telefone == ""){
        alert("Telefone obrigatório")
    }
    
}

btnValidar.addEventListener("click", validar)