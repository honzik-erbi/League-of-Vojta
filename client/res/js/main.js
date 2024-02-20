import { Background } from "./ui/basic-utils.js";
import { Player } from "./ui/player.js";

const playerId = Math.floor(Math.random() * 10000000)
const socket = io('http://localhost:3000')

const sendSpawnInfoToServer = () => {
    const payload = {
        id: playerId,
        position: {
            x: player.x,
            y: player.y
        }
    }
    socket.emit('spawn', payload)
}

const users = new Map()

socket.on('new user connected', (data) => {
    console.log(data)
    data.map((element) => {
        users.set(element[0], element[1])
    })
    console.log(users)
})

socket.on('user disconnected', (user) => {
    users.delete(user)
    console.log(users)
})

const sendPlayerUpdate = () => {
    const payload = {
        id: playerId,
        position: {
            x: player.x,
            y: player.y
        }
    }
    socket.emit('playerpos', payload)
}

socket.on('playerpos', (data) => {
    if (data.id === playerId) return
    users.set(data.id, data.position)
})

const background = new Background();
const player = new Player(3000, 2000);

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
let mouse = {
    x:0,
    y:0
}
document.addEventListener("click", (e) => {
    const canvasPos = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - canvasPos.left) / canvasPos.width) * canvas.width;
    mouse.y = ((e.clientY - canvasPos.top) / canvasPos.height) * canvas.height;
    console.log(canvasPos.top);
    console.log(canvasPos.left);
    click.update(mouse.x, mouse.y)
})

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

};
const resize = () => {
    canvas.width = 1280
    canvas.height = 720
};

const update = () => {
    handlePlayerMovement();
    sendPlayerUpdate()
}


const handlePlayerMovement = () => {
    //console.log(player.y);
    //console.log(player.x);
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

const render = () => {
    player.draw(ctx)
    ctx.fillStyle = "purple";
    ctx.fillRect(mouse.x - 10, mouse.y - 10, 20, 20);
    
};
const fps = () => {};

window.onload = () => {
    sendSpawnInfoToServer()
    window.requestAnimationFrame(gameLoop);
    document.body.oncontextmenu = () => false;
}