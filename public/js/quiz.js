$(document).ready(() => {
  const quiz = [
    {
      question: "what does the fox say",
      answers: ["shut up", "nothing", "beeezuuu", "yawn"],
      correct: "nothing",
    },
    {
      question: "what the..",
      answers: ["nuts", "hell", "fuck"],
      correct: "fuck",
    },
  ];
  const app = $("#app");
  let currentIndex = 0;
  let score = 0;
  let time = 15;
  let id = "";

  $(document).on("click", "#start_btn", (e) => {
    $("#score").text(score);
    app.empty();
    loadQuiz();
    startTime();
  });

  $(document).on("click", "#user_select", function (e) {
    const userChoice = $(
      "input[type='radio'][class='user_selection']:checked"
    ).val();
    userChoice === quiz[currentIndex].correct
      ? ((score += Math.floor(time / 2)), (time = 15))
      : (time = 12);
    $("#score").text(score);
    currentIndex++;
        
    loadQuiz();
  });

  function startTime() {
    id = setInterval(() => {
      time--;
      $("#time").text(time);
      time === 0 ? clearInterval(id) : null;
    }, 1000);
  }

  function loadRules() {
    $("#time").text(time);
    app.append(`
        <div class="game_rules">
            <h2>Quiz Rules</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at voluptas soluta rerum et est unde voluptate quo, magni recusandae illo deserunt repudiandae adipisci in earum fugit accusamus iure excepturi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, vel. Neque impedit nobis dolore voluptas temporibus accusantium sit suscipit doloremque error, minima unde sint reiciendis, placeat asperiores, quis est odio.</p>
            <button id="start_btn">START QUIZ</button>
        </div>
    `);
  }

  function loadQuiz() {
    const currentQ = quiz[currentIndex];
    app.empty();
    app.append(
      `
      <div class="quiz">
        <p>${currentQ.question}</p>
        <div>` +
        currentQ.answers
          .map((x) => {
            return `
                <label>${x}</label>
                <input type="radio" name="question_${currentIndex}" value="${x}" class="user_selection"/>
            `;
          })
          .join("") +
        `</div>
        <button id="user_select">Select</button>
      </div>
    `
    );
  }

  loadRules();
});
