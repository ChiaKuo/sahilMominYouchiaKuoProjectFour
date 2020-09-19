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
potterApp.key = '$2a$10$giwowS/BIXhApClXp86ptu2X/k4gC80zFZM8sxnDRlUSReHJnH1JO';
potterApp.url = 'https://www.potterapi.com/v1/';
potterApp.spells = [];
potterApp.characters = [];
potterApp.fourOptions = [];
potterApp.name = {firstName: "", lastName: ""};
// potterApp.charmsArray = potterApp.spells.filter(spell => spell.type == "Charm");
// potterApp.profArray = potterApp.characters.filter(char => char.role == "Professor");

potterApp.generateAnswers = function() {
    for (let i = 0; i < 4; i++) {
        potterApp.populateArray(potterApp.fourOptions);
    }
}

potterApp.populateArray = function(array) {
    // we need to work on this
    const number = Math.floor(Math.random() * charmsArray.length);
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (number == array[i] ) {
            quizApp.populateArray(array);
        }
    }
    array.push(number);
}



potterApp.getSpells = function () {
    $.ajax({
        url: `${potterApp.url}spells`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: potterApp.key,
            format: 'json',
        }
    }).then((res) => {
        res.forEach((element) => {
            let spellObject =  {
                spell: element.spell,
                type: element.type,
                effect: element.effect,
            }
            potterApp.spells.push(spellObject)
        })
    })
}

potterApp.getCharacters = function () {
    $.ajax({
        url: `${potterApp.url}characters`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: potterApp.key,
        }
    }).then((res) => {
        res.forEach((element) => {
            let charObject =  {
                id: element._id,
                name: element.name,
                role: element.role,
                house: element.house,
                ministryOfMagic: element.ministryOfMagic,
                orderOfThePhoenix: element.orderOfThePhoenix,
                dumbledoresArmy: element.dumbledoresArmy,
                deathEater: element.deathEater,
                bloodStatus: element.bloodStatus,
                species: element.species,
            }
            potterApp.characters.push(charObject)
        })
    })
}


potterApp.sortHat = $.ajax({
    url: `${potterApp.url}sortingHat`,
    method: 'GET',
    dataType: 'json',
});

potterApp.getSorted = () => {
    $( "#sort" ).submit(function( event ) {
        event.preventDefault(event);
        if ($("#firstName").val() == '' || $("#lastName").val() == "" ) {
            alert('Please fill in your full name!');
        } else {
            potterApp.sortHat.then((res) => {
                $(`.${res.toLowerCase()}`).css("display", "flex");
                $(".startAdventure").css("display", "block");
                $(".studentHouse").text(res);
                potterApp.name.firstName = $("#firstName").val();
                potterApp.name.lastName = $("#lastName").val();
                console.log(potterApp.name);
                
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



// potterApp.getSpells();
// potterApp.getCharacters();
potterApp.init = function() {
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