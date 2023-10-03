document.getElementById('calcular').addEventListener('click', function() {
    var medida = parseFloat(document.getElementById('medida').value);
    var precoPorMetro = parseFloat(document.getElementById('preco').value);
    var tipoInstalacao = document.getElementById('instalacao').value;
    var valorInstalacao = parseFloat(document.getElementById('valorInstalacao').value);
  
    var resultado = 0;
  
    if (!isNaN(medida) && !isNaN(precoPorMetro)) {
      resultado = medida * precoPorMetro;
    }
  
    if (!isNaN(valorInstalacao)) {
      if (tipoInstalacao === 'instalacao1') {
        resultado += valorInstalacao;
      } else if (tipoInstalacao === 'instalacao2') {
        resultado += (valorInstalacao * 1.5);
      }
      // Adicione mais opções de tipo de instalação conforme necessário
    }
  
    document.getElementById('resultado').textContent = 'Valor Total: R$ ' + resultado.toFixed(2);
  });
  
  