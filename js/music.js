/* ==========================================================================
   ROMANTIC BACKGROUND MUSIC PLAYER (WEB AUDIO SYNTHESIZER MELODY)
   ========================================================================== */

(function initMusicPlayer() {
    const musicBtn = document.getElementById('music-toggle');
    if (!musicBtn) return;

    let isPlaying = false;
    let audioCtx = null;
    let timerId = null;

    // Soft romantic ambient notes (Pentatonic scale: C4, D4, E4, G4, A4, C5, E5)
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 659.25];

    function playSoftNote() {
        if (!isPlaying || !audioCtx) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            // Pick a random soft romantic pitch
            const freq = notes[Math.floor(Math.random() * notes.length)];
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            // Envelope for gentle sound
            gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.4);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.5);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 2.6);
        } catch (e) {
            console.error("Audio error:", e);
        }
    }

    function startMusic() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBtn.setAttribute('title', 'إيقاف الموسيقى 🎵');

        // Play notes every 800ms
        playSoftNote();
        timerId = setInterval(playSoftNote, 850);
    }

    function stopMusic() {
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.setAttribute('title', 'تشغيل الموسيقى 🎵');
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    }

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopMusic();
        } else {
            startMusic();
        }
    });
})();
