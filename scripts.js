// Image Credits
// Pre Story: https://www.deviantart.com/captainsquirel/art/Goblet-of-Fire-585652043
// Q1: https://pm1.narvii.com/6767/60e5364d4b547e15af12d8d63e51bd08edf2d468v2_hq.jpg
// Q2:
// Q3:
// Q4:
// Q5:
// Ending:

const potterApp = {};
potterApp.name = {
    firstName: "",
    lastName: ""
}

potterApp.declareScenario = (firstName, lastName) => {
    potterApp.scenarios = [
        {
            title: "<h2>Finding Dragons</h2>",
            question: `<blockquote>"Got summat ter show yeh, meet me tonight at midnight at the back of me cabin."</blockquote>
            <p>Professor Hagrid's words echoed in the back of your head, as you struggle to make sense of what you just saw.
            Dragons. Three fully grown, enormous, vicious-looking dragons locked inside an enclosure fenced with thick planks of wood. 
            You overheard the following conversation between Professor Hagrid and one of the dragon keepers:</p>
            <blockquote>"Three... So it's one fer each o' the champions, is it? What've they gotta do - fight em?"</blockquote>
            <blockquote>"Just get past them and grab the golden egg. We'll be on hand if it gets nasty, extinguishing spells at the ready."</blockquote>
            <p>Retreating to your dormitory bed, you wonder how you're meant to get past a dragon armed only with a wand. 
            The next day, you decide to ask around for help. Perhaps one of the other professors will lend a helping hand?</p>`,
            answer: "Alastor Moody",
            type: "name",
            array: potterApp.q1Array,
            prompt: `I'm sorry ${lastName}, but I'm not supposed to tell you about how to go about completing the first task! Perhaps some library time would help?`,
            ending: `<blockquote>"${lastName}, I'm just going to give you some good, general advice. The first bit is - play to your strengths. The second piece is to use a nice, simple spell that will enable you to get what you need."</blockquote>
            <p>You ponder Professor Moody's advice. For as long as you could remember, your greatest strength was your skill with a broomstick. To get past the dragon and retrieve the golden egg, your best bet would be in the air. To do this, you would need a broomstick. What spell could you use to ensure that this happens?</p>`,
            image: "url(./assets/fourDragons.jpg)",
        },
        {
            title: "<h2>The First Task</h2>",
            question: `<p>It's the day of the first task, and you're as ready as you will ever be. Waiting in the tent, listening to the crowd's screams and the roars of the dragon, horrible pictures start forming in your mind. You shake your head in frustration and attempt to focus on the one spell that you practiced since you received Professor Moody's advice.</p>
            <blockquote>"Annnnnd give it up for the Hogwarts Champion: ${firstName} ${lastName}!"</blockquote>
            <p>In no time at all, your name is called. You slowly make your way to the stadium, where hundreds of students are cheering and jeering your name.
            At this point, you don't even care. Directly within your field of vision was the Hungarian Horntail. Over fifty feet long, covered in black scales, and with a tail covered in lethal spikes, you instead notice the gleaming golden egg nested within the dragon egg pile.</p>
            <blockquote>"3....2....1....Begin!"</blockquote>
            <p>The whistle is blown. With every fiber of being, you raise your wand and bellow the following incantation:</p>`,
            answer: "Accio",
            type: "spell",
            array: potterApp.q2Array,
            prompt: `<p>The spell you cast is ineffective against the Horntail, which draws ever closer. Try something else!</p>`,
            ending: `<blockquote>"Accio!"</blockquote>
            <p>You cast the summoning charm, and wait, praying that your only hope for survival would come.
            There it was. Hurtling towards you from the castle, was your Firebolt: the top-of-the-line racing broom gifted to you upon achieving 12 Outstanding O.W.L.s. Stopping dead in mid-air beside you, you mount the broom.
            Within 5 minutes, and to tumultuous applause, you seize the golden egg.</p>
            <blockquote>"Congratulations to ${firstName} ${lastName}, the quickest champion to get their egg!"</blockquote>
            <blockquote>"A quick few words to the three of you. The golden eggs you're all holding, you will see that they open. You will need to solve the clue inside the egg - because it will tell you what the second task is, and enable you to prepare for it! All clear? Sure? Well off you go then!"</blockquote>
            <p>With these parting words, you leave for the castle and collapse in your bed, thankful to have kept all of your limbs.</p>`,
            image: "url(./assets/fourDragons.png)",
        },
        {
            title: "<h2>The Clue in the Egg</h2>",
            question: `<p>You ask Moaning Myrtle, who tells you to open the egg in the water.
            You hear the song, and you realize that your best friend has been taken.
            The task is tomorrow, and you have no idea how to breathe underwater. Who do you talk to?</p>`,
            answer: "Dobby",
            type: "name",
            array: potterApp.q3Array,
            prompt: `<p>I'm sorry ${lastName}, but I'm not supposed to tell you anything pertaining to the upcoming task!</p>`,
            ending: `<p>You go to the kitchens, where you look for Dobby, who might have some ideas. He claims to have overheard Professor Moody talking in the staff room about gillyweed. He promises to bring it to you, and tells you not to worry. You try to take his advice, but you can't sleep all night.</p>`,
            image: "url(./assets/fourDragons.png)",
        },
        {
            title: "<h2>The Second Task</h2>",
            question: `With Gillyweed from dobby, you enter the lake
            Describe the transformation process.
            Run into Grindylows, they start crowding you..What do you do?`,
            answer: "Relashio",
            type: "spell",
            array: potterApp.q4Array,
            prompt: `<p>Grindlylows shrugs off your feeble spell. Try something else!</p>`,
            ending: `<p>You repel the grindylows, approaching mermaid village, you see your best friend tied to the rock. You take a jagged rock and free them. Using your strength, feeling yourself transforming back, make it back up above the surface.</p>
            <blockquote>"Congratulations to ${firstName} ${lastName} for being the first one back!  The Hogwarts champion has placed first twice now, and will hold the greatest advantage when it comes to the third task!"</blockquote>`,
            image: "url(./assets/fourDragons.png)",
        },
        {
            title: "<h2>The Third Task</h2>",
            question: `<p>It's the day of the third task.
            From a prior meeting, you met and was told it was a maze.
            You practiced a lot of spells, and because you placed first in both events, you get a head start in the maze.
            Moving through the maze, you repel various dark creatures, until you run into a dementor. What spell do you use?</p>`,
            answer: "Expecto Patronum",
            type: "spell",
            array: potterApp.q5Array,
            prompt: `<p>Your spell is ineffective against the Dementor, which draws ever closer. Try something else!</p>`,
            ending: `<p>You repel the dementor. Slowly but surely, you make your way to the center of the maze, and see the gleaming trophy perched on a stand. Upon placing your hands on the trophy, you are teleported back to the entrance of the maze, where you are greeted by thunderous applause.</p>
            <blockquote>"Congratulations to the winner, our Hogwarts Champion: ${firstName} ${lastName}!!!!"</blockquote>
            <p>You are lifted up by the crowd, chanting your name.
            As they carry you back to the castle, you think to yourself, from the memories of tonight, you'd probably produce the world's greatest patronus.</p>`,
            image: "url(./assets/fourDragons.png)",
        },
    ]
}

