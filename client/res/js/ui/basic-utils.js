export class Background {
    
    constructor() {
        this.img = new Image();
        this.path = "./res/img/background/sr.jpg"
        this.img.src = this.path;
        this.size = {
            width: 5364,
            height: 4310,
        };
        this.position = {
            x: 0,
            y:0
        };
    }

    draw(ctx, player) {
        this.position = {
            x: -player.x + 1280 / 2 - player.width / 2,
            y: -player.y + 720 /2 - player.height / 2
        }
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
}

export class Click {

    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = 0;
        this.canDraw = false;
        this.counter = 0;
    }

    draw(ctx) {
        if (this.counter > 25) return 0
        ctx.fillStyle = "purple";
        ctx.fillRect(mouse.x - 10, mouse.y - 10, 20, 20);
        this.counter++;
    }
    
    update(x, y) {
        this.x = x
        this.y = y
        this.reset();
    }

    reset() {
        this.counter = 0
    }
}