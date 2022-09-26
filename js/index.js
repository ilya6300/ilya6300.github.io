const selectHeroesBoxId = document.querySelector("#select-heroes-box-id");
const battleConteiner = document.querySelector("#battle-conteiner");
const gameOver = document.querySelector("#loser");
const youWiner = document.querySelector("#you-winer");
const beer = document.querySelector("#beer");

// Герой асассин
const selectCardAssassin = document.querySelector("#select-card-assassin");
const assassin = document.querySelector("#assassin");

let basicDamageHeroStatAssasin = document.querySelector(
  "#basic-damage-hero-stat-assassin"
);
let staminaHeroScoreAssasin = document.querySelector(
  "#stamina-hero-score-assassin"
);
let hpHeroScoreAssasin = document.querySelector("#hp-hero-score-assassin");
let hpHeroDinamicAssassin = document.querySelector("#hp-hero-dinamic-assassin");

// Герой рыцарь
const selectCardKnight = document.querySelector("#select-card-knight");
const knight = document.querySelector("#knight");

let basicDamageHeroStatKnight = document.querySelector(
  "#basic-damage-hero-stat-knight"
);
let staminaHeroScoreKnight = document.querySelector(
  "#stamina-hero-score-knight"
);
let hpHeroScoreKnight = document.querySelector("#hp-hero-score-knight");
let hpHeroDinamicKnight = document.querySelector("#hp-hero-dinamic-knight");

// Герой колдун
const selectCardWitch = document.querySelector("#select-card-witch");
const witch = document.querySelector("#witch");

let basicDamageHeroStatWitch = document.querySelector(
  "#basic-damage-hero-stat-witch"
);
let staminaHeroScoreWitch = document.querySelector("#stamina-hero-score-witch");
let hpHeroScoreWitch = document.querySelector("#hp-hero-score-witch");
let hpHeroDinamicWitch = document.querySelector("#hp-hero-dinamic-witch");

// Серёга
const selectCardSer = document.querySelector("#select-card-ser");
const Ser = document.querySelector("#ser");
let hpHeroDinamicSer = document.querySelector("#hp-hero-dinamic-ser");
let hpHeroScoreSer = document.querySelector("#hp-hero-score-ser");
let basicDamageHeroStatSer = document.querySelector(
  "#basic-damage-hero-stat-ser"
);
let staminaHeroScoreSer = document.querySelector("#stamina-hero-score-ser");
// Скиллы Серёги
const skillBagSystem = document.querySelector("#skill-bag-system");
const skillRecoveryMana = document.querySelector("#skill-recovery-mana");

// Враги
const cardEnemyGoblin = document.querySelector("#card-enemy-goblin");
const cardEnemySkeleton = document.querySelector("#card-enemy-skeleton");
const cardEnemyVampir = document.querySelector("#card-enemy-vampir");

let hpEnemyGoblin = document.querySelector("#hp-enemy-goblin");
let enemyScoreGoblin = document.querySelector("#hp-enemy-score-goblin");
let hpEnemySkeleton = document.querySelector("#hp-enemy-skeleton");
let enemyScoreSkeleton = document.querySelector("#hp-enemy-score-skeleton");
let hpEnemyVampir = document.querySelector("#hp-enemy-vampir");
let enemyScoreVampir = document.querySelector("#hp-enemy-score-vampir");

let scoreGoblin = document.querySelector("#score-goblin");
let scoreSkeleton = document.querySelector("#score-skeleton");
let scoreVampir = document.querySelector("#score-vampir");

let goblinLose = document.querySelector("#goblin-lose");
let skeletonLose = document.querySelector("#skeleton-lose");
let vampirLose = document.querySelector("#vampir-lose");

scoreGoblin = 1;
scoreSkeleton = 1;
scoreVampir = 1;

let winer;

// Анимации

// Цифры

const damageContainer = document.querySelector("#damage-container");
let damageContainerHero = document.querySelector("#damage-container-hero");
let damageContainerEnemy = document.querySelector("#damage-container-enemy");
let upHillHero = document.querySelector("#up-hill-hero");
let upHillEnemy = document.querySelector("#up-hill-enemy");

// Боевые карты

let basicAttack = document.querySelector("#basic-attack");
let strongAttack = document.querySelector("#strong-attack");
let skillKhight = document.querySelector("#skill-khight");

let basicAttackText = document.querySelector("#basic-attack-text");
let strongAttackText = document.querySelector("#strong-attack-text");
// Характеристики героя

let hero = {
  classHero: 0, // 1 - Асассин, 2 - Рыцарь, 3 - Колдун
  basicDamageHero: 0,
  strongDamageHero: 0,
  hpHero: 0,
  staminaHero: 0,
  skillWitchAbsorption: 0, // Поглощение при сильном ударе
  skillWitchSkeleton: 0,
  skillWitchVampir: 0,
};

// Характеристики врага

let enemy = {
  damageEnemy: 0,
  hpEnemy: 0,
  classEnemy: 0, // 1 - гоблин, 2 - скелет, 3 - вампир
};

// Таверна