// potterApp.command = "";
potterApp.key = "$2a$10$giwowS/BIXhApClXp86ptu2X/k4gC80zFZM8sxnDRlUSReHJnH1JO";
potterApp.url = "https://www.potterapi.com/v1/";
potterApp.fourOptions = [];

potterApp.generateAnswers = function(array, point) {
    potterApp.fourOptions.splice(0,potterApp.fourOptions.length)
    while (potterApp.fourOptions.length < 4)
    {
        potterApp.populateArray(potterApp.fourOptions, array, point);
    }
}

potterApp.populateArray = function(targetArray, fromArray, point) {
    const number = Math.floor(Math.random() * fromArray.length);
    if (targetArray.includes(fromArray[number][point]) == false)
    {
        targetArray.push(fromArray[number][point]);
    }
}

potterApp.getCharacters = $.ajax({
    url: `${potterApp.url}characters`,
    method: "GET",
    dataType: "json",
    data: {
        key: potterApp.key,
    }
});

potterApp.getSpells = $.ajax({
    url: `${potterApp.url}spells`,
    method: "GET",
    dataType: "json",
    data: {
        key: potterApp.key,
    }
});

potterApp.sortHat = $.ajax({
    url: `${potterApp.url}sortingHat`,
    method: "GET",
    dataType: "json",
});

potterApp.preLoad = () => {
    potterApp.getCharacters.then((res) => {
        potterApp.q1Array = res.filter(char => char.role != undefined && char.role.toLowerCase().includes("professor") && (char.deathEater != true || char.orderOfThePhoenix == true));
        potterApp.q3Array = res.filter(char => (char.species.toLowerCase().includes("human") || char.species.toLowerCase().includes("elf")) && char.deathEater != true);
    });
    potterApp.getSpells.then((res) => {
        potterApp.q2Array = res.filter(spell => spell.type.toLowerCase() == "charm");
        potterApp.q4Array = res.filter(spell => spell.type.toLowerCase() == "spell" || spell.type.toLowerCase() == "hex");
        potterApp.q5Array = res.filter(spell => spell.type.toLowerCase() == "spell" || spell.type.toLowerCase() == "charm");
    });
}

