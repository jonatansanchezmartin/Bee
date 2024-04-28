let data = [
    {id: 1, name: "Alba", description:"Hermana", email: "albasm@gmail.com"},
    {id: 2, name: "Mac", description:"Amigo de USA", email: "max.bevan@gmail.com"},
];


function readAll() {
   let tableData = document.querySelector(".table_data");
   let elements = "";
   
   data.map(obj => (
        elements += `<tr>

            <td>${obj.name}</td>

            <td>${obj.description}</td>

            <td>${obj.email}</td> 

            <td>
                <button onclick={edit(${obj.id})}>Update</button>
                <button onclick={delet(${obj.id})}>Delete</button>
            </td>

        </tr>`
   ))

   tableData.innerHTML = elements;
}

function delet(id) {
    data = data.filter( d => d.id !== id);
    readAll();
}

function update() {

    let name = document.querySelector("#uname").value;
    let description = document.querySelector("#udescription").value;
    let email = document.querySelector("#uemail").value;
    let id = parseInt(document.querySelector(".id").value);
    let index = data.findIndex ( d => d.id === id);
    data[index] = (id, name, description, email);
    document.querySelector('#create_form').style.display = "block";
    document.querySelector('#update_form').style.display = "none";

}

function edit(id) {
    document.querySelector('#create_form').style.display = "none";
    document.querySelector('#update_form').style.display = "block";
    let object = data.find(obj => obj.id === id);

    document.querySelector("#uname").value = object.name;
    document.querySelector("#udescription").value = object.description;
    document.querySelector("#uemail").value = object.email;
    document.querySelector(".id").value = object.id;
}


function create() {
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let email = document.querySelector("#email").value;
    let obj ={id: 3, name: name, description: description, email: email};
    data.push(obj);
    readAll();
}


function update() {
    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let email = document.querySelector("#email").value;
    let obj ={id: 3, name: name, description: description, email: email};
    data.push(obj);
    readAll();
    document.querySelector("#name").value = "";
}