const tavernCard = document.querySelector("#tavern-card");
let tavernCardCharge = document.querySelector("#tavern-card-charge");

// Зарядов таверны
window.onload = function () {
  tavernCharge = 2;
  tavernCardCharge.innerText = tavernCharge += " раза";

  winer = scoreGoblin + scoreSkeleton + scoreVampir;
  console.log(winer);
};

let tavernCharge;

function tavernChargeFunction() {
  if (tavernCharge == 0) {
    tavernCard.style["pointer-events"] = "none";
  }
}

// Таверна для асассина

function tavernAssassin() {
  console.log("Привет, Асассин!");
  if (hero.hpHero >= 45) {
    hero.hpHero = 80;
    hpHeroScoreAssasin.innerText = hero.hpHero;
    hpHeroDinamicAssassin.style["width"] = hero.hpHero * 1.93 + "px";
    console.log(hero.hpHero);
  } else {
    hero.hpHero = hero.hpHero + 35;
    hpHeroScoreAssasin.innerText = hero.hpHero;
    hpHeroDinamicAssassin.style["width"] = hero.hpHero * 1.93 + "px";
  }
}

tavernCard.onclick = function () {
  tavernCharge = tavernCharge - 1;
  tavernCardCharge.innerText = tavernCharge + " раза";
  tavernChargeFunction();
  console.log(tavernCharge);
  console.log("Привет, Асассин!");
  tavernAssassin();
};

// Таверна для рыцаря

function tavernKnight() {
  console.log("Привет, Рыцарь!");
  if (hero.hpHero >= 75) {
    hero.hpHero = 110;
    hpHeroScoreKnight.innerText = hero.hpHero;
    hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
    console.log(hero.hpHero);
  } else {
    hero.hpHero = hero.hpHero + 35;
    hpHeroScoreKnight.innerText = hero.hpHero;
    hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
  }
}

tavernCard.onclick = function () {
  tavernCharge = tavernCharge - 1;
  tavernCardCharge.innerText = tavernCharge + " раза";
  tavernChargeFunction();
  if (hero.classHero === 1) {
    console.log("Привет, Асассин!");
    tavernAssassin();
  } else if (hero.classHero === 2) {
    console.log("Привет, Рыцарь!");
    tavernKnight();
  }
};

// Таверна для колдуна

function tavernWitch() {
  console.log("Привет, Колдун!");
  if (hero.hpHero >= 35) {
    hero.hpHero = 70;
    hpHeroScoreWitch.innerText = hero.hpHero;
    hpHeroDinamicWitch.style["width"] = hero.hpHero * 2.214 + "px";
    console.log(hero.hpHero);
  } else {
    hero.hpHero = hero.hpHero + 35;
    hpHeroScoreWitch.innerText = hero.hpHero;
    hpHeroDinamicWitch.style["width"] = hero.hpHero * 2.214 + "px";
  }
}

tavernCard.onclick = function () {
  beer.style['display'] = 'block';
  tavernCharge = tavernCharge - 1;
  tavernCardCharge.innerText = tavernCharge + " раза";
  tavernChargeFunction();
  if (hero.classHero == 1) {
    console.log("Привет, Асассин!");
    tavernAssassin();
  } else if (hero.classHero == 2) {
    console.log("Привет, Рыцарь!");
    tavernKnight();
  } else if (hero.classHero == 3) {
    console.log("Привет, Колдун!");
    tavernWitch();
  } else if (hero.classHero == 4) {
    console.log("Привет, Друг!");
    tavernSer();
  }
  setTimeout(() => {
    beer.style['display'] = 'none';
  }, 1500);
};

// Таверна для Серёжи

function tavernSer() {
  console.log("Привет, Серёга!!!");
  hero.hpHero = 30;
  hpHeroScoreSer.innerText = hero.hpHero;
  hpHeroDinamicSer.style["width"] = hero.hpHero * 5.16 + "px";
}

// Выбор героя

//  Асассин

selectCardAssassin.onclick = function () {
  hero.classHero = 1;
  hero.basicDamageHero = 11;
  hero.strongDamageHero = 24;
  hero.hpHero = 80;
  hero.staminaHero = 9;
  selectHeroesBoxId.style["display"] = "none";
  assassin.style["display"] = "block";
  hpHeroScoreAssasin.innerText = hero.hpHero;
  basicDamageHeroStatAssasin.innerText = hero.basicDamageHero;
  staminaHeroScoreAssasin.innerText = hero.staminaHero;
  hpHeroDinamicAssassin.style["width"] = hero.hpHero * 1.93 + "px";
  skillKhight.style["display"] = "none";
  skillBagSystem.style["display"] = "none";
  skillRecoveryMana.style["display"] = "none";
  tavernCardCharge.innerText = tavernCharge + " раза";
  tavernCharge = 2;
  basicAttackText.innerText = hero.basicDamageHero;
  strongAttackText.innerText = hero.strongDamageHero;
};

// Рыцарь

