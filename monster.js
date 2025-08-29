class Monster {
    constructor(type, x, y){
        this.type = type; // z.B. 0=Troll,1=Drache,2=Hexe
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.maxHealth = 50 + type*20;
        this.health = this.maxHealth;
        this.speed = 1 + type*0.5;
        this.sprite = new Image();
        if(type===0) this.sprite.src='images/troll.png';
        if(type===1) this.sprite.src='images/dragon.png';
        if(type===2) this.sprite.src='images/witch.png';
    }

    draw(ctx){
        ctx.drawImage(this.sprite, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        // Healthbar
        ctx.fillStyle='black';
        ctx.fillRect(this.x-20, this.y-30, 40*(this.health/this.maxHealth), 5);
    }

    moveTowards(player){
        let dx = player.x - this.x;
        let dy = player.y - this.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist>0){
            this.x += (dx/dist)*this.speed;
            this.y += (dy/dist)*this.speed;
        }
    }
}
