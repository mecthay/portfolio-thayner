// Seleciona o botão e o corpo da página
const btnTema = document.getElementById('btnTema');
const body = document.body;

// Verifica se já existe um tema salvo no navegador do usuário
const temaSalvo = localStorage.getItem('tema');

// Se o tema salvo for escuro, aplica a classe e muda o texto do botão
if (temaSalvo === 'escuro') {
    body.classList.add('dark-mode');
    btnTema.textContent = '☀️ Claro';
}

// Ação ao clicar no botão
btnTema.addEventListener('click', function() {
    // Alterna a classe dark-mode (liga/desliga)
    body.classList.toggle('dark-mode');
    
    // Verifica se a classe está ativa para salvar a preferência
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
        btnTema.textContent = '☀️ Claro';
    } else {
        localStorage.setItem('tema', 'claro');
        btnTema.textContent = '🌙 Escuro';
    }
});
