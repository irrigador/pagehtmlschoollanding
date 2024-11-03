document.getElementById('entrarBtn').addEventListener('click', function() {
    document.querySelector('.img').classList.add('fade-left');
    document.querySelector('.conteudo').classList.add('fade-right');
    setTimeout(function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('novaPagina').style.display = 'block';
    }, 1000);
});
document.getElementById('segundaPaginaBtn').addEventListener('click', function() {
    alert('Segunda Página ainda não implementada!');
});
