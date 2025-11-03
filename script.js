//your JS code here. If required.
window.onload = function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block"; // show button
  }

  // Form submit event
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      // Save to localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Remove if unchecked
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Update visibility of "existing user" button
    if (localStorage.getItem("username")) {
      existingBtn.style.display = "inline-block";
    } else {
      existingBtn.style.display = "none";
    }
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      alert(`Logged in as ${storedUser}`);
    }
  });
};
