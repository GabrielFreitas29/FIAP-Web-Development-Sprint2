const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

  loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (username === "admin" && password === "123") {

      message.style.color = "lightgreen";

      message.textContent = "Login realizado com sucesso!";

      setTimeout(() => {

        window.location.href = "dashboard.html";

      }, 1000);

    } else {

        message.style.color = "red";

        message.textContent = "Usuário ou senha incorretos.";

        const loginBox = document.querySelector(".login-box");

        loginBox.classList.add("shake");

        setTimeout(() => {
        loginBox.classList.remove("shake");
        }, 400);
        }

  });

}