selectCardKnight.onclick = function () {
  hero.classHero = 2;
  hero.basicDamageHero = 9;
  hero.strongDamageHero = 19;
  hero.hpHero = 110;
  hero.staminaHero = 6;
  selectHeroesBoxId.style["display"] = "none";
  knight.style["display"] = "block";
  hpHeroScoreKnight.innerText = hero.hpHero;
  basicDamageHeroStatKnight.innerText = hero.basicDamageHero;
  staminaHeroScoreKnight.innerText = hero.staminaHero;
  hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
  skillBagSystem.style["display"] = "none";
  skillRecoveryMana.style["display"] = "none";
  tavernCharge = 2;
  basicAttackText.innerText = hero.basicDamageHero;
  strongAttackText.innerText = hero.strongDamageHero;
};

// Колдун

selectCardWitch.onclick = function () {
  hero.classHero = 3;
  hero.basicDamageHero = 10;
  hero.strongDamageHero = 26;
  hero.hpHero = 70;
  hero.staminaHero = 6;
  skillWitchAbsorption = 1;
  selectHeroesBoxId.style["display"] = "none";
  witch.style["display"] = "block";
  hpHeroScoreWitch.innerText = hero.hpHero;
  basicDamageHeroStatWitch.innerText = hero.basicDamageHero;
  staminaHeroScoreWitch.innerText = hero.staminaHero;
  hpHeroDinamicWitch.style["width"] = hero.hpHero * 2.21 + "px";
  skillKhight.style["display"] = "none";
  skillBagSystem.style["display"] = "none";
  skillRecoveryMana.style["display"] = "none";
  tavernCharge = 2;
  basicAttackText.innerText = hero.basicDamageHero;
  strongAttackText.innerText = hero.strongDamageHero;
  tavernCardCharge.innerText = tavernCharge + " раза";
};

// Серёга

selectCardSer.onclick = function () {
  hero.classHero = 4;
  hero.basicDamageHero = 10;
  hero.strongDamageHero = 1;
  hero.hpHero = 30;
  hero.staminaHero = 99;
  selectHeroesBoxId.style["display"] = "none";
  Ser.style["display"] = "block";
  hpHeroScoreSer.innerText = hero.hpHero;
  basicDamageHeroStatSer.innerText = hero.basicDamageHero;
  staminaHeroScoreSer.innerText = hero.staminaHero;
  hpHeroDinamicSer.style["width"] = hero.hpHero * 5.16 + "px";
  skillKhight.style["display"] = "none";
  strongAttack.style["display"] = "none";
  tavernCharge = 999;
  basicAttackText.innerText = hero.basicDamageHero;
  strongAttackText.innerText = hero.strongDamageHero;
  tavernCardCharge.innerText = tavernCharge + " раза";
};

// Выбор героя конец

// Выбор врага

// Гоблин

cardEnemyGoblin.onclick = function () {
  enemy.damageEnemy = 6;
  enemy.hpEnemy = 65;
  enemy.classEnemy = 1;
  activationBoxBattle();

  battleVSgoblin();
};

// Скелет

cardEnemySkeleton.onclick = function () {
  enemy.damageEnemy = 7;
  enemy.hpEnemy = 55;
  enemy.classEnemy = 2;
  activationBoxBattle();
  battleVSskeleton();
};

// Вампир

cardEnemyVampir.onclick = function () {
  enemy.damageEnemy = 10;
  enemy.hpEnemy = 120;
  enemy.classEnemy = 3;
  activationBoxBattle();
  battleVSvampir();
};

// Механника боя

function staminaAssasin() {
  if (hero.staminaHero <= 7) {
    hero.staminaHero = hero.staminaHero + 2;
    staminaHeroScoreAssasin.innerText = hero.staminaHero;
  } else if ((hero.staminaHero = 8)) {
    hero.staminaHero = hero.staminaHero + 1;
    staminaHeroScoreAssasin.innerText = hero.staminaHero;
  }
}

function staminaKnight() {
  if (hero.staminaHero <= 4) {
    hero.staminaHero = hero.staminaHero + 2;
    staminaHeroScoreKnight.innerText = hero.staminaHero;
  } else if ((hero.staminaHero = 5)) {
    hero.staminaHero = hero.staminaHero + 1;
    staminaHeroScoreKnight.innerText = hero.staminaHero;
  }
}

function staminaWitch() {
  if (hero.staminaHero <= 4) {
    hero.staminaHero = hero.staminaHero + 2;
    staminaHeroScoreWitch.innerText = hero.staminaHero;
  } else if ((hero.staminaHero = 5)) {
    hero.staminaHero = hero.staminaHero + 1;
    staminaHeroScoreWitch.innerText = hero.staminaHero;
  }
}

function staminaSer() {
  if (hero.staminaHero <= 98) {
    hero.staminaHero = hero.staminaHero + 1;
    staminaHeroScoreSer.innerText = hero.staminaHero;
  }
}

// Умение вампира у колдуна

