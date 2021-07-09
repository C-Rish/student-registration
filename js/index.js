const listdiv = document.querySelector(".students-list");
const para = document.querySelector('.new-div p');
const studentAdd = document.querySelector(".student-section");


const loadStudents = async () => {
  let url = 'http://localhost:3000/students';

  const response = await fetch(url);
  const students = await response.json();
  
  let template = '';
  students.forEach(student1 => {
    template += `
    <div class = "student">
      <p><span>Name:</span><small>${student1.name} </small</p>
      <p><span>Address:</span><small>${student1.address} </small</p>
      <p><span>Age:</span><small>${student1.age} </small</p>
      <p><span>Email:</span><small>${student1.email} </small</p>
      <a href = "/view.html?id=${student1.id}" class = "view-link">View</a>
    </div>
    `
  });

  studentAdd.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', ()=> loadStudents());

// CREATE MODE
const form = document.querySelector('.form1');
const createStudent = async (e) => {
  e.preventDefault();

  const doc = {
    name: form.name.value,
    age: form.age.value,
    address: form.address.value,
    email: form.email.value
  }

  await fetch('http://localhost:3000/students', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: {'Content-Type': 'application/json'}
  });

  window.location.replace('/index.html');

}

form.addEventListener('submit', createStudent);

