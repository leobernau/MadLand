// upgrades.js
// Alle 35 Upgrades mit 3 Stufen + Max-Stufe
const upgrades = [];

// Beispiel: Upgrade-Typen
const upgradeTypes = [
  "BeeSwarm", "Magnet", "Healing", "SpeedBoost", "RapidFire",
  "Shield", "FireTrail", "IceBlast", "Lightning", "ExtraXP",
  "CriticalHit", "DoubleCoins", "LifeSteal", "RangeBoost", "Armor",
  "SummonWolf", "SummonDragon", "SummonTroll", "Shockwave", "SlowEnemies",
  "Teleport", "DashBoost", "EnergyRegen", "PoisonCloud", "Explosion",
  "Berserk", "Invincibility", "MultiShot", "FreezeTime", "Fireball",
  "HealthBoost", "CoinMagnet", "TimeBonus", "TreasureHunter", "BearKing"
];

// Erstelle alle Upgrades
for(let i=0; i<35; i++){
  upgrades.push({
    name: upgradeTypes[i],
    level: 0,
    maxLevel: 4, // 3 normale Stufen + 1 Max-Stufe
    apply: function(player) {
      switch(this.name){
        case "BeeSwarm":
          if(this.level==1){ player.bees = 1; }
          if(this.level==2){ player.bees = 2; }
          if(this.level==3){ player.bees = 4; }
          if(this.level==4){ player.bees = 8; } // Max-Stufe: Bienen-Schwarm massiv
          break;
        case "Magnet":
          player.magnet = 0.5*this.level; // 0.5,1,1.5,2
          break;
        case "Healing":
          player.heal = 0.5*this.level; // regeneriert pro Tick
          break;
        case "SpeedBoost":
          player.speedBoost = 1 + 0.5*this.level;
          break;
        case "RapidFire":
          player.fireRate = Math.max(0.5 - 0.1*this.level, 0.1);
          break;
        case "Shield":
          player.shield = this.level*25; // 25,50,75,100
          break;
        case "FireTrail":
          player.fireTrail = this.level;
          break;
        case "IceBlast":
          player.iceBlast = this.level;
          break;
        case "Lightning":
          player.lightning = this.level;
          break;
        case "ExtraXP":
          player.xpMultiplier = 1 + 0.25*this.level;
          break;
        case "CriticalHit":
          player.critChance = 0.05*this.level;
          break;
        case "DoubleCoins":
          player.coinMultiplier = 1 + this.level;
          break;
        case "LifeSteal":
          player.lifeSteal = 0.05*this.level;
          break;
        case "RangeBoost":
          player.range = 100 + 20*this.level;
          break;
        case "Armor":
          player.armor = this.level*10;
          break;
        case "SummonWolf":
          player.summons = player.summons || [];
          if(this.level>0){ player.summons.push({type:"wolf", power:this.level}); }
          break;
        case "SummonDragon":
          if(this.level>0){ player.summons.push({type:"dragon", power:this.level}); }
          break;
        case "SummonTroll":
          if(this.level>0){ player.summons.push({type:"troll", power:this.level}); }
          break;
        case "Shockwave":
          player.shockwave = this.level;
          break;
        case "SlowEnemies":
          player.slowEnemies = 0.1*this.level;
          break;
        case "Teleport":
          player.teleport = this.level;
          break;
        case "DashBoost":
          player.dashBoost = 5*this.level;
          break;
        case "EnergyRegen":
          player.energyRegen = 1*this.level;
          break;
        case "PoisonCloud":
          player.poisonCloud = this.level;
          break;
        case "Explosion":
          player.explosion = this.level;
          break;
        case "Berserk":
          player.berserk = this.level;
          break;
        case "Invincibility":
          player.invincible = this.level>0;
          break;
        case "MultiShot":
          player.multiShot = this.level;
          break;
        case "FreezeTime":
          player.freezeTime = this.level;
          break;
        case "Fireball":
          player.fireball = this.level;
          break;
        case "HealthBoost":
          player.maxHealth += this.level*20;
          break;
        case "CoinMagnet":
          player.coinMagnet = this.level;
          break;
        case "TimeBonus":
          player.timeBonus = this.level*5; // +5 Sekunden pro Stufe
          break;
        case "TreasureHunter":
          player.treasureHunter = this.level;
          break;
        case "BearKing":
          player.bearKing = this.level>0;
          break;
      }
    }
  });
}

// Funktion um Upgrade zu leveln
function levelUpUpgrade(index, player){
  let up = upgrades[index];
  if(up.level < up.maxLevel){
    up.level++;
    up.apply(player);
  }
}
