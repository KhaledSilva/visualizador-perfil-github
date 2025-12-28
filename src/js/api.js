const BASE_URL = 'https://api.github.com';

export async function buscarUsuarioGithub(nomeUsuario) {
    const resposta = await fetch(`${BASE_URL}/users/${nomeUsuario}`);
    if (!resposta.ok) {
        throw new Error('Usuário não encontrado');
    }
    return resposta.json();
}

export async function repositoriosUsuario(nomeUsuario) {
    const reposta = await fetch(`${BASE_URL}/users/${nomeUsuario}/repos?per_page=10&sort=created`);
    if (!reposta.ok) {
        throw new  Error('Repositórios não encontrados');
    }
    return reposta.json();
}