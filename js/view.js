'use strict';
const id =  new URLSearchParams(window.location.search).get('id'); //to get id=value
const view = document.querySelector(".view-list");
const deleteBtn = document.querySelector(".delete");
const updateBtn = document.querySelector(".update");

// VIEW INDIVIDUAL MODE
const showStudent = async () => {
  const response = await fetch("http://localhost:3000/students/" + id);
  const students = await response.json();
  
  const template = `
  Name:<p class="student-data">${students.name}</p><br>
  Address:<p class="student-data">${students.address}</p><br>
  Email:<p class="student-data"></p>${students.email}<br>
  Age:<p class="student-data">${students.age}</p>
  `;

  view.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', ()=> showStudent());

const editData = document.querySelector('.student-data');

// DELETE MODE
deleteBtn.addEventListener('click', async (e) => {
  const response = await fetch('http://localhost:3000/students/' + id, {
    method: 'DELETE'
  });

  window.location.replace('/index.html');
});


// Update

const form2 = document.querySelector('.form2');
const updateStudent = async (e) => {
  e.preventDefault();

  let doc2 = {
    name: form2.name.value,
    age: form2.age.value,
    address: form2.address.value,
    email: form2.email.value
  }
  
  await fetch('http://localhost:3000/students/' + id, {
    method: 'PUT',
    body: JSON.stringify(doc2),
    headers: {'Content-Type': 'application/json'}
  });

  window.location.replace('/index.html');

}

form2.addEventListener('submit', updateStudent);
