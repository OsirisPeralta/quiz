/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var game = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1result = $("#question1").val();
        var q2result = $("#question2").val();
        var q3result = $("#question3").val();
        var q4result = $("#question4").val();
        var totalScore;
        totalScore = placement1(q1result);
        totalScore = placement2(q2result);
        totalScore = placement3(q3result);
        totalScore = placement4(q4result);
        console.log(totalScore);
        final(totalScore);
    });
    
    function placement1(bias) {
        if (bias === "Yes") {
            return 0;
        }
        else if (bias === "No") {
            return 4;
        }
    }

    function placement2(speed) {
        if (speed === "Slower") {
            return 3;
        }
        else if (speed === "Faster") {
            return 2;
        }
    }

    function placement3(skill) {
        if (skill === "Yes") {
            return 2;
        }
        else if (skill === "No") {
            return 3;
        }
    }

    function placement4(taste) {
        if (taste === "I like Melee") {
            return 1;
        }
        else if (taste === "No") {
            return 2;
        }    
    }
    
    function final(totalScore) {
        var game;
        if (totalScore === 4) {
            game = "Ultimate";
            display(game);
        }
        else if (totalScore === 3) {
            game = "Smash 4";
            display(game);
        }
        else if (totalScore === 2) {
            game = "Brawl";
            display(game);
        }
        else if (totalScore === 1) {
            game = "Melee";
            display(game);
        }
        else if (totalScore === 0) {
            game = "Smash 64";
            display(game);
        }
    }
    
    function display(game){
        alert ("You got " + game);
    }
});