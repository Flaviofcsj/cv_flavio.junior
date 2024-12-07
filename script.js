document.addEventListener('DOMContentLoaded', function() {
    // Selecionando o formulário
    const form = document.getElementById('form-contato');

    // Selecionando o local onde vou exibir a mensagem de retorno
    const feedbackElement = document.getElementById('mensagem-feedback');

    // Função para validar o formulário
    function validarFormulario(event) {
        event.preventDefault(); 

        // Obtendo os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verificando se todos os campos foram preenchidos
        if (nome === "" || email === "" || mensagem === "") {
            // Exibindo a mensagem de erro
            feedbackElement.style.color = "red"; 
            feedbackElement.textContent = "Você deve preencher todos os campos!";
        } else {
            // Exibindo a mensagem de sucesso
            feedbackElement.style.color = "green"; 
            feedbackElement.textContent = "Enviado com sucesso!";
            
            // Limpando os campos após o envio bem-sucedido
            form.reset();
        }
    }

    // Adicionando o ouvinte de evento para o envio do formulário
    form.addEventListener('submit', validarFormulario);
});
