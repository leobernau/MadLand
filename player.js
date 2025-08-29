class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.health = 100;
        this.maxHealth = 100;
        this.speed = 5;
        this.dashSpeed = 20;
        this.dashCooldown = 0;
        this.lastDir = {x:1, y:0};
        this.upgrades = [];
        this.xp = 0;
        this.level = 1;
    }

    draw(ctx){
        // Spieler-Sprite
        let img = new Image();
        img.src = 'images/player.png';
        ctx.drawImage(img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);

        // Healthbar
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x-25, this.y-35, 50*(this.health/this.maxHealth), 5);
    }
}
