$(document).ready(function() {
  $(".form").submit(function(event) {

    var rogueHeroInput = $("input[name=rogueHero]:checked").val();
    // var smuggleFighterInput = $("input[name=smuggleFighter]:checked").val();

    var luke = 0;
    var han = 0;

    if (rogueHeroInput === "rogue") {
       han += 1;
    } else {
        luke += 1;
    }

    // if (smuggleFighter === "smuggler") {
    //    han += 1;
    // } else {
    //     luke += 1;
    // }

    console.log(han);
    console.log(luke);

    if (han > luke) {
      alert("your han!");
    } else {
      alert("your luke!");
    }


    event.preventDefault();
  });
});
