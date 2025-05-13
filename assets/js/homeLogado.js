document.addEventListener("DOMContentLoaded", function () {
    // Recupera as informações do perfil do localStorage
    const perfil = JSON.parse(localStorage.getItem("perfil"));

    // Verifica se o perfil existe no localStorage
    if (perfil) {
        const container = document.getElementById("container");

        // Cria o HTML do card com as informações do perfil
        const cardHTML = `
            <div class="card">
                <img src="${perfil.foto}" alt="Foto de Perfil" class="profile-img">
                <h2>${perfil.nome}</h2>
                <p>${perfil.bio}</p>
                <div class="info">
                    <p><strong>Email:</strong> ${perfil.email}</p>
                    <p><strong>Localização:</strong> ${perfil.localizacao}</p>
                </div>
            </div>
        `;

        // Exibe o card no container
        container.innerHTML = cardHTML;
    } else {
        // Caso não tenha perfil no localStorage
        alert("Perfil não encontrado.");
    }
});
