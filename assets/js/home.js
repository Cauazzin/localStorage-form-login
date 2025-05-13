document.addEventListener("DOMContentLoaded", function () {
    const formPerfil = document.getElementById("formPerfil");

    // Quando o formulário for enviado
    formPerfil.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

        // Pegando os dados do formulário
        const fotoInput = document.getElementById("foto");
        const nomeInput = document.getElementById("nome");
        const bioInput = document.getElementById("bio");
        const emailInput = document.getElementById("email");
        const localizacaoInput = document.getElementById("localizacao");

        const foto = fotoInput.files[0]; // Foto selecionada
        const nome = nomeInput.value;
        const bio = bioInput.value;
        const email = emailInput.value;
        const localizacao = localizacaoInput.value;

        // Verifica se a foto foi selecionada, se não, usa uma imagem padrão
        let fotoURL = "https://i.pravatar.cc/150?img=1"; // Imagem padrão

        if (foto) {
            fotoURL = URL.createObjectURL(foto); // Cria a URL para a foto carregada
        }

        // Cria um objeto com as informações do perfil
        const perfil = {
            foto: fotoURL,
            nome: nome,
            bio: bio,
            email: email,
            localizacao: localizacao
        };

        // Salva as informações no localStorage
        localStorage.setItem("perfil", JSON.stringify(perfil));

        // Redireciona para a página de exibição do perfil
        window.location.href = "";
    });
});
