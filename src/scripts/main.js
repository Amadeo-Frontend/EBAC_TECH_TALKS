AOS.init();

// Define a data do meu aniversário
let countDownDate = new Date("Dec 12, 2023 18:00:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
let countdownInterval = setInterval(function () {
  // Pega a data e hora atual
  let now = new Date().getTime();

  // Calcula a diferença entre a data atual e a data da contagem regressiva
  let distance = countDownDate - now;

  // Calcula o tempo restante em dias, horas, minutos e segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe a contagem regressiva no elemento com id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Se a contagem regressiva terminou, exibe uma mensagem
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "É hoje o melhor evento de tecnologia do Brasil";
  }
}, 1000);
