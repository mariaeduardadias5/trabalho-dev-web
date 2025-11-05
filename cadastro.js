document.addEventListener("DOMContentLoaded", function () {
    // --- Lógica de Login ---
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Obtém os elementos de input e seus valores
            const emailInput = document.getElementById('email');
            const senhaInput = document.getElementById('pwd');
            
            // É uma boa prática usar trim() para remover espaços em branco
            const email = emailInput.value.trim();
            const senha = senhaInput.value.trim();
            
            let erros = [];

            // --- Validação do Login ---
            
            // Validação de Email
            // Uso de expressão regular para uma validação de email mais robusta
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                erros.push("Digite um e-mail válido.");
            }
            
            // Validação de Senha
            if (!senha || senha.length < 6) {
                erros.push("A senha deve ter pelo menos 6 caracteres.");
            }

            // --- Resultado da Validação ---

            if (erros.length > 0) {
                // Se houver erros, exibe o alerta e interrompe o processo
                alert('Erro(s) no Login:\n' + erros.join("\n"));
                return;
            }

            // --- Lógica de Sucesso (Simulação de Login) ---
            
            // Simulação: Armazena o usuário logado
            localStorage.setItem('usuarioLogado', JSON.stringify({ email: email }));
            
            alert('Login realizado com sucesso!');
            // Redireciona para a home
            window.location.href = 'home.html';
        });
    }

    // --- Lógica de Cadastro ---
    const cadastroForm = document.getElementById("formCadastro");
    
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Adicionado aqui para garantir que o envio padrão não ocorra

            // Obtém os elementos de input e seus valores (usando trim() para todos)
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();
            const confirmar = document.getElementById("confirmar").value.trim();
            
            let erros = [];
            
            // Validação de Nome
            if (!nome) {
                erros.push("O nome completo é obrigatório.");
            }
            
            // Validação de Email (reutilizando a regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                erros.push("Digite um e-mail válido.");
            }
            
            // Validação de Senha
            if (!senha || senha.length < 6) {
                erros.push("A senha deve ter pelo menos 6 caracteres.");
            }
            
            // Validação de Confirmação de Senha
            if (senha !== confirmar) {
                erros.push("As senhas não coincidem.");
            }
            
            // --- Resultado da Validação ---
            
            if (erros.length > 0) {
                alert('Erro(s) no Cadastro:\n' + erros.join("\n"));
                // Não é necessário o return, pois o preventDefault já interrompe o envio
            } else {
                // --- Lógica de Sucesso (Simulação de Cadastro) ---
                
                // Simulação: Armazena o novo usuário (idealmente, isso iria para um banco de dados)
                // É necessário um ID/chave única para cada usuário, mas vamos simular o armazenamento
                const novoUsuario = { nome, email, senha }; // Não armazene a senha em texto puro em produção!
                console.log('Usuário a ser cadastrado:', novoUsuario);

                alert('Cadastro realizado com sucesso!');
                // Redireciona para a página de Login ou Home
                window.location.href = 'login.html'; // Exemplo: Redirecionar para login
            }
        });
    }
});
