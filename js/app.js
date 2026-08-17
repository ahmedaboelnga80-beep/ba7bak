/* ==========================================================================
   MAIN APP CONTROLLER & INTERACTIVE ACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Envelope Sealed Letter Toggle
    const envelopeBtn = document.getElementById('envelope-btn');
    const envelopeBody = document.getElementById('envelope-body');

    if (envelopeBtn && envelopeBody) {
        envelopeBtn.addEventListener('click', () => {
            envelopeBody.classList.toggle('hidden');
            if (envelopeBody.classList.contains('hidden')) {
                envelopeBtn.textContent = 'افتح الرسالة 💖';
            } else {
                envelopeBtn.textContent = 'إغلاق الرسالة 💌';
                envelopeBody.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // 2. WhatsApp Direct Message Share Link
    const waBtn = document.getElementById('whatsapp-share-btn');
    if (waBtn) {
        const text = encodeURIComponent('بحبك جداً وشكراً على الموقع الجميل ده ❤️✨');
        waBtn.href = `https://api.whatsapp.com/send?text=${text}`;
    }
});
