




// agrego el formulario con el id createContact

const addForm = document.froms["createContact"];

// agrego el event listener al formulario para poder recoger los datos

addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value)
});




function validateForm(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let nickName = document.getElementById("nickName").value;
    let email = document.getElementById("email").value;
}

if(name === ""){
    alert("Nombre requerido");
    return false;
}

if(description === ""){
    alert("Al menos un apellido requerido");
    return false;
}

