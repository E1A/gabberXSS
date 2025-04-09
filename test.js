(function () {
    // Create and insert the audio element
    var audio = document.createElement('audio');
    audio.src = 'https://github.com/E1A/gabberXSS/raw/refs/heads/main/DRS.mp3';
    audio.autoplay = true;
    audio.loop = true;
    audio.style.display = 'none';
    document.body.appendChild(audio);

    // Create and style the fullscreen GIF
    var gif = document.createElement('img');
    gif.src = 'https://raw.githubusercontent.com/E1A/gabberXSS/refs/heads/main/skeleton.gif';
    gif.style.position = 'fixed';
    gif.style.top = 0;
    gif.style.left = 0;
    gif.style.width = '100vw';
    gif.style.height = '100vh';
    gif.style.objectFit = 'cover';
    gif.style.zIndex = 9999;
    gif.style.transform = 'scaleX(1)';
    gif.style.transition = 'transform 0.3s ease-in-out';
    document.body.appendChild(gif);

    // Flip the GIF every 3 seconds
    var flipped = false;
    setInterval(() => {
        flipped = !flipped;
        gif.style.transform = flipped ? 'scaleX(-1)' : 'scaleX(1)';
    }, 3000);
})();
