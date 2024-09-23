let intervalId;

function startInterval() {
    const intervalTime = document.getElementById('intervalInput').value;
    
    if (intervalTime) {
        intervalId = setInterval(() => {
            const output = document.getElementById('output');
            output.innerHTML += "Printando usando setInterval<br>";
        }, parseInt(intervalTime));
    } else {
        alert("Por favor, insira um intervalo de tempo em milissegundos.");
    }
}

function stopInterval() {
    clearInterval(intervalId);
}

function startTimeout() {
    const intervalTime = document.getElementById('intervalInput').value;
    
    if (intervalTime) {
        setTimeout(() => {
            const output = document.getElementById('output');
            output.innerHTML += "Printando usando setTimeout<br>";
        }, parseInt(intervalTime));
    } else {
        alert("Por favor, insira um intervalo de tempo em milissegundos.");
    }
}
