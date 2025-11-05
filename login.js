document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');

    // Verifica se o formulário existe na página
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão

            const emailInput = document.getElementById('email');
            const senhaInput = document.getElementById('pwd');
            
            const email = emailInput.value.trim();
            const senha = senhaInput.value.trim();
            
            let erros = [];

            // --- Validação Completa ---
            
            if (!email || !email.includes("@")) {
                erros.push("Digite um email válido.");
            }
            
            if (!senha || senha.length < 6) {
                erros.push("A senha deve ter pelo menos 6 caracteres.");
            }

            // --- Resultado da Validação ---

            if (erros.length > 0) {
                // Se houver erros, exibe o alerta e interrompe o processo
                alert(erros.join("\n"));
                return;
            }

            // --- Lógica de Sucesso (Simulação de Login) ---

            // Armazena o usuário logado (simulação)
            localStorage.setItem('usuarioLogado', JSON.stringify({ email }));
            
            alert('Login realizado com sucesso!');
            window.location.href = 'home.html';
        });
    }
});
