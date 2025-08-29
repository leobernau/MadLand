let crystals = [];

function spawnCrystal(x,y){
    let c = {x:x, y:y, size:Math.random()*10+5, img:null};
    c.img = new Image();
    c.img.src = 'assets/crystal.png';
    crystals.push(c);
}
