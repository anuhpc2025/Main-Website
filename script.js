const canvas = document.getElementById("interactiveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = "rgba(34, 122, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", function (event) {
    particles.push(new Particle(event.x, event.y));
});

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(function() {
    if (document.hasFocus()) {
        particles.push(new Particle(getRandomInt(canvas.width), getRandomInt(canvas.height)));
        // particles.push(new Particle(canvas.width/2, canvas.height/2));
    }
}, 100);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

init();
animate();
