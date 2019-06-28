$(document).ready(function () {
    $('.game-state').hide();

    var gemValue = [];
    var win = 0;
    var losses = 0;
    var startingNumber;
    var startingScore = 0;
    var activeGem = ['#ruby', '#sapphire', '#emerald', '#diamond'];
    var gemID;
    var totalScore;

    gameReset();
    //define a function to describe the game's resting state//
    function gameReset() {
        startingNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        //fill gemValue array with 4 random values in sequence//
        for (let i = 0; i < 4; i++) {
            gemID = activeGem[i];
            var randomNumber = Math.floor(Math.random() * 13 + 1);

            //check to see if each array position is empty, if not, push randomNumber//
            var gemPosition = gemValue.length;
            if (gemPosition >= 0 && gemPosition <= 4) {
                gemValue.push(randomNumber);
            };
                $(gemID).attr('data-value', gemValue[i]);
                console.log(gemValue[i]);
        };
        //assign each value in the gemValue array to an image//
        //fill #display div with a random starting number//
        $('#display').text(startingNumber);
        //update wins div with stored win number//
        $('#wins').text(win);
        //update losses div with stored losses number//
        $('#losses').text(losses);
        //append a score div to the $total-score div//
        $('#total-score').text(startingScore);
    }

    function gameCheck () {
        totalScore = parseInt($('#total-score').text());

        if (totalScore === startingNumber) {
            win ++;
            $('.game-state').addClass('bg-success text-white');
            $('.game-state').show();
            $('#game-state').text('Congratulations! You Win!');
            gameReset();
        } else if (totalScore > startingNumber) {
            losses ++;
            $('.game-state').addClass('bg-danger text-white');
            $('.game-state').show();
            $('#game-state').text('Too bad! Better luck next time!');
            gameReset();
            }
        };

    //define a function for when each image is clicked, the game updates and the totalScore is updated//
    $('.card-img').on('click', function gameUpdate() {
        $('.game-state').hide();
        $('.game-state').removeClass('bg-danger bg-success text-white');
        $('#game-state').text('');
        var currentScore = parseInt($('#total-score').text());
        var currentValue = parseInt($(this).attr('data-value'));
        totalScore = currentValue + currentScore;
        $('#total-score').text(totalScore);
        gameCheck();
    });

});
