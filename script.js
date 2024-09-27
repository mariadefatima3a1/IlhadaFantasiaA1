const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.passo.ativo'); // Elemento com o passo atual
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // Próximo passo

        // Esconder o passo atual
        if (atual) {
            atual.classList.remove('ativo');
        }

        // Mostrar o próximo passo
        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        } else {
            console.error('Próximo passo não encontrado: ', proximoPasso);
        }
    });
});
