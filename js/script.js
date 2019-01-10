/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1result = $("#question1").val();
        var q2result = $("#question2").val();
        var q3result = $("#question3").val();
        var q4result = $("#question4").val();
        var totalScore = 0;
        
    function placement1 (totalScore){
        if (q1result === "Yes"){
            totalScore = totalScore + 0;
        }
        else if (q1result === "No"){
            totalScore === totalScore + 25;
        }
        return totalScore;
        }
        
    function placement2 (totalScore){
        if (q2result === "Slower"){
            totalScore === 9;
        }
        else if (q2result === "Faster"){
            totalScore === 14;
        }
        return totalScore;
        }
        
    function placement3 (totalScore){
        if (q3result === "Yes"){
            totalScore === 14;
        }
        else if (q2result === "Mo"){
            totalScore === 9;
        }
        return totalScore;
        }
        
    function placement4 (totalScore){
        if (q2result === "I like Melee"){
            totalScore === 9;
        }
        else if (q2result === "No"){
            totalScore === 14;
        }
        return totalScore;
        }
        
    function option(totalScore){
        if (totalScore <= 4){
            alert("You should play Smash 64!");
    }
        else if (totalScore > 4 && totalScore <= 9){
            alert("You should play Melee!");
    }
        else if (totalScore > 9 && totalScore <= 14){
            alert("You should play Brawl!");
    }
        else if (totalScore > 14 && totalScore <= 19){
            alert("You should play Smash 4!");
    }
        else if (totalScore > 19 && totalScore <= 24){
            alert("You should play Ultimate!");
    }
    }
    placement4(placement3(placement2(placement1(totalScore))));
    option(totalScore);
    });
});

