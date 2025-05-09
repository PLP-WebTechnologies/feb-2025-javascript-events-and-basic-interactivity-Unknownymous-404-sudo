const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('errorMsg');
    const userList = document.getElementById('userList');

    // Event Listener for Form Submit
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (!name || !email || !validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid name and email.';
        return;
      }

      errorMsg.textContent = '';
      addUser(name, email);
      form.reset();
    });

    // Email Validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    // Add User to List
    function addUser(name, email) {
      const div = document.createElement('div');
      div.classList.add('user');
      div.innerHTML = `
        <span>${name} (${email})</span>
        <button onclick="this.parentElement.remove()">Delete</button>
      `;
      userList.appendChild(div);
    }