function getSkillWitchVampir() {
  if (hero.skillWitchVampir == 1) {
    hero.hpHero = hero.hpHero + 4;
    upHillHero.innerText = "+ 4";
    hpHeroScoreWitch.innerText = hero.hpHero;
    hpHeroDinamicWitch.style["width"] = hero.hpHero * 2.214 + "px";
    setTimeout(function () {
      upHillHero.innerText = "";
    }, 800);
  }
}

// Умение скелета у колдуна

// Расчёт урона по герою

function damageOnHero() {
  if (hero.classHero == 1) {
    hpHeroScoreAssasin.innerText = hero.hpHero;
    hpHeroDinamicAssassin.style["width"] = hero.hpHero * 1.93 + "px";
  } else if (hero.classHero == 2) {    
    hpHeroScoreKnight.innerText = hero.hpHero;
    hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
  } else if (hero.classHero == 3) {    
    hpHeroScoreWitch.innerText = hero.hpHero;
    hpHeroDinamicWitch.style["width"] = hero.hpHero * 2.214 + "px";
  } else if (hero.classHero == 4) {    
    hpHeroScoreSer.innerText = hero.hpHero;
    hpHeroDinamicSer.style["width"] = hero.hpHero * 5.16 + "px";
  }
  if (hero.hpHero <= 0) {
    gameOver.style["display"] = "block";
  }
}

// Активация поля боя

function activationBoxBattle() {
  battleConteiner.style["display"] = "block";
  if (hero.classHero == 1) {
    assassin.classList.add("card-battle-hero");
  } else if (hero.classHero == 2) {
    knight.classList.add("card-battle-hero");
  } else if (hero.classHero == 3) {
    witch.classList.add("card-battle-hero");
  } else if (hero.classHero == 4) {
    Ser.classList.add("card-battle-hero");
  }
  // Гоблин
  if (enemy.classEnemy == 1) {
    cardEnemyGoblin.classList.add("card-enemy-battle");
    enemyScoreGoblin.innerText = enemy.hpEnemy;
    hpEnemyGoblin.style["width"] = enemy.hpEnemy * 2.73 + "px";
    cardEnemyGoblin.style["pointer-events"] = "none";
    // Скелет
  } else if (enemy.classEnemy == 2) {
    cardEnemySkeleton.classList.add("card-enemy-battle");
    enemyScoreSkeleton.innerText = enemy.hpEnemy;
    hpEnemySkeleton.style["width"] = enemy.hpEnemy * 3.23 + "px";
    cardEnemySkeleton.style["pointer-events"] = "none";
    // Вампир
  } else if (enemy.classEnemy == 3) {
    cardEnemyVampir.classList.add("card-enemy-battle");
    enemyScoreVampir.innerText = enemy.hpEnemy;
    hpEnemyVampir.style["width"] = enemy.hpEnemy * 1.48 + "px";
    cardEnemyVampir.style["pointer-events"] = "none";
  }
}

// Проверка на HP врага - победа!

function checkHpEnemyWitchForSkillSkeleton() {
  scoreSkeleton = 0;
  enemyScoreSkeleton.innerText = 0;
  hpEnemySkeleton.style["width"] = "0px";
  hpEnemySkeleton = 0;
  skeletonLose.innerText = "Повержен";
  hero.skillWitchSkeleton = 1;
  console.log(hero.skillWitchSkeleton);
  winer = winer - 1;
  if (winer == 0) {
    youWiner.style["display"] = "block";
  }
  witch.classList.remove("card-battle-hero");
  if (enemy.classEnemy == 1) {
    cardEnemyGoblin.classList.remove("card-enemy-battle");
  } else if (enemy.classEnemy == 2) {
    cardEnemySkeleton.classList.remove("card-enemy-battle");
  } else if (enemy.classEnemy == 3) {
    cardEnemyVampir.classList.remove("card-enemy-battle");
  }
}

function checkHpEnemy() {
  if (enemy.classEnemy == 1) {
    scoreGoblin = 0;
    enemyScoreGoblin.innerText = 0;
    hpEnemyGoblin.style["width"] = "0px";
    hpEnemyGoblin = 0;
    goblinLose.innerText = "Повержен";
    cardEnemyGoblin.style['animation'] = 'attackEnemyAnim none';
    battleConteiner.classList.remove('bag-animation');
    skillBagSystem.style["pointer-events"] = "visible";
    // assassin.style['animation'] = 'attackHeroAnimation 1.7s forwards';
  } else if (enemy.classEnemy == 2) {
    scoreSkeleton = 0;
    enemyScoreSkeleton.innerText = 0;
    hpEnemySkeleton.style["width"] = "0px";
    hpEnemySkeleton = 0;
    skeletonLose.innerText = "Повержен";
    cardEnemySkeleton.style['animation'] = 'attackEnemyAnim none';
    battleConteiner.classList.remove('bag-animation');
    skillBagSystem.style["pointer-events"] = "visible";
  } else if (enemy.classEnemy == 3) {
    scoreVampir = 0;
    enemyScoreVampir.innerText = 0;
    hpEnemyVampir.style["width"] = "0px";
    hpEnemyVampir = 0;
    vampirLose.innerText = "Повержен";
    cardEnemyVampir.style['animation'] = 'attackEnemyAnim none';
    battleConteiner.classList.remove('bag-animation');
    skillBagSystem.style["pointer-events"] = "visible";
  }
  damageContainerHero.innerText = "";
  damageContainerEnemy.innerText = "";
  winer = winer - 1;
  if (winer == 0) {
    youWiner.style["display"] = "block";
  }
  battleConteiner.style["display"] = "none";
  if (hero.classHero == 1) {
    assassin.classList.remove("card-battle-hero");
  } else if (hero.classHero == 2) {
    knight.classList.remove("card-battle-hero");
  } else if (hero.classHero == 3) {
    witch.classList.remove("card-battle-hero");
  } else if (hero.classHero == 4) {
    Ser.classList.remove("card-battle-hero");
  }
  if (enemy.classEnemy == 1) {
    cardEnemyGoblin.classList.remove("card-enemy-battle");
  } else if (enemy.classEnemy == 2) {
    cardEnemySkeleton.classList.remove("card-enemy-battle");
  } else if (enemy.classEnemy == 3) {
    cardEnemyVampir.classList.remove("card-enemy-battle");
  }
}

