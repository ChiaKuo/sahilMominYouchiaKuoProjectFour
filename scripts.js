// Image Credits
// Pre Story: https://www.deviantart.com/captainsquirel/art/Goblet-of-Fire-585652043
// Q1: https://pm1.narvii.com/6767/60e5364d4b547e15af12d8d63e51bd08edf2d468v2_hq.jpg
// Q2: https://www.wizardingworld.com/
// Q3: https://www.wizardingworld.com/
// Q4: https://www.wizardingworld.com/
// Q5: https://www.wizardingworld.com/
// Ending: https://www.wizardingworld.com/

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
            image: "url(./assets/firstTask.jpg)",
        },
        {
            title: "<h2>The Clue in the Egg</h2>",
            question: `<p>Having been made prefect in your fifth year, the beautiful, marbled, prefect bathroom quickly became your choice for a quiet place. Taking a bath in the pool-sized bathtub, you ponder the so-called "clue" in the egg, when a voice speaks out from the corner of your ear:</p>
            <blockquote>"I'd try putting it IN the water if I were you."</blockquote>
            <p>Spluttering, you see the ghost of Moaning Myrtle, the ghost of the second-floor girl's bathroom.</p>
            <blockquote>"When you open the egg, the merpeople song will play, but both you and the egg need to be underwater to hear it!"</blockquote>
            <p>Taking a deep breath, you slide under the surface, and upon opening the egg:</p>
            <blockquote>"Come seek us where our voices sound,
            We cannot sing above the ground,
            And while you're searching ponder this;
            We've taken what you'll sorely miss,
            An hour long you'll have to look,
            And to recover what we took,
            But past an hour, the prospect's black,
            Too late, it's gone, it won't come back."</blockquote>
            <p>Changing into your clothes, and making your way back to your dormitory, it dawned on you. For the second task, you had to enter the Hogwarts lake, find the merpeople town, and recover whatever they took. The problem: How are you supposed to breathe? The second task is looming, so you'd better ask someone soon!</p>`,
            answer: "Dobby",
            type: "name",
            array: potterApp.q3Array,
            prompt: `<p>I'm sorry ${lastName}, but I'm not supposed to tell you anything pertaining to the upcoming task!</p>`,
            ending: `<blockquote>"Dobby!"</blockquote>
            <p>There was a loud crack, and the house-elf Dobby appeared out of nowhere on your bedside table.</p>
            <blockquote>"${firstName}, I is hearing your problem! You has to eat this, right before you go into the lake - Gillyweed!"</blockquote>
            <p>Putting his hand in the pocket of his shorts, Dobby draws out a ball of what looked like slimy, greyish green rat tails.</p>
            <blockquote>"Eat this, and it will make you breathe underwater!"</blockquote>
            <p>Another loud crack, and Dobby once again vanished into thin air. Staring at the Gillyweed left on the table, you feel a little skeptical.
            As the second task is tomorrow, what other choice do you have?</p>`,
            image: "url(./assets/prefectBathroom.jpg)",
        },
        {
            title: "<h2>The Second Task</h2>",
            question: `<p>Before you know it, you are standing alongside the other two champions on a platform above the lake. Across from you, rising in stands packed with people to bursting point, the roars of the crowd echoed across the lake.</p>
            <blockquote>"Well, all our champions are ready for the second task, which will start on my whistle. They have precisely an hour to recover what has been taken from them. On the count of three, then. One ... two ... three!"</blockquote>
            <p>Pulling the handful of Gillyweed out of your pocket, and stuffing it into your mouth, you dive into the lake. The first gulp of icy lake water feels like the breath of life. You notice that gills have formed along your neck, and your hands and feet have become elongated and webbed. The water doesn't feel icy anymore, either ... on the contrary, you feel pleasantly cool, and very light.</p> 
            <p>You start swimming down to the bottom of the lake, where the merpeople must be. After a few minutes of paddling you pass through what looks like a meadow of overgrown grass. Before you can discern any shapes through the gloom, something grabs hold of your ankle.</p> 
            <p>Twisting your body around, you see a Grindylow, a small, horned water demon, poking out of the weed, its long fingers clutched tightly around your leg. You grasp your wand, point it at the Grindylows, and cast the following spell:</p>`,
            answer: "Relashio",
            type: "spell",
            array: potterApp.q4Array,
            prompt: `<p>Grindlylows shrugs off your feeble spell. Try something else!</p>`,
            ending: `<blockquote>"Relashio!"</blockquote>
            <p>Your wand emits what seems to be a jet of boiling water, where it strikes the Grindylow, angry red patches appearing on its green skin. You wrench your ankle out of the Grindylow's grip, and swim as fast as you can, occasionally sending more jets of hot water over your shoulder at random.
            Before you know it, you are out of the Grindylow weeds and deep into the merpeople town. On a giant merperson statue, you notice three silhouettes bound tightly to its tail.</p>
            <blockquote>"Marley!"</blockquote>
            <p>You recognize your best friend dog, floating lifelessly in the water. Your head surging with fury at the tournament organizers, you seize a jagged rock from the lake floor, cut Marley free from the rock, and with Marley in hand, you quickly swim back to the surface of the lake.</p>
            <blockquote>"Woof?"</blockquote>
            <p>Marley wakes up, and looks around in confusion. You then hear the thunderous roar of the crowd celebrating your return.</p>
            <blockquote>"Wonderful! The Hogwarts Champion has done it again! Give it up for ${firstName} ${lastName}!"
            You gather around the announcer with the other champions once they returned, and listen:</blockquote>
            <blockquote>"The third and final task will take place at dusk on the twenty-fourth of June. This task will be very straightforward. A maze will be created, and the Triwizard cup will be placed in the centre. The first champion to touch it will emerge as the winner of the tournament. Off you go!"</blockquote>
            <p>Relieved that the final task would involve a lot less guesswork, you return to the castle.</p>`,
            image: "url(./assets/secondTask.jpg)",
        },
        {
            title: "<h2>The Third Task</h2>",
            question: `<p>Walking to the Quidditch Pitch where the third task is being held, you notice that it is unrecognizable. A twenty-foot-high hedge ran all the way around the edge of it. There was a gap right in front of them; the entrance to the vast maze.</p> 
            <blockquote>"Ladies and gentlemen, the third and final task of the Triwizard Tournament is about to begin! Currently in first place, the Hogwarts champion: ${firstName} ${lastName}! Based on the results of the previous two tasks, ${firstName} ${lastName} will enter the maze first."</blockquote>
            <blockquote>"On my whistle ... Three - two - one -"</blockquote>
            <p>The announcer blows their whistle, and you dash into the maze. Despite the twist and turns, you make your way hurriedly through the maze. Cursing and stunning everything in your path, you turn a corner and see a Dementor gliding towards you. Twelve feet tall, its face hidden by its hood, you feel clammy coldness stealing over you... You need to act fast!</p>`,
            answer: "Expecto Patronum",
            type: "spell",
            array: potterApp.q5Array,
            prompt: `<p>Your spell is ineffective against the Dementor, which draws ever closer. Try something else!</p>`,
            ending: `<p>Summoning the happiest thought you could, of getting out of the maze and enjoying a warm bath, you bellow:</p>
            <blockquote>"Expecto Patronum!"</blockquote>
            <p>A silver stag erupts from the end of your wand and gallops towards the Dementor. It shivers, and then creeps out of sight. Breathing a sigh of relief, you slowly but surely make your way to the center of the maze.</p> 
            <p>You see the Triwizard Cup gleaming on a plinth a hundred yards away. You break into a run, and find yourself staring down the gleaming trophy. At last, you have accomplished the impossible, defeating all foes and overcoming all challenges in your path. You place your hands on the trophy, and before you know it, you teleport back to the entrance of the maze, where thunderous applause, dwarfing the previous in scale.</p>
            <blockquote>"Congratulations to the winner, our Hogwarts Champion: ${firstName} ${lastName}!"</blockquote>
            <p>You are mobbed by the cheering crowd of students. Lifting you up on their shoulders they chant:</p>
            <blockquote>"${firstName}! ${firstName}!"</blockquote>
            <p>As you are carried away by the crowd, memories of the school year flood into your head. Despite knowing that this is all over, deep inside you know it's just the beginning.</p>`,
            image: "url(./assets/lastTask.jpg)",
        },
    ]
}

