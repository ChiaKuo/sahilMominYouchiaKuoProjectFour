const potterApp = {};
// potterApp.command = "";
potterApp.key = '$2a$10$giwowS/BIXhApClXp86ptu2X/k4gC80zFZM8sxnDRlUSReHJnH1JO';
potterApp.url = 'https://www.potterapi.com/v1/';
potterApp.spells = [];
potterApp.characters = [];


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
                $(".studentHouse").text(res)
                
            })
            // used to disable resubmitting form, lock input text
            $("#sort input[type='submit'], #sort input[type='name']").attr("disabled", true);
        }
    });
}

potterApp.startAdventure = () => {
    $(".startAdventure button").click((event) => {
        event.preventDefault(event);
        console.log('click')
        $(".preStoryPage, .beginScenario").css("display", "block");
        $(".housePage, .introPage, header p").css("display", "none");
    })
}



// potterApp.getSpells();
// potterApp.getCharacters();
potterApp.init = function() {
    potterApp.getSorted();
    potterApp.startAdventure();
}
$(document).ready(function(){
potterApp.init();
});
