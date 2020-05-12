$(document).ready(() => {
  class Player {
    constructor(name, health, attack, defense, img) {
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.img = img;
    }
  }

  let playerArr = [
    (jim = new Player(
      "Jim",
      80,
      50,
      15,
      "https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/the-best-of-jim-e1531170212262.jpg"
    )),
    (dwight = new Player(
      "Dwight",
      120,
      60,
      10,
      "https://brobible.files.wordpress.com/2019/04/dwight-the-office.jpg?quality=90&w=650&h=366"
    )),
    (michael = new Player(
      "Michael",
      60,
      60,
      5,
      "https://img1.looper.com/img/gallery/the-reason-steve-carell-left-the-office-after-season-7/intro-1568212992.jpg"
    )),
    (pam = new Player(
      "Pam",
      120,
      60,
      20,
      "https://imgix.bustle.com/uploads/image/2019/5/28/44774e68-1522-49ec-87c8-6c966a499b8c-pamtheoffice.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70"
    )),
  ];
  const playerPool = $("#player_pool");
  const fightBtn = $("#fight");
  const attackerArr = [];
  const defenderArr = [];

  $("body").on("click", ".player_card", function (e) {
    playerArr.forEach((x) => {
      if (
        $(this).attr("id").split("_")[1] === x.name &&
        attackerArr.length === 0 &&
        defenderArr.length === 0
      ) {
        playerArr = playerArr.filter((y) => y !== x);
        attackerArr.push(x);
        populateAttackDefender(x, "attacker");
        addPlayer();
      } else if (
        $(this).attr("id").split("_")[1] === x.name &&
        attackerArr.length === 1 &&
        defenderArr.length === 0
      ) {
        defenderArr.push(x);
        playerArr = playerArr.filter((y) => y !== x);
        populateAttackDefender(x, "defender");
        addPlayer();
      } else {
        return;
      }
    });
  });

  fightBtn.on("click", (e) => {
    const d = defenderArr[0];
    const a = attackerArr[0];
    if (attackerArr.length === 1 && defenderArr.length === 1) {
      d.health -= a.attack;
      a.health -= d.defense;
      populateAttackDefender(d, "defender");
      populateAttackDefender(a, "attacker");
      if (d.health <= 0) {
        defenderArr.pop();
        populateAttackDefender(null, "defender");
        a.attack += d.defense / 2;
        populateAttackDefender(a, "attacker");
      }
      if (a.health <= 0) {
        loseGame();
      }
    }
  });

  function loseGame() {
    alert("fuck you");
  }

  function populateAttackDefender(x, aORd) {
    $(`#${aORd}`).empty();
    $(`#${aORd}`).append(` 
      <div id="player_${x.name}" class="player_card">
        <img src=${x.img} alt="">
        <p>${x.name}</p>
        <p>Health: ${x.health}</p>
        <p>Attack: ${x.attack}</p>
        <p>Defene: ${x.defense}</p>
      </div>
  `);
  }

  function addPlayer() {
    playerPool.empty();
    playerArr.forEach((x) => {
      playerPool.append(`
      <div id="player_${x.name}" class="player_card">
        <img src=${x.img} alt="">
        <p>${x.name}</p>
        <p>Health: ${x.health}</p>
        <p>Attack: ${x.attack}</p>
        <p>Defene: ${x.defense}</p>
      </div>
    `);
    });
  }

  addPlayer();
});
