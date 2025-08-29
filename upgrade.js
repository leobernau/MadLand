let allUpgrades = [];
for(let i=0;i<35;i++){
    allUpgrades.push({name:'Upgrade'+(i+1), level:0, maxLevel:5, img:null});
    allUpgrades[i].img = new Image();
    allUpgrades[i].img.src = `assets/upgrade${i+1}.png`;
}

function applyUpgrade(upgrade){
    upgrade.level++;
    player.upgrades.push(upgrade.name);
    if(upgrade.name.includes('Heal')){
        player.health = Math.min(player.maxHealth, player.health+20);
    }
    if(upgrade.name.includes('Bee')){
        // z.B. automatisches schießen mit Bienen
    }
}
