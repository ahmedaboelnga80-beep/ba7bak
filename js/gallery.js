/* ==========================================================================
   OUR LOVELY MEMORIES (INTERACTIVE DOUBLE-TAP 3D FLIP GALLERY)
   ========================================================================== */

(function initGallery() {
    const memoryImages = [
    {
        "src": "src/assets/IMG_4832.PNG",
        "title": "أجمل النظرات ✨",
        "note": "كل مرة بشوف عينيكي بحس إني اتولدت من جديد. أنتي أجمل اختيار في حياتي ❤️"
    },
    {
        "src": "src/assets/IMG_3978.JPG",
        "title": "ضحكتك بالدنيا 🌸",
        "note": "ضحكتك دي هي السر اللي بيخليني مبسوط وفرحان مهما كانت الظروف ✨"
    },
    {
        "src": "src/assets/IMG_3979.JPG",
        "title": "ذكريات متتنساش 💖",
        "note": "نفسي الأيام الجاية تكون أحلى من اللي فات، ونفضل جنب بعض، ونجمع صور وذكريات أكتر، ونفتكرها وإحنا مبسوطين ❤️"
    },
    {
        "src": "src/assets/IMG_3981.JPG",
        "title": "مع بعض دايماً 👫",
        "note": "وجودك جنبي هو الأمان والراحة اللي بدور عليها من زمان."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-58.jpg",
        "title": "أحلى يوم ❤️",
        "note": "اليوم ده كان من أسعد أيام حياتي لما كنا سوا والضحكة مش مفارقة وشنا ✨"
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-58 (2).jpg",
        "title": "فرحة قلبي 🥰",
        "note": "أنتي المشاعر الحلوة وكل حاجة طيبة وبتحسسني بالدفا."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-58 (3).jpg",
        "title": "سند وعزوة 💞",
        "note": "شكراً إنك دايماً واقفه جنبي وبتحبيني بصدق."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-59.jpg",
        "title": "نصفي الثاني 🌹",
        "note": "مش مجرد حبيب، أنتي روحي ونفسي ودنيتي كلها."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-59 (2).jpg",
        "title": "أوقات هادية ✨",
        "note": "الهدوء والراحة اللي بحسهم معاكي مفيش زيّهم في العالم."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-59 (3).jpg",
        "title": "حب للأبد 🔒",
        "note": "وعد مني هفضل أحبك وأحافظ عليكي طول ما أنا بتنفس."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-59 (4).jpg",
        "title": "ابتسامة دافية 🌺",
        "note": "ابتسامتك بتنور عيوني بتشيل أي تعب أو هم."
    },
    {
        "src": "src/assets/PHOTO-20268-165-37-59 (5).jpg",
        "title": "حكايتنا الحلوة 📖",
        "note": "كل يوم بيعدي معانا بيكتب صفحة جديدة في قصة حبنا."
    },
    {
        "src": "src/assets/PHOTO-20268-165-380.jpg",
        "title": "مغادرتنا سوا 🚀",
        "note": "أينما ذهبنا، طول ما إحنا ايدينا في ايد بعض فالمكان هو الجنة."
    },
    {
        "src": "src/assets/PHOTO-20268-165-380 (2).jpg",
        "title": "لحظات المطر 🌧️",
        "note": "حتى في الأيام الصعبة، وجودك بيخلي كل حاجة تعدي بسلام."
    },
    {
        "src": "src/assets/PHOTO-20268-165-380 (3).jpg",
        "title": "سعادة القلب ❤️",
        "note": "قلبي بيرقص فرحة كل ما اسمك ييجي في بالي."
    },
    {
        "src": "src/assets/PHOTO-20268-165-380 (4).jpg",
        "title": "نورك في حياتي 💡",
        "note": "أنتي النور اللي بيهديني في العتمة وبيعيدلي أملي."
    },
    {
        "src": "src/assets/PHOTO-20268-165-383.jpg",
        "title": "أحلى الذكريات 📸",
        "note": "كل صورة لينا حكاية وحب ملهوش حدود."
    },
    {
        "src": "src/assets/PHOTO-20268-165-387.jpg",
        "title": "أنشطتنا سوا 🎈",
        "note": "الفرحة البسيطة معاكي بتسوى الدنيا وما فيها."
    },
    {
        "src": "src/assets/PHOTO-20268-165-387 (2).jpg",
        "title": "عشق لا ينتهي 💘",
        "note": "كل يوم بحبك فيه أكتر من اليوم اللي قبله."
    },
    {
        "src": "src/assets/PHOTO-20268-165-387 (3).jpg",
        "title": "أنتِ وطني ✨",
        "note": "معاكي بحس إني وصلت بيتي ومكاني الصح."
    },
    {
        "src": "src/assets/PHOTO-20268-165-387 (4).jpg",
        "title": "حلم حياتي 🌟",
        "note": "أنتي الحلم اللي تمنيته من زمان وربنا حققهولي."
    },
    {
        "src": "src/assets/PHOTO-20268-165-387 (5).jpg",
        "title": "بين يديك 🤲",
        "note": "لما بمسك ايديكي بحس إني ملكت العالم كله."
    },
    {
        "src": "src/assets/PHOTO-20268-165-388.jpg",
        "title": "مستقبلنا الباهر 💍",
        "note": "إن شاء الله الجاي أحلى وأجمل بكتير معاك."
    },
    {
        "src": "src/assets/PHOTO-20268-17-13-12-41.jpg",
        "title": "نظرة حب 💞",
        "note": "نظرتك ليّا بتغنيني عن كل كلام الدنيا."
    },
    {
        "src": "src/assets/PHOTO-20268-126-530.jpg",
        "title": "حب بلا شروط 💖",
        "note": "بحبك بكل تفاصيلك وبكل حركاتك الجميلة."
    },
    {
        "src": "src/assets/PHOTO-20268-127-20-40.jpg",
        "title": "الرفيق والروح 🕊️",
        "note": "أنتي الصديق والحبيب وكل عيلتي ودنيتي."
    },
    {
        "src": "src/assets/5ce096e6-c9c7-4429-8d77-4ea16f4e8752.JPG",
        "title": "لحظة العناق 🫂",
        "note": "حضنك هو المكان الوحيد اللي بيريح قلبي من تعب الدنيا."
    },
    {
        "src": "src/assets/7cf60b9b-10d0-46b8-a2dc-306a1cdfdb04.JPG",
        "title": "سر سعادتي 🔑",
        "note": "أنتي السر اللي بيبتسملي قلبي بسببه كل يوم."
    },
    {
        "src": "src/assets/db4272b8-c95e-4f02-ae89-6c689642fc4e.JPG",
        "title": "جمال روحك 🌿",
        "note": "جمالك الخارجي مفيش زيّه، وجمال روحك أعظم بكتير."
    },
    {
        "src": "src/assets/eb78f176-deb8-4a10-9985-254695234400.JPG",
        "title": "أيامنا المشرقة ☀️",
        "note": "الشمس بتشرق في حياتي بوجودك ورؤية ضحكتك."
    },
    {
        "src": "src/assets/fd0c0d23-a12d-4910-ae56-cfd9c0c680cd.JPG",
        "title": "حبي الأبدي ❤️",
        "note": "مهما طال العمر سأظل أحبك وأعشق وجودك بجانبي."
    },
    {
        "src": "src/assets/41aed9d7-b42c-4e00-a7ef-0460abc5985d.JPG",
        "title": "عيونك أماني 🌟",
        "note": "في كل نظرة ليكي بحس براحة بتملى روحي، أنتي سندي وأجمل ما في أيامي ❤️"
    },
    {
        "src": "src/assets/5cef5429-d353-4ae0-8b56-47827f8fa0cd.JPG",
        "title": "دفا الحب ❤️",
        "note": "وجودك جنبي هو الدفا في عز البرد، والراحة بعد كل تعب ومجهود ✨"
    },
    {
        "src": "src/assets/93679343-8133-4a02-b32b-48281218bc1c.JPG",
        "title": "ضحكة من القلب 🌸",
        "note": "لما بتضحكي الدنيا كلها بتضحكلي، بحب تفاصيلك وعفويتك جداً 🥰"
    },
    {
        "src": "src/assets/9c4431dc-32bc-4299-93a7-96ee75728c68.JPG",
        "title": "أحلى صدفة وصحبة 🌹",
        "note": "أجمل صدفة جمعتني بيكي، والنهاردة أنتي أغلى حب وأعز رفيق في مشوار الحياة 💖"
    },
    {
        "src": "src/assets/b8fc7bfa-f928-42b8-984d-901a7a58db03.JPG",
        "title": "روحي معاكي 🕊️",
        "note": "مهما بعدت المسافات، قلبي وروحي دايماً حاضرين معاكي في كل دقيقة وثانية ✨"
    },
    {
        "src": "src/assets/IMG_8518.jpg",
        "title": "إشراقة يومي ☀️",
        "note": "يومي مبيكملش غير بيكي وبكلامك الحلو اللي بيطمن قلبي ويملاني طاقة وحياة 💖"
    },
    {
        "src": "src/assets/IMG_8519.jpg",
        "title": "نبض الفرحة 💖",
        "note": "معاكي اتعلمت يعني إيه حب حقيقي ملوش شروط ولا حدود، حب أبدي لا ينتهي ❤️"
    },
    {
        "src": "src/assets/IMG_8520.jpg",
        "title": "ملاكي الجميل 🌸",
        "note": "ملامحك الهادية بتسحرني كل يوم من جديد، ربنا يحفظك ليا ويديم وجودك في عمري 🤲"
    },
    {
        "src": "src/assets/IMG_8521.jpg",
        "title": "قربي منك حياة 💞",
        "note": "كل ثانية بقضيها جنبك بتسوى سنين من عمري، بحبك لأخر نفس في عمري 🥰"
    },
    {
        "src": "src/assets/IMG_8749.jpg",
        "title": "عالمي الخاص 🔒",
        "note": "أنتي العالم الهادي اللي بهرب ليه لما أحب أكون مبسوط ومرتاح من كل دوشة الدنيا ✨"
    },
    {
        "src": "src/assets/IMG_8758.jpg",
        "title": "حلم تحقق 🌟",
        "note": "كنتي دعوة في صلاتي وربنا استجابها وبقيتي أجمل نصيب وأحلى رزق في حياتي ❤️"
    },
    {
        "src": "src/assets/28CF3381-E417-4429-938D-DFF56B33B5FE_still.jpg",
        "title": "لقطة من العمر 📸",
        "note": "الصورة دي فيها حكاية حب متتقدرش بتمن، دايماً محفورة في الذاكرة والوجدان 💖"
    },
    {
        "src": "src/assets/gemini_generated_video_A41414DF_still.jpg",
        "title": "جمال لا يوصف 💐",
        "note": "كل ما ببص في الصورة دي بفتكر قد إيه إحنا الاتنين اتخلقنا لبعض ولايقين على بعض جداً ✨"
    }
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
        img.className = 'thumb-item ' + (idx === 0 ? 'active' : '');
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
        if (noteTitle) noteTitle.textContent = current.title;
        if (noteText) noteText.textContent = current.note;
        if (counterEl) counterEl.textContent = (currentIndex + 1) + ' / ' + memoryImages.length;

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
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
    }

    // Initial Render
    updateCardContent();
})();
