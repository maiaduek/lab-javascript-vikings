// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
   return `Odin Owns You All!`   
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  vikingAttack() {
    let randomIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let attacked = this.saxonArmy[randomIndex].receiveDamage(this.vikingArmy[0].strength)

    for(let i = 0; i < this.saxonArmy.length; i++) {
      if(this.saxonArmy[i].health <= 0) {this.saxonArmy.splice(i, 1)}
    }
    return attacked
  }

  saxonAttack() {
    let randomIndex = Math.floor(Math.random() + this.vikingArmy.length)
    if (this.vikingArmy.length === 1) {randomIndex = 0}
    
    // console.log(randomIndex)
    // console.log(this.vikingArmy)
    let attacked = this.vikingArmy[randomIndex].receiveDamage(this.saxonArmy[0].strength)

    for(let i = 0; i < this.vikingArmy.length; i++) {
      if (this.vikingArmy[i]. health <= 0) {this.vikingArmy.splice(i, 1)}
    }
    return attacked
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length <= 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
