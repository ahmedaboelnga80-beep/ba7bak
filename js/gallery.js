/* ==========================================================================
   OUR LOVELY MEMORIES (INTERACTIVE DOUBLE-TAP 3D FLIP GALLERY)
   ========================================================================== */

(function initGallery() {
    const memoryImages = [
        { src: "src/assets/IMG_4832.PNG", title: "أجمل النظرات ✨", note: "كل مرة بشوف عينيكي بحس إني اتولدت من جديد. أنتي أجمل اختيار في حياتي ❤️" },
        { src: "src/assets/IMG_3978.JPG", title: "ضحكتك بالدنيا 🌸", note: "ضحكتك دي هي السر اللي بيخليني مبسوط وفرحان مهما كانت الظروف ✨" },
        { src: "src/assets/IMG_3979.JPG", title: "ذكريات متتنساش 💖", note: "نفسي الأيام الجاية تكون أحلى من اللي فات، ونفضل جنب بعض، ونجمع صور وذكريات أكتر، ونفتكرها وإحنا مبسوطين ❤️" },
        { src: "src/assets/IMG_3981.JPG", title: "مع بعض دايماً 👫", note: "وجودك جنبي هو الأمان والراحة اللي بدور عليها من زمان." },
        { src: "src/assets/PHOTO-20268-165-37-58.jpg", title: "أحلى يوم ❤️", note: "اليوم ده كان من أسعد أيام حياتي لما كنا سوا والضحكة مش مفارقة وشنا ✨" },
        { src: "src/assets/PHOTO-20268-165-37-58 (2).jpg", title: "فرحة قلبي 🥰", note: "أنتي المشاعر الحلوة وكل حاجة طيبة وبتحسسني بالدفا." },
        { src: "src/assets/PHOTO-20268-165-37-58 (3).jpg", title: "سند وعزوة 💞", note: "شكراً إنك دايماً واقفه جنبي وبتحبيني بصدق." },
        { src: "src/assets/PHOTO-20268-165-37-59.jpg", title: "نصفي الثاني 🌹", note: "مش مجرد حبيب، أنتي روحي ونفسي ودنيتي كلها." },
        { src: "src/assets/PHOTO-20268-165-37-59 (2).jpg", title: "أوقات هادية ✨", note: "الهدوء والراحة اللي بحسهم معاكي مفيش زيّهم في العالم." },
        { src: "src/assets/PHOTO-20268-165-37-59 (3).jpg", title: "حب للأبد 🔒", note: "وعد مني هفضل أحبك وأحافظ عليكي طول ما أنا بتنفس." },
        { src: "src/assets/PHOTO-20268-165-37-59 (4).jpg", title: "ابتسامة دافية 🌺", note: "ابتسامتك بتنور عيوني بتشيل أي تعب أو هم." },
        { src: "src/assets/PHOTO-20268-165-37-59 (5).jpg", title: "حكايتنا الحلوة 📖", note: "كل يوم بيعدي معانا بيكتب صفحة جديدة في قصة حبنا." },
        { src: "src/assets/PHOTO-20268-165-380.jpg", title: "مغادرتنا سوا 🚀", note: "أينما ذهبنا، طول ما إحنا ايدينا في ايد بعض فالمكان هو الجنة." },
        { src: "src/assets/PHOTO-20268-165-380 (2).jpg", title: "لحظات المطر 🌧️", note: "حتى في الأيام الصعبة، وجودك بيخلي كل حاجة تعدي بسلام." },
        { src: "src/assets/PHOTO-20268-165-380 (3).jpg", title: "سعادة القلب ❤️", note: "قلبي بيرقص فرحة كل ما اسمك ييجي في بالي." },
        { src: "src/assets/PHOTO-20268-165-380 (4).jpg", title: "نورك في حياتي 💡", note: "أنتي النور اللي بيهديني في العتمة وبيعيدلي أملي." },
        { src: "src/assets/PHOTO-20268-165-383.jpg", title: "أحلى الذكريات 📸", note: "كل صورة لينا حكاية وحب ملهوش حدود." },
        { src: "src/assets/PHOTO-20268-165-387.jpg", title: "أنشطتنا سوا 🎈", note: "الفرحة البسيطة معاكي بتسوى الدنيا وما فيها." },
        { src: "src/assets/PHOTO-20268-165-387 (2).jpg", title: "عشق لا ينتهي 💘", note: "كل يوم بحبك فيه أكتر من اليوم اللي قبله." },
        { src: "src/assets/PHOTO-20268-165-387 (3).jpg", title: "أنتِ وطني ✨", note: "معاكي بحس إني وصلت بيتي ومكاني الصح." },
        { src: "src/assets/PHOTO-20268-165-387 (4).jpg", title: "حلم حياتي 🌟", note: "أنتي الحلم اللي تمنيته من زمان وربنا حققهولي." },
        { src: "src/assets/PHOTO-20268-165-387 (5).jpg", title: "بين يديك 🤲", note: "لما بمسك ايديكي بحس إني ملكت العالم كله." },
        { src: "src/assets/PHOTO-20268-165-388.jpg", title: "مستقبلنا الباهر 💍", note: "إن شاء الله الجاي أحلى وأجمل بكتير معاك." },
        { src: "src/assets/PHOTO-20268-17-13-12-41.jpg", title: "نظرة حب 💞", note: "نظرتك ليّا بتغنيني عن كل كلام الدنيا." },
        { src: "src/assets/PHOTO-20268-126-530.jpg", title: "حب بلا شروط 💖", note: "بحبك بكل تفاصيلك وبكل حركاتك الجميلة." },
        { src: "src/assets/PHOTO-20268-127-20-40.jpg", title: "الرفيق والروح 🕊️", note: "أنتي الصديق والحبيب وكل عيلتي ودنيتي." },
        { src: "src/assets/5ce096e6-c9c7-4429-8d77-4ea16f4e8752.JPG", title: "لحظة العناق 🫂", note: "حضنك هو المكان الوحيد اللي بيريح قلبي من تعب الدنيا." },
        { src: "src/assets/7cf60b9b-10d0-46b8-a2dc-306a1cdfdb04.JPG", title: "سر سعادتي 🔑", note: "أنتي السر اللي بيبتسملي قلبي بسببه كل يوم." },
        { src: "src/assets/db4272b8-c95e-4f02-ae89-6c689642fc4e.JPG", title: "جمال روحك 🌿", note: "جمالك الخارجي مفيش زيّه، وجمال روحك أعظم بكتير." },
        { src: "src/assets/eb78f176-deb8-4a10-9985-254695234400.JPG", title: "أيامنا المشرقة ☀️", note: "الشمس بتشرق في حياتي بوجودك ورؤية ضحكتك." },
        { src: "src/assets/fd0c0d23-a12d-4910-ae56-cfd9c0c680cd.JPG", title: "حبي الأبدي ❤️", note: "مهما طال العمر سأظل أحبك وأعشق وجودك بجانبي." }
    ];

    let currentIndex = 0;
    const flipCard = document.getElementById('memory-flip-card');
    const galleryImg = document.getElementById('gallery-img');
    const noteTitle = document.getElementById('gallery-note-title');
    const noteText = document.getElementById('gallery-note-text');
    const counterEl = document.getElementById('gallery-counter');
    const prevBtn = document.getElementById('prev-img-btn');
    const nextBtn = document.getElementById('next-img-btn');
    const thumbsContainer = document.getElementById('thumbnails-container');

    if (!flipCard || !galleryImg) return;

    // Render Thumbnails
    memoryImages.forEach((item, idx) => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        img.addEventListener('click', () => {
            goToSlide(idx);
        });
        thumbsContainer.appendChild(img);
    });

    function updateCardContent() {
        // Reset flip state
        flipCard.classList.remove('flipped');
        
        const current = memoryImages[currentIndex];
        galleryImg.src = current.src;
        noteTitle.textContent = current.title;
        noteText.textContent = current.note;
        counterEl.textContent = `${currentIndex + 1} / ${memoryImages.length}`;

        // Update Thumbnails Active Class
        const thumbs = thumbsContainer.querySelectorAll('.thumb-item');
        thumbs.forEach((t, i) => {
            if (i === currentIndex) {
                t.classList.add('active');
                t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                t.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = (index + memoryImages.length) % memoryImages.length;
        updateCardContent();
    }

    // Double Tap / Double Click Flip Detection
    let lastTap = 0;
    flipCard.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
            flipCard.classList.toggle('flipped');
        }
        lastTap = currentTime;
    });

    flipCard.addEventListener('dblclick', () => {
        flipCard.classList.toggle('flipped');
    });

    // Navigation Buttons
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Initial Render
    updateCardContent();
})();
