export class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = "red";
        this.velocity = 5;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        //1280 - sirka
        //720 - vyska
        ctx.strokeRect(1280 / 2 - this.width / 2, 720 /2 - this.height / 2, this.width, this.height)
    }
}