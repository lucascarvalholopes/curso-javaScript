const funcionarios = {};

function registrarAcao(tipoAcao) {
    const nome = document.getElementById('nome').value;
    const historico = document.getElementById('historico');
    const totalHoras = document.getElementById('total');

    const dataHoraAtual = new Date();
    const dataHoraFormatada = `${dataHoraAtual.toLocaleDateString()} ${dataHoraAtual.toLocaleTimeString()}`;
    
    const registro = `${nome} - ${tipoAcao}: ${dataHoraFormatada}`;
    const listItem = document.createElement('li');
    listItem.textContent = registro;
    historico.appendChild(listItem);

    if (!funcionarios[nome]) {
        funcionarios[nome] = { horasTrabalhadas: 0 };
    }

    if (tipoAcao === 'Entrada') {
        funcionarios[nome].horasTrabalhadas -= dataHoraAtual.getHours();
    } else {
        funcionarios[nome].horasTrabalhadas += dataHoraAtual.getHours();
    }

    exibirHorasTrabalhadas();

    limparCampoNome();
}

function exibirHorasTrabalhadas() {
    const totalHoras = document.getElementById('total');
    totalHoras.innerHTML = '';

    for (const funcionario in funcionarios) {
        const horasTrabalhadas = funcionarios[funcionario].horasTrabalhadas;
        const listItem = document.createElement('li');
        listItem.textContent = `${funcionario}: ${horasTrabalhadas} horas trabalhadas`;
        totalHoras.appendChild(listItem);
    }
}

function limparCampoNome() {
    document.getElementById('nome').value = '';
}
