// Variables

var startButton = document.getElementById("start");
var startBox1 = document.getElementById("title");
var backgroundStart = document.getElementById("back");

// Dialog Variables

var diag1 = document.getElementById("dialog-1");
var diag2 = document.getElementById("dialog-2");
var diag3 = document.getElementById("dialog-3");
var diag4 = document.getElementById("dialog-4");
var diag5 = document.getElementById("dialog-5");
var diag6 = document.getElementById("dialog-6");
var diag7 = document.getElementById("dialog-7");
var ques1 = document.getElementById("question-1");
var yes1 = document.getElementById("yes-1");
var no1 = document.getElementById("no-1");
var diagYes1 = document.getElementById("yes-diag-1");
var diagYes2 = document.getElementById("yes-diag-2");
var diagNo1 = document.getElementById("no-diag-1");
var gameOver1 = document.getElementById("game-over-1");

// Dialog Variables - Adventure Starts

var adventureStartsDiag1 = document.getElementById("adventure-diag-1");
var adventureStartsDiag2 = document.getElementById("adventure-diag-2");
var adventureStartsDiag3 = document.getElementById("adventure-diag-3");
var adventureStartsDiag4 = document.getElementById("adventure-diag-4");
var adventureStartsDiag5 = document.getElementById("adventure-diag-5");
var adventureStartsDiag6 = document.getElementById("adventure-diag-6");
var tutorial1 = document.getElementById("instruction-1");
var tutorial2 = document.getElementById("instruction-2");
var tutorialBoxHover = document.getElementById("box-test");
var tutorial3 = document.getElementById("instruction-3");
var tutorial4 = document.getElementById("instruction-4");
var tutorial5 = document.getElementById("instruction-5");
var tutorialRep = document.getElementById("instruction-rep");
var readyBox = document.getElementById("ready-box");
var readyButton = document.getElementById("ready-button");
var ques2 = document.getElementById("question-2");
var yes2 = document.getElementById("yes-2");
var no2 = document.getElementById("no-2");

// First Minigame

var startCount1 = document.getElementById("start-count-1");
var startCount2 = document.getElementById("start-count-2");
var startCount3 = document.getElementById("start-count-3");
var startCount4 = document.getElementById("start-count-4");

// GameOver

var gameOver2 = document.getElementById("gameover-2");

// Words and Spaces

var firstBox = document.getElementById("hidden-w-1");
var secondBox = document.getElementById("hidden-w-2");
var thirdBox = document.getElementById("hidden-w-3");
var fourthBox = document.getElementById("hidden-w-4");
var fifthBox = document.getElementById("hidden-w-5");
var sixthBox = document.getElementById("hidden-w-6");
var seventhBox = document.getElementById("hidden-w-7");
var eighthBox = document.getElementById("hidden-w-8");
var ninthBox = document.getElementById("hidden-w-9");
var tenthBox = document.getElementById("hidden-w-10");
var eleventhBox = document.getElementById("hidden-w-11");
var twelfthBox = document.getElementById("hidden-w-12");

var word1 = 'alemania';
var word2 = 'dinosaurio';
var word3 = 'paralelo';
var word4 = 'universidad';
var word5 = 'emprendimiento';
var word6 = 'dificultad';
var word7 = 'exhausto';
var word8 = 'imposible';
var word9 = 'centrifugar';
var word10 = 'purificar';
var word11= 'reloj';
var word12 = 'boletin';

// Main Word Boxes

var minigame1 = document.getElementById('hiddenwords');
var hBox1 = document.getElementById('hidden-word-1');
var try1 = document.getElementById('try-1');
var hBox2 = document.getElementById('hidden-word-2');
var try2 = document.getElementById('try-2');
var hBox3 = document.getElementById('hidden-word-3');
var try3 = document.getElementById('try-3');
var hBox4 = document.getElementById('hidden-word-4');
var try4 = document.getElementById('try-4');
var hBox5 = document.getElementById('hidden-word-5');
var try5 = document.getElementById('try-5');
var hBox6 = document.getElementById('hidden-word-6');
var try6 = document.getElementById('try-6');
var hBox7 = document.getElementById('hidden-word-7');
var try7 = document.getElementById('try-7');
var hBox8 = document.getElementById('hidden-word-8');
var try8 = document.getElementById('try-8');
var hBox9 = document.getElementById('hidden-word-9');
var try9 = document.getElementById('try-9');
var hBox10 = document.getElementById('hidden-word-10');
var try10 = document.getElementById('try-10');
var hBox11 = document.getElementById('hidden-word-11');
var try11 = document.getElementById('try-11');
var hBox12 = document.getElementById('hidden-word-12');
var try12 = document.getElementById('try-12');

