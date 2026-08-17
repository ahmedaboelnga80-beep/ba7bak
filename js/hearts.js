/* ==========================================================================
   FLOATING HEARTS BACKGROUND PARTICLE ENGINE
   ========================================================================== */

(function initFloatingHearts() {
    const canvas = document.getElementById('hearts-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const heartSymbols = ['❤️', '💖', '💕', '💗', '✨', '🌸'];
    const particles = [];
    const particleCount = 28;

    class HeartParticle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : height + 30;
            this.size = Math.random() * 16 + 14; // font size 14px - 30px
            this.speedY = Math.random() * 0.8 + 0.4;
            this.speedX = Math.sin(Math.random() * Math.PI) * 0.4;
            this.symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            this.opacity = Math.random() * 0.5 + 0.3;
            this.rotation = Math.random() * 360;
            this.rotSpeed = (Math.random() - 0.5) * 0.5;
        }

        update() {
            this.y -= this.speedY;
            this.x += Math.sin(this.y * 0.01) * 0.4;
            this.rotation += this.rotSpeed;

            if (this.y < -40) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.font = `${this.size}px Arial`;
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillText(this.symbol, 0, 0);
            ctx.restore();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new HeartParticle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
})();