// array to select house colors
potterApp.colors = [
    {house: "Gryffindor", color: "red"},
    {house: "Slytherin", color: "green"},
    {house: "Ravenclaw", color: "blue"},
    {house: "Hufflepuff", color: "yellow"}
]

potterApp.key = "$2a$10$giwowS/BIXhApClXp86ptu2X/k4gC80zFZM8sxnDRlUSReHJnH1JO";
potterApp.url = "https://www.potterapi.com/v1/";
potterApp.fourOptions = [];
potterApp.count = 0;

// ajax call to get characters
potterApp.getCharacters = $.ajax({
    url: `${potterApp.url}characters`,
    method: "GET",
    dataType: "json",
    data: {
        key: potterApp.key,
    }
});

// ajax call to get spells
potterApp.getSpells = $.ajax({
    url: `${potterApp.url}spells`,
    method: "GET",
    dataType: "json",
    data: {
        key: potterApp.key,
    }
});

// ajax call to sort houses
potterApp.sortHat = $.ajax({
    url: `${potterApp.url}sortingHat`,
    method: "GET",
    dataType: "json",
});

// loads question arrays
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

// finds the house for player and changes display accordingly
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
                const x = potterApp.colors.findIndex(item => item.house === res);
                $("button, .houseColor").css("border", "2px solid " + potterApp.colors[x].color);
                $("body").css("border", "5px solid " + potterApp.colors[x].color);
                $(".xxx").hover(function(){
                    $(this).css("background-color", potterApp.colors[x].color);
                    }, function(){
                    $(this).css("background-color", "rgba(0,0,0,0)");
                });
            })
            // used to disable resubmitting form, lock input text
            $("#sort input[type='submit'], #sort input[type='name']").attr("disabled", true);
            potterApp.name.firstName = $("#firstName").val();
            potterApp.name.lastName = $("#lastName").val();
            potterApp.declareScenario(potterApp.name.firstName, potterApp.name.lastName);
        }
    });
}