// Щитоносец

function defendKhignt() {
  if (hero.staminaHero < 6) {
    hero.staminaHero = hero.staminaHero + 1;
    staminaHeroScoreKnight.innerText = hero.staminaHero;
    hero.hpHero = hero.hpHero - 3;
    hpHeroScoreKnight.innerText = hero.hpHero;
    hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
  } else {
    hero.hpHero = hero.hpHero - 3;
    hpHeroScoreKnight.innerText = hero.hpHero;
    hpHeroDinamicKnight.style["width"] = hero.hpHero * 1.4 + "px";
  }
}

// Умение "Баг в системе"

let timeBagSystem;

function clearBagSystem() {
  if (enemy.hpEnemy <= 0) { 
    
    clearInterval(timeBagSystem);
    checkHpEnemy();
  }
}
function staminaSerFunction() {
  if (hero.staminaHero <= 0) {
    battleConteiner.classList.remove('bag-animation');
    skillBagSystem.style["pointer-events"] = "visible";
    clearInterval(timeBagSystem);
  }
}

skillBagSystem.onclick = function () {
  skillBagSystem.style["pointer-events"] = "none";
  timeBagSystem = setInterval(() => {    
    battleConteiner.classList.add('bag-animation');
    if (enemy.classEnemy == 1 && hero.staminaHero > 0) {
      enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
      enemyScoreGoblin.innerText = enemy.hpEnemy;
      hpEnemyGoblin.style["width"] = enemy.hpEnemy * 2.73 + "px";
    } else if (enemy.classEnemy == 2 && hero.staminaHero > 0) {
      enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
      enemyScoreSkeleton.innerText = enemy.hpEnemy;
      hpEnemySkeleton.style["width"] = enemy.hpEnemy * 3.23 + "px";
    } else if (enemy.classEnemy == 3 && hero.staminaHero > 0) {
      enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
      enemyScoreVampir.innerText = enemy.hpEnemy;
      hpEnemyVampir.style["width"] = enemy.hpEnemy * 1.48 + "px";
    }
    if (hero.staminaHero > 0) {
      hero.staminaHero = hero.staminaHero - 3;
      staminaHeroScoreSer.innerText = hero.staminaHero;
    }
    staminaSerFunction();
    clearBagSystem();
  }, 100);
};

// Читерство мастера (Обеденное время)

skillRecoveryMana.onclick = function () {
  serMessage();
  let skillRecoveryManaMagaz = setTimeout(() => {
    hero.staminaHero = 99;
    staminaHeroScoreSer.innerText = hero.staminaHero;
    clearTimeout(skillRecoveryManaMagaz);
  }, 2000);
};

// Диалог с Серёгой

function serMessage () {

  if (hero.staminaHero < 99) {
    Ser.style["display"] = "none";
    damageContainerEnemy.innerText = "Звоним...";
    setTimeout(() => {
      damageContainerEnemy.innerText = "";
    }, 1500);
    
    setTimeout(() => {
      upHillHero.innerText = "Да?";
      setTimeout(() => {
        upHillHero.innerText = "";
      }, 1500);
    }, 1500);
  
    setTimeout(() => {
      damageContainerEnemy.innerText = "Серёг, ты где?";
      setTimeout(() => {
        damageContainerEnemy.innerText = "";
      }, 2500);
    }, 4000);
  
    setTimeout(() => {
      upHillHero.innerText = "Я в магазине, сейчас приду, а что?";
      setTimeout(() => {
        upHillHero.innerText = "";
      }, 2500);
    }, 7200);
  
    setTimeout(() => {
      damageContainerEnemy.innerText = "Захвати мне чего-нибудь перекусить";
      setTimeout(() => {
        damageContainerEnemy.innerText = "";
      }, 2500);
    }, 11000);
  
    setTimeout(() => {
      upHillHero.innerText = "Зачем тебе? Ты всё равно скоро умрёшь...";
      setTimeout(() => {
        upHillHero.innerText = "";
  
      }, 2500);
    }, 13800);
  
    setTimeout(() => {
      upHillHero.innerText = "+ 1 к поиску багов"
      hero.strongDamageHero = hero.strongDamageHero + 1;
      setTimeout(() => {
        upHillHero.innerText = "";
        Ser.style["display"] = "block";
      }, 2500);
    }, 17000);
    
  
  } else {
    upHillHero.innerText = "Серёжа пока не устал, Серёжа ещё может работать";
    setTimeout(() => {
      upHillHero.innerText = ""
    }, 2000);
  }
  
    
  
  }
