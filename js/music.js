/* ==========================================================================
   ROMANTIC BACKGROUND MUSIC PLAYER
   ========================================================================== */

(function initMusicPlayer() {
    const musicBtn = document.getElementById('music-toggle');
    if (!musicBtn) return;

    // Create Audio instance with the new romantic song
    const bgAudio = new Audio('src/assets/song.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.7;

    let isPlaying = false;

    function playAudio() {
        bgAudio.play().then(() => {
            isPlaying = true;
            musicBtn.classList.add('playing');
            musicBtn.setAttribute('title', 'إيقاف الموسيقى 🎵');
        }).catch((err) => {
            console.log('Autoplay prevented or audio error:', err);
            isPlaying = false;
            musicBtn.classList.remove('playing');
            musicBtn.setAttribute('title', 'تشغيل الموسيقى 🎵');
        });
    }

    function pauseAudio() {
        bgAudio.pause();
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.setAttribute('title', 'تشغيل الموسيقى 🎵');
    }

    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent document click listener from double toggling
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    // Auto-start audio on first interaction if autoplay policy allows
    const enableAutoPlayOnInteraction = () => {
        if (!isPlaying) {
            playAudio();
        }
    };

    document.addEventListener('click', enableAutoPlayOnInteraction, { once: true });
    document.addEventListener('touchstart', enableAutoPlayOnInteraction, { once: true });
})();