// Scoring System

var energyBox = document.getElementById("energy-box");
var scoreBox = document.getElementById("score-box");
var energy = document.getElementById("energy");
var score = document.getElementById("score");
var scoreTable = document.getElementById("score-table");
var scoreGot = document.getElementById("score-got");
var energyGot = document.getElementById("energy-got");
var scoreGot1 = document.getElementById("score-got-1");
var energyGot1 = document.getElementById("energy-got-1");
var scoredPoints = 0;
var energyLevel = 2;

// Ending

var continueButton = document.getElementById("continue");
var endingDiag1 = document.getElementById("ending-1");
var endingDiag2 = document.getElementById("ending-2");
var endingDiag3 = document.getElementById("ending-3");
var endingDiag4 = document.getElementById("ending-4");
var endingDiag5 = document.getElementById("ending-diag-1");
var endingDiag6 = document.getElementById("ending-diag-2");
var endingDiag7 = document.getElementById("ending-diag-3");
var uName = document.getElementById("u-name");
var usName = document.getElementById("us-name");
var finalBox = document.getElementById("final-box");
var nameBox = document.getElementById("namebox");
var nameInput = document.getElementById("player-name-box");
var soul = document.getElementById("soul");
var soulGrown = document.getElementById("soul-after");

// Game Over

var noMoreEnergy = document.getElementById("gameover-1");

// Sounds

var powerTran = document.getElementById("power-tran");
var soundtrack1 = document.getElementById("soundtrack-1");
var soundtrack2 = document.getElementById("soundtrack-2");
var soulGrowing = document.getElementById("soul-grow");
var winnerSound = document.getElementById("game-completed-win");
var loserSound = document.getElementById("game-completed-lose");

// Energy

var energyLevel = 0;
var energyPointer = document.getElementById("energy-pointer");

// Main Screen
    