// Проверка на выносливость функция

function checkStaminaHero() {
  if (enemy.classEnemy == 1) {
    hpEnemyGoblin.style["width"] = enemy.hpEnemy * 2.73 + "px";
  } else if (enemy.classEnemy == 2) {
    hpEnemySkeleton.style["width"] = enemy.hpEnemy * 3.23 + "px";
  } else if (enemy.classEnemy == 3) {
    hpEnemyVampir.style["width"] = enemy.hpEnemy * 1.48 + "px";
  }
  if (hero.classHero == 1) {
    hero.staminaHero = hero.staminaHero - 3;
    staminaHeroScoreAssasin.innerText = hero.staminaHero;
  } else if (hero.classHero == 2) {
    hero.staminaHero = hero.staminaHero - 2;
    staminaHeroScoreKnight.innerText = hero.staminaHero;
  } else if (hero.classHero == 3) {
    hero.staminaHero = hero.staminaHero - 3;
    staminaHeroScoreWitch.innerText = hero.staminaHero;
  } else if (hero.classHero == 4) {
    hero.staminaHero = hero.staminaHero - 3;
    staminaHeroScoreSer.innerText = hero.staminaHero;
  }
}

// Анимации атаки

function animationAttkackHero() {
  if (hero.classHero == 1) {
    assassin.classList.toggle("attackHero");
  } else if (hero.classHero == 2) {
    knight.classList.toggle("attackHero");
  } else if (hero.classHero == 3) {
    witch.classList.toggle("attackHero");
  } else if (hero.classHero == 4) {
    Ser.classList.toggle("attackHero");
  }
  setTimeout(() => {
    if (hero.classHero == 1) {
      assassin.classList.toggle("attackHero");
      attackEnemyAnimation ();
    } else if (hero.classHero == 2) {
      knight.classList.toggle("attackHero");
      attackEnemyAnimation ();
    } else if (hero.classHero == 3) {
      witch.classList.toggle("attackHero");
      attackEnemyAnimation ();
    } else if (hero.classHero == 4) {
      Ser.classList.toggle("attackHero");
      attackEnemyAnimation ();
    }
  }, 2000);
}


function attackEnemyAnimation() {
  if (enemy.classEnemy == 1) {
    cardEnemyGoblin.classList.add("attackEnemyAnim");
  } else if (enemy.classEnemy == 2) {
    cardEnemySkeleton.classList.add("attackEnemyAnim");
  } else if (enemy.classEnemy == 3) {
    cardEnemyVampir.classList.add("attackEnemyAnim");
  } 
  setTimeout(() => {
    if (enemy.classEnemy == 1) {
      cardEnemyGoblin.classList.remove("attackEnemyAnim");
    } else if (enemy.classEnemy == 2) {
      cardEnemySkeleton.classList.remove("attackEnemyAnim");
    } else if (enemy.classEnemy == 3) {
      cardEnemyVampir.classList.remove("attackEnemyAnim");
    } 
  }, 2000);
}



// Боевые карты

