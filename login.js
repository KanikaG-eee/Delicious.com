function login(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Dummy credentials for demo purposes
    const validEmail = "admin@example.com";
    const validPassword = "123456";
  
    if (email === validEmail && password === validPassword) {
      // Save login status in localStorage (optional)
      localStorage.setItem("isLoggedIn", "true");
  
      // Redirect to the menu page
      window.location.href = "menu.html";
    } else {
      alert("Invalid email or password!");
    }
  
    return false;
  }