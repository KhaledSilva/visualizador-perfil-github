export function mostrarLoading(elemento) {
    elemento.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function mostrarPerfil(elemento, dadosUsuario) {
    elemento.innerHTML = `
        <div class="profile-card">
            <img src="${dadosUsuario.avatar_url}" alt="Avatar de ${dadosUsuario.name}" class="profile-avatar"/>
            <div class="profile-info">
                <h2>${dadosUsuario.name}</h2>
                <p>${dadosUsuario.bio || 'Não possui bio cadastrada 😥.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${dadosUsuario.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${dadosUsuario.following}</span>
            </div>
        </div>
    `;
}

export function limparPerfil(elemento) {
    elemento.innerHTML = "";
}
