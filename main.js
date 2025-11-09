onload = () => {
    document.body.classList.remove("container");

    // Botón de reproducción para sortear bloqueo de autoplay
    var playBtn = document.getElementById('play-btn');
    var audio = document.getElementById('audio');
    if (playBtn && audio) {
        playBtn.addEventListener('click', function () {
            audio.play().then(function () {
                var hint = document.getElementById('play-hint');
                if (hint) hint.style.display = 'none';
            }).catch(function (err) {
                // autoplay/play llamada falló (por seguridad del navegador)
                console.log('No se pudo reproducir automáticamente:', err);
            });
        });

        // Si el usuario usa los controles y el audio comienza a reproducirse, ocultar la pista
        audio.addEventListener('playing', function () {
            var hint = document.getElementById('play-hint');
            if (hint) hint.style.display = 'none';
        });
    }
};