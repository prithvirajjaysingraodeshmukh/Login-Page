document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (!username || !password) {
        errorMessage.textContent = "Both fields are required!";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Login successful!");
    }
});
