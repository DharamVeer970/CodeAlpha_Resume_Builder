javascript
document.getElementById('add-education').addEventListener('click', function() {
  var educationList = document.getElementById('education-list');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'education';
  input.placeholder = 'Education';
  educationList.appendChild(input);
});

document.getElementById('add-experience').addEventListener('click', function() {
  var experienceList = document.getElementById('experience-list');
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'experience';
  input.placeholder = 'Experience';
  experienceList.appendChild(input);
});

document.getElementById('generate-resume').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var skills = document.getElementById('skills').value;
  
  var resume = document.getElementById('resume');
  resume.innerHTML = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;
});