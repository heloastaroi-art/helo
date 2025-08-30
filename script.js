function calcularCO2() {
    const km = document.getElementById("km").value;
    
    if (km && !isNaN(km)) {
        const co2PorKm = 0.21; // Emissões de CO2 por km (valores aproximados para um carro médio)
        const totalCO2 = (km * co2PorKm).toFixed(2);
        
        document.getElementById("resultado").innerHTML = `Você emite aproximadamente ${totalCO2} kg de CO2 por dia com a distância de ${km} km percorridos.`;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido de distância.";
    }
}
