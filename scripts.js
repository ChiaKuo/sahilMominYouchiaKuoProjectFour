const potterApp = {};
potterApp.key = '$2a$10$giwowS/BIXhApClXp86ptu2X/k4gC80zFZM8sxnDRlUSReHJnH1JO';
potterApp.url = 'https://www.potterapi.com/v1/';
potterApp.spells = [];
potterApp.characters = [];
potterApp.houses = [];

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

potterApp.getHouses = function () {
    $.ajax({
        url: `${potterApp.url}houses`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: potterApp.key,
            format: 'json',
        }
    }).then((res) => {
        res.forEach(element => potterApp.houses.push(element)
        )
    })
}

potterApp.sortHat = function () {
    $.ajax({
        url: `${potterApp.url}sortingHat`,
        method: 'GET',
        dataType: 'json',
        data: {
            format: 'json',
        }
    }).then((res) => {
        console.log(res)
    })     
}

potterApp.getSpells();
potterApp.getCharacters();
potterApp.getHouses();
potterApp.sortHat();
