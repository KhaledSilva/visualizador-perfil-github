import { buscarUsuarioGithub, repositoriosUsuario } from './api.js';
import { mostrarLoading, mostrarPerfil, limparPerfil } from './dom.js';

const botaoBuscar = document.getElementById('btn-search');
const buscarUsuario = document.getElementById('input-search');
const resultadoPerfil = document.querySelector('.profile-results');

botaoBuscar.addEventListener('click', async () => {
    const nomeUsuario = buscarUsuario.value;
    if (!nomeUsuario) {
        alert('Por favor, digite um nome de usuário do GitHub.');
        return;
    }
    mostrarLoading(resultadoPerfil);
    try {
        const dadosUsuario = await buscarUsuarioGithub(nomeUsuario);
        const reposUsuario = await repositoriosUsuario(nomeUsuario);
        console.log(reposUsuario);
        mostrarPerfil(resultadoPerfil, dadosUsuario, reposUsuario);
    } catch (error) {
        console.error('Erro ao buscar perfil do usuário',error);
        alert('Usuário não encontrado. Por favor, verifique o nome e tente novamente.');
        limparPerfil(resultadoPerfil);
    }
});