// Битва против гоблина
function battleVSgoblin() {
  // Базовая атака
  basicAttack.onclick = function () {
    animationAttkackHero();
    basicAttack.style["pointer-events"] = "none";
    // Таймер атаки героя и аниация урона по врагу
    setTimeout(function () {
      enemy.hpEnemy = enemy.hpEnemy - hero.basicDamageHero;
      enemyScoreGoblin.innerText = enemy.hpEnemy;
      hpEnemyGoblin.style["width"] = enemy.hpEnemy * 2.73 + "px";
      damageContainerEnemy.innerText = "-" + hero.basicDamageHero;
      setTimeout(function () {
        damageContainerEnemy.innerText = "";
      }, 1000);

      getSkillWitchVampir();
      // Восстановление энергии
      if (hero.classHero == 1) {
        staminaAssasin();
      } else if (hero.classHero == 2) {
        staminaKnight();
      } else if (hero.classHero == 3) {
        staminaWitch();
      } else if (hero.classHero == 4) {
        staminaSer();
      }
      // Проверка на hp врага
      if (enemy.hpEnemy <= 0) {
        checkHpEnemy();
        basicAttack.style["pointer-events"] = "visible";
        return;
      }
      
            // Урон по герою
      // Таймер атаки и анимация врага
      setTimeout(function () {
        if (hero.skillWitchSkeleton == 1) {
          hero.hpHero = hero.hpHero - Math.round(enemy.damageEnemy * 0.7);
        } else {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
        }
        damageOnHero();
        // Таймер атаки героя и аниация урона по герою
        if (hero.skillWitchSkeleton == 1) {
          damageContainerHero.innerText =
            "-" + Math.round(enemy.damageEnemy * 0.7);
        } else {
          damageContainerHero.innerText = "-" + enemy.damageEnemy;
        }
        setTimeout(function () {
          damageContainerHero.innerText = "";
        }, 1000);
        basicAttack.style["pointer-events"] = "visible";
      }, 2000);
    }, 900);
  };
  // Сильная атака
  strongAttack.onclick = function () {    
    // Проверка на выносливость
    if (hero.classHero == 1 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreGoblin.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Ассасин");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          if (hero.skillWitchSkeleton == 1) {
            hero.hpHero = hero.hpHero - Math.round(enemy.damageEnemy * 0.7);
          } else {
            hero.hpHero = hero.hpHero - enemy.damageEnemy;
          }
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    } else if (hero.classHero == 2 && hero.staminaHero >= 2) {
      animationAttkackHero();
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreGoblin.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Ассасин");
        console.log("Рыцарь");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
      strongDamageHero;
    } else if (hero.classHero == 3 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreGoblin.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        getSkillWitchVampir();
        console.log("Колдун");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    }
    // Проверка на выносливость - ложь
    else {
      return;
    }
  };

  // Щитоносец с анимацией

  skillKhight.onclick = function () {
    skillKhight.style["pointer-events"] = "none";
    setTimeout(function () {
      damageContainerHero.innerText = "-3";
      defendKhignt();
    }, 800);
    setTimeout(function () {
      damageContainerHero.innerText = "";
      skillKhight.style["pointer-events"] = "visible";
    }, 900);
  };
}

// Битва против скелета

function battleVSskeleton() {
  // Базовая атака
  basicAttack.onclick = function () {
    animationAttkackHero();
    basicAttack.style["pointer-events"] = "none";
    // Таймер атаки героя и аниация урона по врагу
    setTimeout(function () {
      enemy.hpEnemy = enemy.hpEnemy - Math.round(hero.basicDamageHero * 0.7);
      enemyScoreSkeleton.innerText = enemy.hpEnemy;
      hpEnemySkeleton.style["width"] = enemy.hpEnemy * 3.23 + "px";
      damageContainerEnemy.innerText = "-" + hero.basicDamageHero;
      setTimeout(function () {
        damageContainerEnemy.innerText = "";
      }, 1000);
      getSkillWitchVampir();
      // Восстановление энергии
      if (hero.classHero == 1) {
        staminaAssasin();
      } else if (hero.classHero == 2) {
        staminaKnight();
      } else if (hero.classHero == 3) {
        staminaWitch();
      }
      // Проверка на hp врага
      if (enemy.hpEnemy <= 0) {
        basicAttack.style["pointer-events"] = "visible";
        checkHpEnemy();
        return;
      }
      // Урон по герою
      // Таймер атаки и анимация врага
      setTimeout(function () {
        hero.hpHero = hero.hpHero - enemy.damageEnemy;
        damageOnHero();
        // Таймер атаки героя и аниация урона по герою
        if (hero.skillWitchSkeleton == 1) {
          damageContainerHero.innerText =
            "-" + Math.round(enemy.damageEnemy * 0.7);
        } else {
          damageContainerHero.innerText = "-" + enemy.damageEnemy;
        }
        setTimeout(function () {
          damageContainerHero.innerText = "";
        }, 1000);
        basicAttack.style["pointer-events"] = "visible";
      }, 1000);
    }, 900);
  };
  // Сильная атака
  strongAttack.onclick = function () {
    // Проверка на выносливость
    if (hero.classHero == 1 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - Math.round(hero.strongDamageHero * 0.6);
        enemyScoreSkeleton.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Ассасин");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    } else if (hero.classHero == 2 && hero.staminaHero >= 2) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - Math.round(hero.strongDamageHero * 0.6);
        enemyScoreSkeleton.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Рыцарь");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    } else if (hero.classHero == 3 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - Math.round(hero.strongDamageHero * 0.6);
        enemyScoreSkeleton.innerText = enemy.hpEnemy;
        getSkillWitchVampir();
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Колдун");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          hero.skillWitchSkeleton = 1;
          console.log(hero.skillWitchSkeleton);
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    }
    // Проверка на выносливость - ложь
    else {
      return;
    }
  };

  // Щитоносец с анимацией

  skillKhight.onclick = function () {
    skillKhight.style["pointer-events"] = "none";
    setTimeout(function () {
      damageContainerHero.innerText = "-3";
      defendKhignt();
    }, 800);
    setTimeout(function () {
      damageContainerHero.innerText = "";
      skillKhight.style["pointer-events"] = "visible";
    }, 900);
  };
}

// Битва против вампира

