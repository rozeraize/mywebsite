const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const playerImage = new Image();
const enemyImage = new Image();
const backgroundImage = new Image();

playerImage.src = 'assets/player.png';
enemyImage.src = 'assets/enemy.png';
backgroundImage.src = 'assets/background.png';

const player = {
    x: 50,
    y: 300,
    width: 50,
    height: 50,
    speed: 5,
};

const enemy = {
    x: 700,
    y: 300,
    width: 50,
    height: 50,
    speed: 2,
};

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function drawEnemy() {
    ctx.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawPlayer();
    drawEnemy();
    requestAnimationFrame(update);
}

function movePlayer(event) {
    switch (event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
}

function moveEnemy() {
    if (enemy.x > player.x) {
        enemy.x -= enemy.speed;
    } else if (enemy.x < player.x) {
        enemy.x += enemy.speed;
    }

    if (enemy.y > player.y) {
        enemy.y -= enemy.speed;
    } else if (enemy.y < player.y) {
        enemy.y += enemy.speed;
    }
}

document.addEventListener('keydown', movePlayer);
setInterval(moveEnemy, 1000 / 60);

backgroundImage.onload = () => {
    update();
};