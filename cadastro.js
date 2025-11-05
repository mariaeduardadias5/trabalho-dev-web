document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("formCadastro");
  
    if (cadastroForm) {
      cadastroForm.addEventListener("submit", function (event) {
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const confirmar = document.getElementById("confirmar");
  
        let erros = [];
  
        if (!nome.value.trim()) {
          erros.push("O nome completo é obrigatório.");
        }
  
        if (!email.value || !email.value.includes("@")) {
          erros.push("Digite um email válido.");
        }
  
        if (!senha.value || senha.value.length < 6) {
          erros.push("A senha deve ter pelo menos 6 caracteres.");
        }
  
        if (senha.value !== confirmar.value) {
          erros.push("As senhas não coincidem.");
        }
  
        if (erros.length > 0) {
          event.preventDefault();
          alert(erros.join("\n"));
        }
      });
    }
  });
  
