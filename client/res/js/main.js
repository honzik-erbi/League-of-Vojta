import { Background } from "./ui/basic-utils.js";

const background = new Background();

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
    background.draw(ctx);

};
const resize = () => {
    canvas.width = 1280
    canvas.height = 720
};
const update = () => {};
const render = () => {};
const fps = () => {};


window.onload = () => {
    window.requestAnimationFrame(gameLoop);
}