potterApp.getSorted = () => {
    $( "#sort" ).submit(function(event) {
        event.preventDefault(event);
        if ($("#firstName").val() == "" || $("#lastName").val() == "" ) {
            alert("Please fill in your full name!");
        } else {
            potterApp.sortHat.then((res) => {
                $(`.${res.toLowerCase()}`).css("display", "flex");
                $(".startAdventure").css("display", "block");
                $(".studentHouse").text(res);
            })
            // used to disable resubmitting form, lock input text
            $("#sort input[type='submit'], #sort input[type='name']").attr("disabled", true);
            potterApp.name.firstName = $("#firstName").val();
            potterApp.name.lastName = $("#lastName").val();
            potterApp.declareScenario(potterApp.name.firstName, potterApp.name.lastName);
        }
    });
}

potterApp.startAdventure = () => {
    $(".startAdventure button").click((event) => {
        event.preventDefault(event);
        $("body").css("background-image", "url(./assets/gobletOfFire.png)");
        $(".preStoryPage, .beginScenario").css("display", "block");
        $(".housePage, .introPage, header p").css("display", "none");
    })
}

potterApp.begin = () => {
    $(".beginScenario button").click((event) => {
        event.preventDefault(event);
        $(".preStoryPage, .beginScenario").css("display", "none");
        potterApp.scenarioGenerate();
    })
}

potterApp.count = 0;
potterApp.scenarioGenerate = () => {
    if (potterApp.count < potterApp.scenarios.length) {
        $("body").css("background-image", potterApp.scenarios[potterApp.count].image);
        $(".answerOptions").css("display", "flex");
        potterApp.generateAnswers(potterApp.scenarios[potterApp.count].array, potterApp.scenarios[potterApp.count].type);
        $(".sceneText").html("");
        $("#sceneNext").css("display", "none");
        potterApp.rightAnswer(potterApp.count);
        $(".sceneText").html(potterApp.scenarios[potterApp.count].title)
        $(".sceneText").append(potterApp.scenarios[potterApp.count].question)
            for (let a = 0; a < potterApp.fourOptions.length; a++) {
                $(".option" + a).text(potterApp.fourOptions[a])
            }
            $(".scenarioPage").css("display", "block");
            potterApp.checkAnswer();
    } else if (potterApp.count >= potterApp.scenarios.length) {
        $(".scenarioPage").css("display", "none");
        $(".endingPage").css("display", "block");
    }
}

potterApp.rightAnswer = (scenarioIndex) => {
    const answer = potterApp.scenarios[scenarioIndex].answer;
    const number = Math.floor(Math.random() * 4);
    if (potterApp.fourOptions.indexOf(answer) == -1) {
        potterApp.fourOptions[number] = answer;
    }
}

potterApp.checkAnswer = () => {
    $(".options li").on("click", function(e) {
        e.preventDefault();
        const answer = $(this).text();
        if (answer === potterApp.scenarios[potterApp.count].answer) {
            $(".answerOptions").css("display", "none");
            const ending = potterApp.scenarios[potterApp.count].ending;
            $(".wrongAnswerPrompt").html("");
            $(".sceneText").html(ending);
            $(".continueButton").html(`<button class="continue${potterApp.count}" id="sceneNext">Continue</button>`);
            potterApp.nextScene();
        } else if (answer != potterApp.scenarios[potterApp.count].answer) {
            $(".wrongAnswerPrompt").html(potterApp.scenarios[potterApp.count].prompt);
        }
    })
}

potterApp.nextScene = () => {
    $(".continue" + potterApp.count).on("click", function() {
        potterApp.count++;
        potterApp.scenarioGenerate();
    })
}

potterApp.init = function() {
    potterApp.preLoad();
    potterApp.getSorted();
    potterApp.startAdventure();
    potterApp.begin();
}

$(document).ready(function(){
    potterApp.init();
});

// potterApp.getHouses = function () {
//     $.ajax({
//         url: `${potterApp.url}houses`,
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             key: potterApp.key,
//             format: 'json',
//         }
//     }).then((res) => {
//         res.forEach(element => potterApp.houses.push(element)
//         )
//     })
// }