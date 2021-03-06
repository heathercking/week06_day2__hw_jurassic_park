const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    this.dietInventory = {
        'carnivore': 0,
        'herbivore': 0,
        'omnivore': 0,
    };
};



Park.prototype.addADinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};


Park.prototype.removeADinosaur = function(index) {
    this.dinosaurs.splice(index, 1);
};

// OR better way of doing it without hardcoding...
// Park.prototype.remove = function (dinosaur) {
//     const index = this.dinosaurs.indexOf(dinosaur);
//     this.dinosaurs.splice(index, 1);
//   }


Park.prototype.findDinosaurWithMostVisitors = function() {
    let highestGuests = 0;
    let topDinosaur;

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestGuests) {
            topDinosaur = dinosaur
            highestGuests = dinosaur.guestsAttractedPerDay
        };
    };

    return topDinosaur;
};


Park.prototype.findDinosaursBySpecies = function(species) {
    let speciesList = []

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            speciesList.push(dinosaur)
        };
    };

    return speciesList;
};


Park.prototype.countDailyVisitors = function() {
    let dailyVisitors = 0;

    for (const dinosaur of this.dinosaurs) {
        dailyVisitors += dinosaur.guestsAttractedPerDay
    };

    return dailyVisitors;
};


Park.prototype.countAnnualVisitors = function() {
    dailyVisitors = this.countDailyVisitors();
    annualVisitors = dailyVisitors * 364; //closed on Christmas Day! And not including a leap year...
    return annualVisitors;
};


Park.prototype.calculateAnnualRevenue = function() {
    annualVisitors = this.countAnnualVisitors();
    annualRevenue = annualVisitors * this.ticketPrice;
    return annualRevenue;
};


Park.prototype.removeASpeciesOfDinosaur = function(species) {
    dinosaurs = this.dinosaurs;
    result = dinosaurs.filter(dinosaur => dinosaur.species !== species);
    this.dinosaurs = result;
};


Park.prototype.countDinosaursByDiet = function() {
    let carnivore = 0;
    let herbivore = 0;
    let omnivore = 0;

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.diet === 'carnivore') {
            carnivore += 1;
            console.log(carnivore)
        } if (dinosaur.diet === 'herbivore') {
            herbivore += 1;
            console.log(herbivore)
        } if (dinosaur.diet === 'omnivore') {
            omnivore += 1;
        };
    };

    this.dietInventory.carnivore = carnivore;
    this.dietInventory.herbivore = herbivore;
    this.dietInventory.omnivore = omnivore;

    console.log(this.dietInventory);
    return this.dietInventory
};




module.exports = Park;