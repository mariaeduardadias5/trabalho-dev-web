document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form[action='/action_page.php']");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        const email = document.getElementById("email");
        const senha = document.getElementById("pwd");
  
        let erros = [];
  
        if (!email.value || !email.value.includes("@")) {
          erros.push("Digite um email válido.");
        }
  
        if (!senha.value || senha.value.length < 6) {
          erros.push("A senha deve ter pelo menos 6 caracteres.");
        }
  
        if (erros.length > 0) {
          event.preventDefault();
          alert(erros.join("\n"));
        }
      });
    }
  });
  