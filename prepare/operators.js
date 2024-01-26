let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log('hit - targetHealth:', targetHealth);
    } else {
      console.log('miss');
    }
  } else {
    reloadShip();
    console.log('reloading, shipHealth:', shipHealth);
  }
}

function encounter() {
  console.log('You see a target');
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log('Target eliminated');
    }
    if (isDestroyed(shipHealth)) {
      console.log('ship destroyed');
    }
  }
}

// My code starts here

function isHit() {
  return Math.random();
}

function shipCanFire() {
  // return if health is above 0 and ammo is above 0, else return false
  return shipHealth > 0 && shipAmmo > 0;
}

function reloadShip() {
  // If the ship runs out of ammo before destroying the target, it will suffer damage.
  // This function should reduce ship health by 1 and increase ammo by 3.
  shipHealth--;
  shipAmmo += 3;
}

function isDestroyed(health) {
  // true if health is 0 or less
  return health <= 0;
}

encounter();
