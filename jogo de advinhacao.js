const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificarPalpite() {
      const palpite = parseInt(document.getElementById("palpite").value);
      const mensagem = document.getElementById("mensagem");
      const contador = document.getElementById("tentativas");
      tentativas++;

      mensagem.className = "mensagem"; 
      
      if (isNaN(palpite)) {
        mensagem.textContent = "⚠️ Digite um número válido!";
        mensagem.classList.add("aviso");
        return;
      }

      if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        mensagem.classList.add("acertou");
      } else if (palpite < numeroSecreto) {
        mensagem.textContent = "📈 Tente um número maior!";
        mensagem.classList.add("maior");
      } else {
        mensagem.textContent = "📉 Tente um número menor!";
        mensagem.classList.add("menor");
      }

      mensagem.classList.add("show"); 
      contador.textContent = `Tentativas: ${tentativas}`;
      document.getElementById("palpite").value = "";
    }