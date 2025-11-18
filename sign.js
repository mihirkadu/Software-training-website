document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    contactNo: document.getElementById("contactNo").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value
  };

  if (user.password !== user.confirmPassword) {
    document.getElementById("message").innerText = "Passwords do not match!";
    document.getElementById("message").style.color = "red";
    return;
  }

  const response = await fetch("http://localhost:5129/api/User/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  const data = await response.json();
  document.getElementById("message").innerText = data.message;
});
