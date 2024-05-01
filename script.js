// Este é apenas um exemplo de tempo de carregamento mais longo
// Você pode ajustar esse valor conforme necessário
var tempoDeCarregamento = 3000; // 3 segundos

// O código abaixo ocultará a tela de carregamento após o tempo de carregamento
window.addEventListener('load', function() {
  setTimeout(function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
  }, tempoDeCarregamento);
});
