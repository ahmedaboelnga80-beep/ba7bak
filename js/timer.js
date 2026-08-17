/* ==========================================================================
   LIVE RELATIONSHIP COUNTER TIMER
   ========================================================================== */

(function initTimer() {
    // Relationship start date (default set to 365 days ago, customizable)
    const startDate = new Date('2025-01-01T00:00:00');

    const daysEl = document.getElementById('days-val');
    const hoursEl = document.getElementById('hours-val');
    const minsEl = document.getElementById('mins-val');
    const secsEl = document.getElementById('secs-val');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate; // time difference in ms

        if (diff < 0) return;

        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        daysEl.textContent = days;
        hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minsEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
})();
