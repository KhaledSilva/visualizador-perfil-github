import { buscarUsuarioGithub } from './api.js';
import { mostrarLoading, mostrarPerfil, limparPerfil } from './dom.js';

const botaoBuscar = document.getElementById('btn-search');
const buscarUsuario = document.getElementById('input-search');
const resultadoPerfil = document.querySelector('.profile-results');

botaoBuscar.addEventListener('click', async () => {
    const nomeUsuario = buscarUsuario.value;
    if (nomeUsuario) {
        mostrarLoading(resultadoPerfil);
        try {
            const dadosUsuario = await buscarUsuarioGithub(nomeUsuario);
            mostrarPerfil(resultadoPerfil, dadosUsuario);
        } catch (error) {
            alert('usuário não encontrado. Por favor, verifique o nome e tente novamente.');
            limparPerfil(resultadoPerfil);
        }
    } else {
        alert('nome invalido');
    }
});