startButton.addEventListener('click', () => {
    startBox1.classList.toggle("on");
    startButton.classList.toggle("on");
    backgroundStart.style.background = "#000000";

    setTimeout(() => {
        diag1.classList.toggle("on-dialog");
    }, 1000);

    setTimeout(() => {
        diag1.classList.toggle("on-dialog");
    }, 8000);

    setTimeout(() => {
        diag2.classList.toggle("on-dialog");
    }, 9000);

    setTimeout(() => {
        diag2.classList.toggle("on-dialog");
    }, 15000);

    setTimeout(() => {
        diag3.classList.toggle("on-dialog");
    }, 16000);

    setTimeout(() => {
        diag3.classList.toggle("on-dialog");
    }, 22000);

    setTimeout(() => {
        diag4.classList.toggle("on-dialog");
    }, 23000);

    setTimeout(() => {
        diag4.classList.toggle("on-dialog");
    }, 28000);

    setTimeout(() => {
        diag5.classList.toggle("on-dialog");
    }, 29000);

    setTimeout(() => {
        diag5.classList.toggle("on-dialog");
    }, 37000);

    setTimeout(() => {
        diag6.classList.toggle("on-dialog");
    }, 38000);

    setTimeout(() => {
        diag6.classList.toggle("on-dialog");
    }, 46000);

        setTimeout(() => {
        diag7.classList.toggle("on-dialog");
    }, 48000);

    setTimeout(() => {
        ques1.classList.toggle("on-dialog");
    }, 50000);

    yes1.addEventListener('click', () => {
        ques1.classList.toggle("on-dialog");
        diag7.classList.toggle("on-dialog");

        setTimeout(() => {
            diagYes1.classList.toggle("on-dialog");
        }, 1000);

        setTimeout(() => {
            diagYes1.classList.toggle("on-dialog");
        }, 5000);

        setTimeout(() => {
            diagYes2.classList.toggle("on-dialog");
        }, 7000);

        setTimeout(() => {
            diagYes2.classList.toggle("on-dialog");
        }, 8500);

        setTimeout(() => {
            powerTran.play();
            backgroundStart.classList.toggle("animation-tran");
        }, 9000);

        setTimeout(() => {
            window.addEventListener('mousemove', () => {
                document.body.style.cursor = "none";
                energyPointer.classList.toggle("active");
                energyPointer.style.top = event.clientY + "px";
                energyPointer.style.left = event.clientX + "px";
            });
        }, 15000);

        setTimeout(() => {
            backgroundStart.classList.toggle("animation-tran");
            window.addEventListener('mousemove', () => {
                document.body.style.cursor = "none";
                energyPointer.classList.toggle("active");
                energyPointer.style.top = event.clientY + "px";
                energyPointer.style.left = event.clientX + "px";
            });
        }, 16000);

        setTimeout(() => {
            tutorial1.classList.toggle("on-dialog");
        }, 17000);

        setTimeout(() => {
            tutorial2.classList.toggle("on-dialog");
            tutorialBoxHover.classList.toggle("on-box");
            tutorialBoxHover.addEventListener('click', () => {
                tutorial1.classList.toggle("on-dialog");
                tutorial2.classList.toggle("on-dialog");

                setTimeout(() => {
                    tutorialBoxHover.classList.toggle("on-box");

                    adventureStartsDiag1.classList.toggle("on-dialog");
                }, 500);

                setTimeout(() => {
                    adventureStartsDiag1.classList.toggle("on-dialog");
                }, 5000);

                setTimeout(() => {
                    adventureStartsDiag2.classList.toggle("on-dialog");
                }, 6000);

                setTimeout(() => {
                    adventureStartsDiag2.classList.toggle("on-dialog");
                }, 11000);

                setTimeout(() => {
                    adventureStartsDiag3.classList.toggle("on-dialog");
                }, 12000);

                setTimeout(() => {
                    adventureStartsDiag3.classList.toggle("on-dialog");
                }, 17000);

                setTimeout(() => {
                    adventureStartsDiag4.classList.toggle("on-dialog");
                }, 18000);

                setTimeout(() => {
                    adventureStartsDiag4.classList.toggle("on-dialog");
                }, 23000);

                setTimeout(() => {
                    adventureStartsDiag5.classList.toggle("on-dialog");
                }, 24000);

                setTimeout(() => {
                    adventureStartsDiag5.classList.toggle("on-dialog");
                }, 30000);

                setTimeout(() => {
                    adventureStartsDiag6.classList.toggle("on-dialog");
                }, 31000);

                setTimeout(() => {
                    adventureStartsDiag6.classList.toggle("on-dialog");
                }, 34000);

                setTimeout(() => {
                    energyBox.classList.toggle("on-dialog");
                    scoreBox.classList.toggle("on-dialog");
                }, 36000);

                setTimeout(() => {
                    tutorial3.classList.toggle("on-dialog");
                }, 38000);

                setTimeout(() => {
                    tutorial4.classList.toggle("on-dialog");
                }, 39000);

                setTimeout(() => {
                    tutorial5.classList.toggle("on-dialog");
                }, 40000);

                setTimeout(() => {
                    ques2.classList.toggle("on-dialog");
                }, 41500);

                yes2.addEventListener('click', () => {
                    tutorial3.classList.toggle("on-dialog");
                    tutorial4.classList.toggle("on-dialog");
                    tutorial5.classList.toggle("on-dialog");
                    ques2.classList.toggle("on-dialog");

                    setTimeout(() => {
                        tutorialRep.classList.toggle("on-dialog");
                    }, 1000);

                    setTimeout(() => {
                        readyBox.classList.toggle("on-dialog");
                    }, 2500);

                    readyButton.addEventListener('click', () => {
                        tutorialRep.classList.toggle("on-dialog");
                        readyBox.classList.toggle("on-dialog");

                        setTimeout(() => {
                            startCount1.classList.toggle("on-dialog");
                        }, 2000);

                        setTimeout(() => {
                            startCount1.classList.toggle("on-dialog");
                        }, 4000);

                        setTimeout(() => {
                            startCount2.classList.toggle("on-dialog");
                        }, 6000);

                        setTimeout(() => {
                            startCount2.classList.toggle("on-dialog");
                        }, 6500);

                        setTimeout(() => {
                            startCount3.classList.toggle("on-dialog");
                        }, 7000);

                        setTimeout(() => {
                            startCount3.classList.toggle("on-dialog");
                        }, 7500);

                        setTimeout(() => {
                            startCount4.classList.toggle("on-dialog");
                        }, 8000);

                        setTimeout(() => {
                            startCount4.classList.toggle("on-dialog");
                            minigame1.classList.add('on-dialog');
                            soundtrack1.play();
                        }, 8500);

                        setTimeout(() => {
                            gameCompleted();
                        }, 118500);
                    })
                });

                no2.addEventListener('click', () => {
                    tutorial3.classList.toggle("on-dialog");
                    tutorial4.classList.toggle("on-dialog");
                    tutorial5.classList.toggle("on-dialog");
                    ques2.classList.toggle("on-dialog");

                    setTimeout(() => {
                        startCount1.classList.toggle("on-dialog");
                    }, 2000);

                    setTimeout(() => {
                        startCount1.classList.toggle("on-dialog");
                    }, 4000);

                    setTimeout(() => {
                        startCount2.classList.toggle("on-dialog");
                    }, 6000);

                    setTimeout(() => {
                        startCount2.classList.toggle("on-dialog");
                    }, 6500);

                    setTimeout(() => {
                        startCount3.classList.toggle("on-dialog");
                    }, 7000);

                    setTimeout(() => {
                        startCount3.classList.toggle("on-dialog");
                    }, 7500);

                    setTimeout(() => {
                        startCount4.classList.toggle("on-dialog");
                    }, 8000);

                    setTimeout(() => {
                        startCount4.classList.toggle("on-dialog");
                        minigame1.classList.add('on-dialog');
                        soundtrack1.play();
                    }, 8500);
                    
                    setTimeout(() => {
                        gameCompleted();
                    }, 118500);
                });

            })
        }, 18500);
    });

    no1.addEventListener('click', () => {
        ques1.classList.toggle("on-dialog");
        diag7.classList.toggle("on-dialog");

        setTimeout(() => {
            diagNo1.classList.toggle("on-dialog");
        }, 1000);

        setTimeout(() => {
            diagNo1.classList.toggle("on-dialog");
        }, 6000);

        setTimeout(() => {
            gameOver1.classList.toggle("on-dialog");
        }, 8000);
    });
});

