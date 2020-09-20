const potterApp = {};

potterApp.scenarios = [
    {
        question: `It's the day of the first task, and you're as ready as you will ever be. Waiting in the tent, listening to the crowd's screams and the roars of the dragon, horrible pictures start forming in your mind. You shake your head in frustration and attempt to focus on the one spell that you practiced since you received Professor Moody's advice.
        "Annnnnd give it up for the Hogwarts Champion: ${firstName} ${lastName}!"
        In no time at all, your name is called. You slowly make your way to the stadium, where hundreds of students are cheering and jeering your name.
        At this point, you don't even care. Directly within your field of vision was the Hungarian Horntail. Over fifty feet long, covered in black scales, and with a tail covered in lethal spikes, you instead notice the gleaming golden egg nested within the dragon egg pile.
        "3....2....1....Begin!"
        The whistle is blown. With every fiber of being, you raise your wand and bellow the following incantation:`,
        answer: ["accio"],
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    }
]

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
        potterApp.profArray = res.filter(char => char.role != undefined && char.role.toLowerCase().includes("professor") && (char.deathEater == false || char.orderOfThePhoenix == true));
    });
    potterApp.getSpells.then((res) => {
        potterApp.charmsArray = res.filter(spell => spell.type.toLowerCase() == "charm");
        potterApp.harmSpellsArray = res.filter(spell => spell.type.toLowerCase() == "curse" || spell.type.toLowerCase() == "hex");
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
                potterApp.name = {
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val()
                } 
            })
            // used to disable resubmitting form, lock input text
            $("#sort input[type='submit'], #sort input[type='name']").attr("disabled", true);
        }
    });
}

potterApp.startAdventure = () => {
    $(".startAdventure button").click((event) => {
        event.preventDefault(event);
        $(".preStoryPage, .beginScenario").css("display", "block");
        $(".housePage, .introPage, header p").css("display", "none");
    })
}

potterApp.begin = () => {
    $(".beginScenario button").click((event) => {
        event.preventDefault(event);
        $(".preStoryPage, .beginScenario").css("display", "none");
    })
}

// potterApp.scenarioGenerate = () => {
    // for (i = 0, i < potterApp.scenarios.length, i++) {
        // $(".continue").css("display", "none");
        // $(".scenarioPage h2").text(potterApp.scenarios[i].question)
            //  for (a = 0, a < potterApp.fourOptions.length, a++) {
            // $(".option" + (a + 1)).text(potterApp.fourOptions[a])
            // }
        // promise statement
            // button listener for correct click {
            // }.then $(".scenarioPage h2").text(potterApp.scenarios[i].end)
            // $(".continue").css("display", "block");
    // }
// }


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