$(document).ready(() => {
  const crystal = $(".crystal");
  const displayScore = $("#display_score");
  const targetScoreDisplay = $("#target_score");
  let targetScore = 0;
  let accScore = 0;

  displayScore.text(accScore);

  getTargetScore = () => {
    targetScore = Math.floor(Math.random() * (75 - 35) + 35);
    targetScoreDisplay.text(targetScore);
  };

  const getCrystlalValue = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  const crystalSelectors = {
    one: getCrystlalValue(4, 16),
    two: getCrystlalValue(4, 16),
    three: getCrystlalValue(4, 16),
    four: getCrystlalValue(4, 16),
  };

  // * HANDLE CRYSTAL CLICK EVETNS * //
  crystal.each(function () {
    const target = $(this).attr("target");
    $(this).on("click", function (e) {
      e.preventDefault();
      accScore += crystalSelectors[target];
      displayScore.text(accScore);
      if (accScore > targetScore) {
        endRound("Lose");
      } else if (accScore === targetScore) {
        endRound("Win");
      }
    });
  });

  function 
  getTargetScore();
});
