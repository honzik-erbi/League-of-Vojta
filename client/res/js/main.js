import { Background } from "./ui/basic-utils.js";
import { Player } from "./ui/player.js";
const background = new Background();
const player = new Player(600, 400);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};
//keyW: true/false;
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

const gameLoop = () => {
    resize()
    //clear - render background
    clear();
    //update
    update();
    //render
    render();
    //fps
    fps();
    window.requestAnimationFrame(gameLoop);
}

const clear = () => {
    background.draw(ctx, player);
    player.draw(ctx)

};
const resize = () => {
    canvas.width = 1280
    canvas.height = 720
};
const render = () => {};
const fps = () => {};


window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}
const update = () => {
    handlePlayerMovement();
}

const handlePlayerMovement = () => {
    console.log(player.y);
    if (keys["KeyW"]) {
        player.y -= player.velocity;
    }
    if (keys["KeyA"]) {
        player.x -= player.velocity;
    }
    if (keys["KeyS"]) {
        player.y += player.velocity;
    }
    if (keys["KeyD"]) {
        player.x += player.velocity;
    }
}