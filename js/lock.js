/* ==========================================================================
   ROMANTIC PASSCODE LOCK SCREEN (PIN: 1710) - ALWAYS ACTIVE ON LOAD
   ========================================================================== */

(function initLockScreen() {
    const CORRECT_PIN = '1710';
    let enteredPin = '';
    let isProcessing = false;

    const lockScreen = document.getElementById('lock-screen');
    const pinDots = document.querySelectorAll('.pin-dot');
    const errorMsg = document.getElementById('lock-error-msg');
    const keypadKeys = document.querySelectorAll('.keypad-key');
    const relockBtn = document.getElementById('relock-btn');

    if (!lockScreen) return;

    // ALWAYS lock the screen when the page loads!
    lockScreen.classList.remove('unlocked');
    lockScreen.style.display = 'flex';
    document.body.classList.add('locked-scroll');

    function updateDots() {
        pinDots.forEach((dot, index) => {
            if (index < enteredPin.length) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
            }
        });
    }

    function handleDigit(digit) {
        if (isProcessing || enteredPin.length >= 4) return;
        
        enteredPin += digit;
        updateDots();
        if (errorMsg) errorMsg.textContent = '';

        if (enteredPin.length === 4) {
            checkPin();
        }
    }

    function handleBackspace() {
        if (isProcessing) return;
        enteredPin = enteredPin.slice(0, -1);
        updateDots();
        if (errorMsg) errorMsg.textContent = '';
    }

    function handleClear() {
        if (isProcessing) return;
        enteredPin = '';
        updateDots();
        if (errorMsg) errorMsg.textContent = '';
    }

    function checkPin() {
        isProcessing = true;

        if (enteredPin === CORRECT_PIN) {
            // Success!
            pinDots.forEach(dot => dot.classList.add('success'));
            if (errorMsg) {
                errorMsg.textContent = 'نورتي قلبي يا روحي 🥰❤️❤️';
                errorMsg.className = 'lock-error-msg success-text';
            }

            // Confetti explosion
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff', '#ffd1dc']
                });
            }

            // Play background music if available
            setTimeout(() => {
                if (window.loveMusic && typeof window.loveMusic.play === 'function') {
                    window.loveMusic.play();
                }
            }, 300);

            // Unlock and smooth fadeout
            setTimeout(() => {
                lockScreen.classList.add('unlocked');
                document.body.classList.remove('locked-scroll');
                enteredPin = '';
                updateDots();
                pinDots.forEach(dot => dot.classList.remove('success'));
                if (errorMsg) {
                    errorMsg.textContent = '';
                    errorMsg.className = 'lock-error-msg';
                }
                isProcessing = false;
            }, 800);

        } else {
            // Error: Wrong passcode
            pinDots.forEach(dot => dot.classList.add('error'));
            if (errorMsg) {
                errorMsg.textContent = 'الباسورد مش صح يا جميل 🥺 جربي تاني ❤️';
                errorMsg.className = 'lock-error-msg error-text';
            }

            // Shake lock card
            const lockCard = document.querySelector('.lock-card');
            if (lockCard) {
                lockCard.classList.add('shake');
                setTimeout(() => lockCard.classList.remove('shake'), 600);
            }

            setTimeout(() => {
                enteredPin = '';
                updateDots();
                pinDots.forEach(dot => dot.classList.remove('error'));
                isProcessing = false;
            }, 700);
        }
    }

    // Keypad Click Listeners
    keypadKeys.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.getAttribute('data-action');
            const num = btn.getAttribute('data-num');

            if (num !== null) {
                handleDigit(num);
            } else if (action === 'backspace') {
                handleBackspace();
            } else if (action === 'clear') {
                handleClear();
            }
        });
    });

    // Keyboard support (Numbers 0-9 & Arabic numerals)
    window.addEventListener('keydown', (e) => {
        if (lockScreen.classList.contains('unlocked')) return;

        const key = e.key;
        const arabicMap = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' };
        const mappedKey = arabicMap[key] || key;

        if (/^[0-9]$/.test(mappedKey)) {
            handleDigit(mappedKey);
        } else if (key === 'Backspace') {
            handleBackspace();
        } else if (key === 'Escape' || key === 'Delete') {
            handleClear();
        }
    });

    // Re-lock button
    if (relockBtn) {
        relockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            lockScreen.classList.remove('unlocked');
            lockScreen.style.display = 'flex';
            document.body.classList.add('locked-scroll');
            enteredPin = '';
            updateDots();
            if (errorMsg) {
                errorMsg.textContent = '';
                errorMsg.className = 'lock-error-msg';
            }
            if (window.loveMusic && typeof window.loveMusic.pause === 'function') {
                window.loveMusic.pause();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
