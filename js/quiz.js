/* ==========================================================================
   INTERACTIVE 6-QUESTION LOVE QUIZ WITH REACTION MODALS & SCORE REPORT
   ========================================================================== */

(function initQuiz() {
    const questions = [
        {
            q: "بتحبني أد إيه؟ ❤️",
            options: [
                { text: "قد السماء والأرض كل يوم أكتر ❤️", isCorrect: true, title: "برافوووو عليك ❤️", desc: "إيه الجمال ده 😂❤️", emoji: "🥰" },
                { text: "نص نص 😒", isCorrect: false, title: "ليلتك سودااا 😤", desc: "💔😂 إزاي تختار الإجابة دي !", emoji: "😤" }
            ]
        },
        {
            q: "أكتر حاجة بحبها فيك إيه؟ ✨",
            options: [
                { text: "حنيتك وقلبك الأبيض ❤️", isCorrect: true, title: "برافوووو عليك ❤️", desc: "صح جداً يا حبيب قلبي ✨", emoji: "🥰" },
                { text: "عنادك 🙄", isCorrect: false, title: "ليلتك سودااا 😤", desc: "يا بختك لو طلعت الإجابة دي صح 😂", emoji: "😤" }
            ]
        },
        {
            q: "مين اللي بيصالح التاني دايماً؟ 😂",
            options: [
                { text: "أنا اللي بصالحك وبدلعك دايماً ❤️", isCorrect: true, title: "عاش يا بطل ❤️", desc: "أصل مفيش أطيب منك 🌸", emoji: "🥰" },
                { text: "محدش بيصالح حد ونفضل زعلانين 💔", isCorrect: false, title: "ليلتك سودااا 😤", desc: "خناق تاني لاء 😭😂", emoji: "😤" }
            ]
        },
        {
            q: "أجمل خروجة خرجناها سوا؟ 🚗",
            options: [
                { text: "كل خروجة وإحنا مع بعض بتكون أجمل خروجة ❤️", isCorrect: true, title: "صح والله ❤️", desc: "أهم حاجة نكون سوا ✨", emoji: "🥰" },
                { text: "ولا واحدة 😒", isCorrect: false, title: "ليلتك سودااا 😤", desc: "كده تزعلني بجد 💔😂", emoji: "😤" }
            ]
        },
        {
            q: "إيه أهم حاجة بينا؟ ❤️",
            options: [
                { text: "الحب والاهتمام ❤️", isCorrect: true, title: "برافوووو عليك ❤️", desc: "هو ده الأهم دايماً ✨", emoji: "🥰" },
                { text: "الخناق 😂", isCorrect: false, title: "ليلتك سودااا 😤", desc: "💔😂 إزاي تختار الإجابة دي !", emoji: "😤" }
            ]
        },
        {
            q: "هنفضل سوا لحد إمتى؟ ♾️",
            options: [
                { text: "لآخر العمر وفي الجنة إن شاء الله ❤️", isCorrect: true, title: "ربنا يخلينا لبعض ❤️", desc: "يا أحلى حاجة في حياتي ✨", emoji: "🥰" },
                { text: "حد يديني فرصة ههرب 🏃‍♂️", isCorrect: false, title: "تهرب فين يا حلو 😤", desc: "مفيش هروب خلاص اتدبست 😂❤️", emoji: "😤" }
            ]
        }
    ];

    let currentQ = 0;
    let score = 0;

    const stepLabel = document.getElementById('quiz-step-label');
    const qContainer = document.getElementById('quiz-question-container');
    const reactionOverlay = document.getElementById('quiz-reaction-overlay');
    const reactionEmoji = document.getElementById('reaction-emoji');
    const reactionTitle = document.getElementById('reaction-title');
    const reactionDesc = document.getElementById('reaction-desc');
    const reactionNextBtn = document.getElementById('reaction-next-btn');

    const resultContainer = document.getElementById('quiz-result-container');
    const resultScore = document.getElementById('result-score');
    const resultFeedback = document.getElementById('result-feedback');
    const retryBtn = document.getElementById('quiz-retry-btn');

    if (!qContainer) return;

    function renderQuestion() {
        if (currentQ >= questions.length) {
            showResults();
            return;
        }

        const data = questions[currentQ];
        stepLabel.textContent = `Question ${currentQ + 1} / ${questions.length}`;

        qContainer.innerHTML = `
            <h2 class="quiz-question-title">${data.q}</h2>
            <div class="quiz-options">
                ${data.options.map((opt, idx) => `
                    <button class="quiz-option-btn" data-idx="${idx}">${opt.text}</button>
                `).join('')}
            </div>
        `;

        const btns = qContainer.querySelectorAll('.quiz-option-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selectedIdx = parseInt(btn.getAttribute('data-idx'));
                handleAnswer(data.options[selectedIdx]);
            });
        });
    }

    function handleAnswer(opt) {
        if (opt.isCorrect) score++;

        reactionEmoji.textContent = opt.emoji;
        reactionTitle.textContent = opt.title;
        reactionDesc.textContent = opt.desc;

        reactionOverlay.classList.remove('hidden');
    }

    reactionNextBtn.addEventListener('click', () => {
        reactionOverlay.classList.add('hidden');
        currentQ++;
        renderQuestion();
    });

    function showResults() {
        stepLabel.classList.add('hidden');
        qContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        resultScore.textContent = `نتيجتك: ${score} / ${questions.length}`;

        if (score >= 5) {
            resultFeedback.textContent = "برافو عليك يا حبيبي ❤️ حافظني كويس جداً ومذاكر صح!";
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        } else {
            resultFeedback.textContent = "مش وحش 😂❤️ بس محتاج تذاكرني أكتر";
        }
    }

    retryBtn.addEventListener('click', () => {
        currentQ = 0;
        score = 0;
        stepLabel.classList.remove('hidden');
        qContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        renderQuestion();
    });

    renderQuestion();
})();
