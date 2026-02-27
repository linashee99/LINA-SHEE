function handleRegister() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;

    if (name === "" || email === "" || pass === "") {
        document.getElementById('error-message').innerText = "Please fill all fields!";
        return;
    }

    localStorage.setItem('savedName', name);
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPass', pass);

    alert("Registration Successful!");
    
    // Change this to your actual landing page filename
    window.location.href = "home3.html"; 
}