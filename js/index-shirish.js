const listdiv = document.querySelector(".students-list");
// const name1 =  document.getElementById("name");
// const email =  document.getElementById("email");
// const address =  document.getElementById("address");
// const age =  document.getElementById("age");
// const gender =  document.querySelector(".gender");
// const ptext = document.querySelector('p');

let formItems = [];
const addItem = (e)=>{
  e.preventDefault();
  let item = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    age: document.getElementById("age").value
  }

  var newEntry = `
  <div class="student-info">
      <h5>Name:</h5> <p class="name">${item.name}</p>
      <h5>Age:</h5> <p class="age">${item.age}</p>
      <h5>Email:</h5> <p class="email">${item.email}</p>
      <h5>Address:</h5> <p class="address">${item.address}</p>
      <h5>Gender:</h5> <p class="name"></p>
      
            <div class="icons">
            <i class="fas fa-edit edit"></i>
            <i class="fas fa-trash-alt delete"></i>
            </div>
  </div>
  `;
        
  listdiv.innerHTML = newEntry;
  formItems.push(item);
  document.querySelector('form').reset();

  console.log(formItems);
  localStorage.setItem("studentsList", JSON.stringify(formItems));
}

document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelector("button").addEventListener("click", addItem);
});

        
