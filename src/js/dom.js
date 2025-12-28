export function mostrarLoading(container) {
    container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function mostrarPerfil(container, dadosUsuario, reposUsuario) {

    const repositoriosHTML = reposUsuario && reposUsuario.length > 0 ? reposUsuario.map(repo => `
        <a href="${repo.html_url}" target="_blank">
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐ Stars: ${repo.stargazers_count}</span>
                    <span>🍴 Forks: ${repo.forks_count}</span>
                    <span>👀 Watchers: ${repo.watchers_count}</span>
                    <span> 💻 Language: ${repo.language || 'Nenhuma informada'}</span>
                </div>
            </div>
        </a>
        `).join(''): `<p>Nenhum repositório encontrado.</p>`;

    container.innerHTML = `
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

        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
            ${repositoriosHTML}
            </div>
        </div>
    `;
}

export function limparPerfil(container) {
    container.innerHTML = "";
}
