function pararTodasAsMusicas() {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function esconderMensagens() {
    document.getElementById("mensagemEspecial").style.display = "none";
    document.getElementById("mensagemTempo").style.display = "none";
    document.getElementById("declaracaoamor").style.display = "none";
}

function tocarMusica() {
    esconderMensagens();
    const mensagem = document.getElementById("declaracaoamor");
    mensagem.style.display = "block";

    pararTodasAsMusicas(); 
    const audio = document.getElementById("musica1");
    audio.currentTime = 0;
    audio.play().catch(() => {
    });
    setTimeout(() => {
        audio.pause();
    }, 300000);
}

function MsgTexto() {
    esconderMensagens(); 
    const mensagem = document.getElementById("mensagemEspecial");
    mensagem.style.display = "block"; 

    pararTodasAsMusicas();
    const audio = document.getElementById("musica2");
    audio.currentTime = 0;
    audio.play().catch(() => { });
    setTimeout(() => {
        audio.pause();
    }, 300000);
}

function TempoDeAmor() {
    esconderMensagens();
    const mensagemTempo = document.getElementById("mensagemTempo");
    const dataInicio = new Date("2024-02-01T19:24:00");
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    mensagemTempo.innerHTML = `
        Sempre quis conversar com você desde a Etec, do dia que te vi pela primeira vez, mas comecei a AMAR UM MONTÃO TIPO UM MONTÃO PRA CARALHO, DÁ NEM PRA TE FALAR, MUITO MAIOR QUE EU quando começamos a nos falar, ou pra ficar melhor pra minha linda pessoinha: <strong>${dias}</strong> dias, <strong>${horas}</strong> horas e <strong>${minutos}</strong> minutos! 💘
    `;
    mensagemTempo.style.display = "block"; 

    pararTodasAsMusicas();
    const audio = document.getElementById("musica3");
    audio.currentTime = 0;
    audio.play().catch(() => {
        alert("AMO MAIS AINDA");
    });
    setTimeout(() => {
        audio.pause();
    }, 300000);
}