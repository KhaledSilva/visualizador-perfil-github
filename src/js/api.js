const BASE_URL = 'https://api.github.com';

export async function buscarUsuarioGithub(nomeUsuario) {
    const resposta = await fetch(`${BASE_URL}/users/${nomeUsuario}`);
    if (!resposta.ok) {
        throw new Error('Usuário não encontrado');
    }
    return resposta.json();
}
