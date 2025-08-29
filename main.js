const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeLeft = 45*60;
let frameCount =0;

function updateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft%60;
    document.getElementById('timer').textContent = minutes+':'+(seconds<10?'0':'')+seconds;
}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    let dx=0, dy=0;
    if(keys['w']){dy=player.speed; player.lastDir={x:0,y:-1};}
    if(keys['s']){dy=-player.speed; player.lastDir={x:0,y:1};}
    if(keys['a']){dx=player.speed; player.lastDir={x:-1,y:0};}
    if(keys['d']){dx=-player.speed; player.lastDir={x:1,y:0};}

    if(keys[' '] && player.dashCooldown<=0){
        dx += player.lastDir.x*player.dashSpeed;
        dy += player.lastDir.y*player.dashSpeed;
        player.dashCooldown=60;
    }
    if(player.dashCooldown>0) player.dashCooldown--;

    // Draw world
    worldObjects.forEach(obj=>{
        obj.x+=dx; obj.y+=dy;
        ctx.drawImage(obj.img,obj.x,obj.y,obj.width,obj.height);
    });

    // Draw player
    ctx.drawImage(player.img,player.x-25,player.y-25,50,50);
    ctx.fillStyle='red';
    ctx.fillRect(player.x-25,player.y-35,50*(player.health/player.maxHealth),5);

    // Monsters
    monsters.forEach((m,i)=>{
        let mx = player.x - m.x;
        let my = player.y - m.y;
        let dist = Math.sqrt(mx*mx+my*my);
        m.x += (mx/dist)*m.speed;
        m.y += (my/dist)*m.speed;
        ctx.drawImage(m.img,m.x-25,m.y-25,50,50);
        ctx.fillStyle='black';
        ctx.fillRect(m.x-25,m.y-35,50*(m.health/m.maxHealth),5);

        if(Math.abs(player.x-m.x)<35 && Math.abs(player.y-m.y)<35){
            player.health -=0.5;
        }
        if(m.health<=0){
            spawnCrystal(m.x,m.y);
            monsters.splice(i,1);
        }
    });

    // Crystals
    crystals.forEach((c,i)=>{
        c.x+=dx; c.y+=dy;
        ctx.drawImage(c.img,c.x-c.size/2,c.y-c.size/2,c.size,c.size);
        if(Math.abs(player.x-c.x)<30 && Math.abs(player.y-c.y)<30){
            player.crystals++;
            crystals.splice(i,1);
            document.getElementById('crystals').textContent = player.crystals;
        }
    });

    // Spawn monsters
    if(Math.random()<0.02){spawnMonster();}

    if(timeLeft>0 && frameCount%60==0){timeLeft--;updateTimer();}
    frameCount++;
    requestAnimationFrame(update);
}

update();
