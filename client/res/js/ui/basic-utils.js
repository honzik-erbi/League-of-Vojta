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
            x: -player.x,
            y: -player.y
        }
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
    }
}