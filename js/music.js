/* ==========================================================================
   ROMANTIC BACKGROUND MUSIC PLAYER & VIDEO AUDIO SYNC
   ========================================================================== */

(function initMusicPlayer() {
    const musicBtn = document.getElementById('music-toggle');
    if (!musicBtn) return;

    // Create Audio instance with the romantic song
    const bgAudio = new Audio('src/assets/song.mp3?v=2');
    bgAudio.loop = true;
    bgAudio.volume = 0.7;

    let isPlaying = false;
    let wasPlayingBeforeVideo = false;

    function playAudio() {
        return bgAudio.play().then(() => {
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
        e.stopPropagation();
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });

    // Expose global controller
    window.loveMusic = {
        play: playAudio,
        pause: pauseAudio,
        isPlaying: () => isPlaying
    };

    // Auto-start audio on first interaction only if site is already unlocked
    const enableAutoPlayOnInteraction = () => {
        const lockScreen = document.getElementById('lock-screen');
        const isLocked = lockScreen && !lockScreen.classList.contains('unlocked');
        if (!isPlaying && !isLocked) {
            playAudio();
        }
    };

    document.addEventListener('click', enableAutoPlayOnInteraction, { once: true });
    document.addEventListener('touchstart', enableAutoPlayOnInteraction, { once: true });

    // Sync with Videos: Pause background music when video plays
    document.addEventListener('DOMContentLoaded', () => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('play', () => {
                if (!video.muted && isPlaying) {
                    wasPlayingBeforeVideo = true;
                    pauseAudio();
                }
            });

            video.addEventListener('pause', () => {
                // If all videos are paused and music was playing before, resume
                const anyPlaying = Array.from(videos).some(v => !v.paused && !v.ended);
                if (!anyPlaying && wasPlayingBeforeVideo) {
                    wasPlayingBeforeVideo = false;
                    playAudio();
                }
            });

            video.addEventListener('ended', () => {
                const anyPlaying = Array.from(videos).some(v => !v.paused && !v.ended);
                if (!anyPlaying && wasPlayingBeforeVideo) {
                    wasPlayingBeforeVideo = false;
                    playAudio();
                }
            });
        });
    });
})();