function battleVSvampir() {
  // Базовая атака
  basicAttack.onclick = function () {
    animationAttkackHero();
    basicAttack.style["pointer-events"] = "none";
    // Таймер атаки героя и аниация урона по врагу
    setTimeout(function () {
      enemy.hpEnemy = enemy.hpEnemy - hero.basicDamageHero;
      enemyScoreVampir.innerText = enemy.hpEnemy;
      damageContainerEnemy.innerText = "-" + hero.basicDamageHero;
      setTimeout(function () {
        damageContainerEnemy.innerText = "";
      }, 1000);
      // Восстановление энергии
      if (hero.classHero == 1) {
        staminaAssasin();
      } else if (hero.classHero == 2) {
        staminaKnight();
      } else if (hero.classHero == 3) {
        staminaWitch();
      }
      // Проверка на hp врага
      if (enemy.hpEnemy <= 0) {
        checkHpEnemy();
        basicAttack.style["pointer-events"] = "visible";
        return;
      }
      // Урон по герою
      // Таймер атаки и анимация врага
      setTimeout(function () {
        if (hero.skillWitchSkeleton == 1) {
          hero.hpHero = hero.hpHero - Math.round(enemy.damageEnemy * 0.7);
          console.log(hero.skillWitchSkeleton);
          console.log("Отстос здоровья!");
        } else {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
        }
        enemy.hpEnemy = enemy.hpEnemy + 4;
        upHillEnemy.innerText = "+ 4";
        enemyScoreVampir.innerText = enemy.hpEnemy;
        damageOnHero();
        // Таймер атаки героя и аниация урона по герою
        if (hero.skillWitchSkeleton == 1) {
          damageContainerHero.innerText =
            "-" + Math.round(enemy.damageEnemy * 0.7);
        } else {
          damageContainerHero.innerText = "-" + enemy.damageEnemy;
        }
        setTimeout(function () {
          damageContainerHero.innerText = "";
          upHillEnemy.innerText = "";
        }, 1000);
        basicAttack.style["pointer-events"] = "visible";
      }, 1000);
    }, 900);
  };
  // Сильная атака
  strongAttack.onclick = function () {
    // Проверка на выносливость
    if (hero.classHero == 1 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreVampir.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Ассасин");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          if (hero.skillWitchSkeleton == 1) {
            hero.hpHero = hero.hpHero - Math.round(enemy.damageEnemy * 0.7);
          } else {
            hero.hpHero = hero.hpHero - enemy.damageEnemy;
          }
          enemy.hpEnemy = enemy.hpEnemy + 4;
          upHillEnemy.innerText = "+ 4";
          enemyScoreVampir.innerText = enemy.hpEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
            upHillEnemy.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    } else if (hero.classHero == 2 && hero.staminaHero >= 2) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreVampir.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Рыцарь");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          enemy.hpEnemy = enemy.hpEnemy + 4;
          upHillEnemy.innerText = "+ 4";
          enemyScoreVampir.innerText = enemy.hpEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
            upHillEnemy.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    } else if (hero.classHero == 3 && hero.staminaHero >= 3) {
      animationAttkackHero();
      strongAttack.style["pointer-events"] = "none";
      // Таймер атаки героя и аниация урона по врагу
      setTimeout(function () {
        enemy.hpEnemy = enemy.hpEnemy - hero.strongDamageHero;
        enemyScoreVampir.innerText = enemy.hpEnemy;
        damageContainerEnemy.innerText = "-" + hero.strongDamageHero;
        setTimeout(function () {
          damageContainerEnemy.innerText = "";
        }, 1000);
        console.log("Колдун");
        checkStaminaHero();
        // Проверка на hp врага
        if (enemy.hpEnemy <= 0) {
          checkHpEnemy();
          hero.skillWitchVampir = 1;
          console.log(hero.skillWitchVampir);
          strongAttack.style["pointer-events"] = "visible";
          return;
        }
        // Урон по герою
        // Таймер атаки и анимация врага
        setTimeout(function () {
          hero.hpHero = hero.hpHero - enemy.damageEnemy;
          enemy.hpEnemy = enemy.hpEnemy + 4;
          upHillEnemy.innerText = "+ 4";
          enemyScoreVampir.innerText = enemy.hpEnemy;
          damageOnHero();
          // Таймер атаки героя и аниация урона по герою
          if (hero.skillWitchSkeleton == 1) {
            damageContainerHero.innerText =
              "-" + Math.round(enemy.damageEnemy * 0.7);
          } else {
            damageContainerHero.innerText = "-" + enemy.damageEnemy;
          }
          setTimeout(function () {
            damageContainerHero.innerText = "";
            upHillEnemy.innerText = "";
          }, 1000);
          strongAttack.style["pointer-events"] = "visible";
        }, 1000);
      }, 1000);
    }
    // Проверка на выносливость - ложь
    else {
      return;
    }
  };

  // Щитоносец с анимацией

  skillKhight.onclick = function () {
    skillKhight.style["pointer-events"] = "none";
    setTimeout(function () {
      damageContainerHero.innerText = "-3";
      defendKhignt();
    }, 800);
    setTimeout(function () {
      damageContainerHero.innerText = "";
      skillKhight.style["pointer-events"] = "visible";
    }, 900);
  };
}
