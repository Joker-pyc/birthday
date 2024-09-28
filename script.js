document.addEventListener('DOMContentLoaded', function() {
    // Initialize parallax effect
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // Play background music
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;
    bgMusic.play();

    // RSVP button interaction
    const rsvpBtn = document.querySelector('.rsvp-btn');
    rsvpBtn.addEventListener('click', function() {
        alert('Yay! We can\'t wait to see you under the sea!');
    });

    // Create bubbles
    function createBubbles() {
        const bubblesContainer = document.getElementById('bubbles');
        for (let i = 0; i < 50; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
            bubble.style.opacity = Math.random();
            bubble.style.transform = `scale(${Math.random()})`;
            bubblesContainer.appendChild(bubble);
        }
    }

    createBubbles();

    // Add swimming mermaid
    const mermaid = document.createElement('div');
    mermaid.classList.add('mermaid');
    document.body.appendChild(mermaid);

    // Add sea creatures
    function addSeaCreatures() {
        const seaCreatures = document.getElementById('seaCreatures');
        const creatures = ['fish', 'starfish', 'seahorse', 'jellyfish', 'turtle'];
        
        creatures.forEach(creature => {
            const img = document.createElement('img');
            img.src = `${creature}.png`;
            img.style.width = `${Math.random() * 50 + 30}px`;
            img.style.position = 'absolute';
            img.style.left = `${Math.random() * 100}vw`;
            img.style.top = `${Math.random() * 100}vh`;
            img.style.animationDuration = `${Math.random() * 5 + 5}s`;
            seaCreatures.appendChild(img);
        });
    }

    addSeaCreatures();

    // Procedurally generate background patterns
    function generateBackgroundPattern() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.arc(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 20 + 5,
                0,
                2 * Math.PI
            );
            ctx.fillStyle = ['#8491CF', '#E0BFC0', '#C9E3F4', '#E1BCEE'][Math.floor(Math.random() * 4)];
            ctx.globalAlpha = 0.1;
            ctx.fill();
        }

        document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
        document.body.style.backgroundRepeat = 'repeat';
    }

    generateBackgroundPattern();

    // Add subtle animation to the blob
    function animateBlob() {
        const blob = document.querySelector('.blob-container svg path');
        let time = 0;
        
        function animate() {
            const newPath = `M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,75.6,43.9C67.4,57.1,55.4,68.3,41.6,76.3C27.8,84.3,13.9,89.1,-0.4,89.8C-14.7,90.5,-29.4,87,-42.3,79.7C-55.2,72.4,-66.3,61.2,-74.3,47.7C-82.3,34.2,-87.1,17.1,-87.6,-0.3C-88.1,-17.7,-84.2,-35.4,-75.6,-50.2C-67,-65,-53.7,-76.9,-39,-82.1C-24.4,-87.4,-12.2,-86.1,1.9,-89.4C16,-92.7,32,-83.6,44.7,-76.4Z`;
            
            blob.setAttribute('d', newPath);
            time += 0.01;
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    animateBlob();
});
