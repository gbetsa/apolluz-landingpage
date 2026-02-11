document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector("button[type='submit']");

    // Criar overlay de carregamento
    const loadingOverlay = document.createElement("div");
    loadingOverlay.style.position = "fixed";
    loadingOverlay.style.top = "0";
    loadingOverlay.style.left = "0";
    loadingOverlay.style.width = "100%";
    loadingOverlay.style.height = "100%";
    loadingOverlay.style.background = "rgba(0, 0, 0, 0.5)";
    loadingOverlay.style.display = "flex";
    loadingOverlay.style.justifyContent = "center";
    loadingOverlay.style.alignItems = "center";
    loadingOverlay.style.zIndex = "1000";

    const loadingElement = document.createElement("div");
    loadingElement.textContent = "Enviando...";
    loadingElement.style.background = "white";
    loadingElement.style.color = "black";
    loadingElement.style.padding = "15px 30px";
    loadingElement.style.borderRadius = "5px";
    loadingElement.style.fontSize = "18px";
    loadingElement.style.fontWeight = "bold";

    loadingOverlay.appendChild(loadingElement);
    document.body.appendChild(loadingOverlay);

    // Desabilita o botão
    submitButton.disabled = true;

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const dataInput = document.getElementById("data").value;
    const [ano, mes, dia] = dataInput.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`; // Formato DD/MM/AAAA

    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const mensagem = document.getElementById("mensagem").value;

    const templateParams = {
        nome,
        email,
        telefone,
        data: dataFormatada,
        origem,
        destino,
        mensagem,
    };

    try {
        await emailjs.send("service_d0u6pqy", "template_8ldhy4e", templateParams, "bHe9vaBhHtk0NBuk1");

        // Exibir mensagem de sucesso na tela
        loadingElement.textContent = "E-mail enviado com sucesso!";

        // Adicionar estilo para a mensagem de sucesso
        loadingElement.style.background = "#CF652D";
        loadingElement.style.color = "white";
        loadingElement.style.fontSize = "20px";
        loadingElement.style.padding = "20px 40px";
        loadingElement.style.fontWeight = "bold";

        form.reset(); // Reseta o formulário após o envio
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        // Exibir mensagem de erro na tela
        loadingElement.textContent = "Ocorreu um erro. Tente novamente.";

        loadingElement.style.background = "red";
        loadingElement.style.color = "white";
        loadingElement.style.fontSize = "20px";
        loadingElement.style.padding = "20px 40px";
        loadingElement.style.fontWeight = "bold";
    } finally {
        // Remover o overlay de carregamento após 3 segundos
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 3000);

        // Habilitar o botão
        submitButton.disabled = false;
    }
});

