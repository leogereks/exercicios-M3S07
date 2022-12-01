const calculate = document.getElementById('submit')
calculate.addEventListener('click', () => {

    let status;
    let imc = document.getElementById('weight').value / (((document.getElementById('height').value/100) * (document.getElementById('height').value/100)))
    if(imc<16){ status="MAGREZA GRAVE"}
    else if(imc>=16 && imc<17){status="MAGREZA MODERADA"}
    else if(imc>=17 && imc<18.5){status="MAGREZA LEVE"}
    else if(imc>=18.5 && imc<25){status="SAUDÁVEL"}
    else if(imc>=25 && imc<30){status="SOBREPESO"}
    else if(imc>=30 && imc<35){status="OBESIDADE GRAU I"}
    else if(imc>=35 && imc<40){status="OBESIDADE GRAU II (CONSIDERADA SEVERA)"}
    else {status="OBESIDADE GRAU III (CONSIDERADA MÓRBIDA)"}

    alert('Resultado IMC: ' + imc.toFixed(2)+", que é categorizado como "+status)
    console.table(['Idade: '+document.getElementById('age').value, 'Peso: '+document.getElementById('height').value, 'Altura: '+document.getElementById('weight').value, 'IMC: '+imc.toFixed(2)])

})