// loads the introPage and pre story page
potterApp.startAdventure = () => {
    $(".startAdventure button").click((event) => {
        event.preventDefault(event);
        $("body").css("background-image", "url(./assets/gobletOfFire.png)");
        $(".preStoryPage, .beginScenario").css("display", "block");
        $(".housePage, .introPage, header p").css("display", "none");
    })
}

// generate begining of the scenarios
potterApp.begin = () => {
    $(".beginScenario button").click((event) => {
        event.preventDefault(event);
        $(".preStoryPage, .beginScenario, footer").css("display", "none");
        potterApp.scenarioGenerate();
    })
}

// generates scenarios for each question
potterApp.scenarioGenerate = () => {
    if (potterApp.count < potterApp.scenarios.length) {
        $("body").css("background-image", potterApp.scenarios[potterApp.count].image);
        $(".answerOptions").css("display", "flex");
        potterApp.generateAnswers(potterApp.scenarios[potterApp.count].array, potterApp.scenarios[potterApp.count].type);
        $(".sceneText").html("");
        $("#sceneNext").css("display", "none");
        potterApp.rightAnswer(potterApp.count);
        $(".sceneText").html(potterApp.scenarios[potterApp.count].title);
        $(".sceneText").append(potterApp.scenarios[potterApp.count].question);
        for (let a = 0; a < potterApp.fourOptions.length; a++) {
            $(".option" + a).text(potterApp.fourOptions[a]);
        }
        $(".scenarioPage").css("display", "block");
        potterApp.checkAnswer();
    } else if (potterApp.count >= potterApp.scenarios.length) {
        $(".scenarioPage").css("display", "none");
        $(".endingPage, footer").css("display", "block");
        $("body").css("background-image", "url(./assets/ending.png)");
    }
}

// generates four answer option depending on type of question
potterApp.generateAnswers = function(array, point) {
    potterApp.fourOptions.splice(0,potterApp.fourOptions.length)
    while (potterApp.fourOptions.length < 4)
    {
        potterApp.populateArray(potterApp.fourOptions, array, point);
    }
}

// populates the array of answer option
potterApp.populateArray = function(targetArray, fromArray, point) {
    const number = Math.floor(Math.random() * fromArray.length);
    if (targetArray.includes(fromArray[number][point]) == false)
    {
        targetArray.push(fromArray[number][point]);
    }
}

// randomly replaces one of the four options with correct answer
potterApp.rightAnswer = (scenarioIndex) => {
    const answer = potterApp.scenarios[scenarioIndex].answer;
    const number = Math.floor(Math.random() * 4);
    if (potterApp.fourOptions.indexOf(answer) == -1) {
        potterApp.fourOptions[number] = answer;
    }
}

// checks if the answer selected is right
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

// switches to next scenario
potterApp.nextScene = () => {
    $(".continue" + potterApp.count).on("click", function() {
        potterApp.count++;
        potterApp.scenarioGenerate();
    })
}

// init function
potterApp.init = function() {
    potterApp.preLoad();
    potterApp.getSorted();
    potterApp.startAdventure();
    potterApp.begin();
}

// document ready
$(document).ready(function(){
    potterApp.init();
});