// First Minigame - Functions

var firstBoxClicked = () => {
    var onBox = firstBox.value;

    try1.classList.add('blocked-button');

    if (onBox == word1) {
        firstBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 100;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        firstBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox1.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
    
    setTimeout(() => {
        hBox1.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        hBox8.style.display = 'inline';
    }, 3000);
};

var secondBoxClicked = () => {
    var onBox = secondBox.value;

    try2.classList.add('blocked-button');

    if (onBox == word2) {
        secondBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 200;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        secondBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox1.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }

    setTimeout(() => {
        hBox2.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        hBox9.style.display = 'inline';
    }, 3000);
};

var thirdBoxClicked = () => {
    var onBox = thirdBox.value;

    try3.classList.add('blocked-button');

    if (onBox == word3) {
        thirdBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 300;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        thirdBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox3.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }

    setTimeout(() => {
        hBox3.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        hBox10.style.display = 'inline';
    }, 3000);
};

var fourthBoxClicked = () => {
    var onBox = fourthBox.value;

    try4.classList.add('blocked-button');

    if (onBox == word4) {
        fourthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 300;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        fourthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox4.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }

    setTimeout(() => {
        hBox4.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        hBox11.style.display = 'inline';
    }, 3000);
};

var fifthBoxClicked = () => {
    var onBox = fifthBox.value;

    try5.classList.add('blocked-button');

    if (onBox == word5) {
        fifthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 200;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        fifthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox5.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }

    setTimeout(() => {
        hBox5.style.display = 'none';
    }, 2000);

    setTimeout(() => {
        hBox12.style.display = 'inline';
    }, 3000);
};

var sixthBoxClicked = () => {
    var onBox = sixthBox.value;

    try6.classList.add('blocked-button');

    if (onBox == word6) {
        sixthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 100;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        sixthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox6.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var seventhBoxClicked = () => {
    var onBox = seventhBox.value;

    try7.classList.add('blocked-button');

    if (onBox == word7) {
        seventhBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 300;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        seventhBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox7.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var eighthBoxClicked = () => {
    var onBox = eighthBox.value;

    try8.classList.add('blocked-button');

    if (onBox == word8) {
        eighthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 300;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        eighthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox8.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var ninthBoxClicked = () => {
    var onBox = ninthBox.value;

    try9.classList.add('blocked-button');

    if (onBox == word9) {
        ninthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 400;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        ninthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox9.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var tenthBoxClicked = () => {
    var onBox = tenthBox.value;

    try10.classList.add('blocked-button');

    if (onBox == word10) {
        seventhBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 500;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        tenthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox10.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var eleventhBoxClicked = () => {
    var onBox = eleventhBox.value;

    try11.classList.add('blocked-button');

    if (onBox == word11) {
        eleventhBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 500;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        eleventhBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox11.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var twelfthBoxClicked = () => {
    var onBox = twelfthBox.value;

    try12.classList.add('blocked-button');

    if (onBox == word12) {
        twelfthBox.classList.add("clicked-correct");
        scoredPoints = scoredPoints + 600;
        energyLevel = energyLevel + 1;
        score.innerHTML = scoredPoints;
        energy.innerHTML = energyLevel;
    } else {
        twelfthBox.classList.add("clicked-incorrect");
        energyLevel = energyLevel - 1;
        updateCursor();
    }

    hBox12.classList.add('finished');
    energy.innerHTML = energyLevel;
    updateCursor();

    if (energyLevel == 0) {
        noMoreEnergy.classList.add('on-end');
    }
};

var updateCursor = () => {
    if (energyLevel === 0) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.toggle('energy0');
    };

    if (energyLevel === 1) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.toggle('energy1');
    };

    if (energyLevel === 2) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.add('energy2');
    };

    if (energyLevel === 3) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.toggle('energy3');
    }

    if (energyLevel === 4) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.toggle('energy4');
    };

    if (energyLevel === 5) {
        energyPointer.style.cursor = 'default';
        energyPointer.classList.toggle('energy5');
    };
};

var gameCompleted = () => {
    if (energyLevel >= 5 && scoredPoints >= 1500) {
        minigame1.classList.remove('on-dialog');
        energyBox.classList.toggle("on-dialog");
        scoreBox.classList.toggle("on-dialog");
        winnerSound.play();
        scoreGot1.innerHTML = scoredPoints;
        energyGot1.innerHTML = energyLevel;

        scoreTable.classList.toggle("on-dialog");
    } else {
        minigame1.classList.remove('on-dialog');
        energyBox.classList.toggle("on-dialog");
        scoreBox.classList.toggle("on-dialog");

        gameOver2.classList.add("on-end");
        loserSound.play();
    }
};

var goodBye = () => {
    var playername = nameInput.value;
    nameBox.classList.remove('on-dialog');

    setTimeout(() => {
        endingDiag6.classList.toggle("on-dialog");
    }, 1000);

    setTimeout(() => {

        uName.innerHTML = playername + '.';
        endingDiag7.classList.toggle("on-dialog");
    }, 2000);

    setTimeout(() => {
        endingDiag7.classList.toggle("on-dialog");
    }, 5000);

    setTimeout(() => {
        scoreGot.innerHTML = scoredPoints;
        energyGot.innerHTML = energyLevel;
        finalBox.classList.toggle("on-dialog");
        usName.innerHTML = playername;
    }, 6000);
};

// Ending Functions

continueButton.addEventListener('click', () => {
    scoreTable.classList.toggle("on-dialog");

    setTimeout(() => {
        endingDiag1.classList.toggle("on-dialog");
    }, 1000);

    setTimeout(() => {
        endingDiag1.classList.toggle("on-dialog");
    }, 5000);

    setTimeout(() => {
        soul.classList.toggle("on-dialog");
        soul.style.animationName = 'soul-charge';
        energyPointer.classList.toggle("active");
    }, 6000);

    setTimeout(() => {
        soulGrowing.play();
    }, 8000);

    setTimeout(() => {
        soundtrack2.play();
        soulGrown.classList.toggle("on-dialog");
        energyPointer.classList.remove('energy1');
        energyPointer.classList.remove('energy2');
        energyPointer.classList.remove('energy3');
        energyPointer.classList.remove('energy4');
        energyPointer.classList.remove('energy5');
        window.addEventListener('mousemove', () => {
            document.body.style.cursor = "default";
            energyPointer.classList.toggle("active");
        })
    }, 9000);

    setTimeout(() => {
        endingDiag2.classList.toggle("on-dialog");
    }, 10000);

    setTimeout(() => {
        endingDiag2.classList.toggle("on-dialog");
    }, 15000);

    setTimeout(() => {
        endingDiag3.classList.toggle("on-dialog");
    }, 16000);

    setTimeout(() => {
        endingDiag3.classList.toggle("on-dialog");
    }, 21000);

    setTimeout(() => {
        endingDiag4.classList.toggle("on-dialog");
    }, 22000);

    setTimeout(() => {
        endingDiag4.classList.toggle("on-dialog");
    }, 26000);

    setTimeout(() => {
        endingDiag5.classList.toggle("on-dialog");
    }, 27500);

    setTimeout(() => {
        endingDiag5.classList.toggle("on-dialog");
    }, 32500);

    setTimeout(() => {
        endingDiag6.classList.toggle("on-dialog");
    }, 33500);

    setTimeout(() => {
        nameBox.classList.toggle("on-dialog");
    }, 34500);
});