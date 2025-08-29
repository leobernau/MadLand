let player = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
    width:50,
    height:50,
    health:100,
    maxHealth:100,
    speed:5,
    dashSpeed:20,
    dashCooldown:0,
    lastDir:{x:1,y:0},
    upgrades:[],
    xp:0,
    level:1,
    crystals:0,
    img:null
};
player.img = new Image();
player.img.src = 'assets/player.png';

let keys = {};
document.addEventListener('keydown', e=>keys[e.key.toLowerCase()]=true);
document.addEventListener('keyup', e=>keys[e.key.toLowerCase()]=false);
