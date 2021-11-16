const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};



Park.prototype.addADinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};


Park.prototype.removeADinosaur = function(index) {
    this.dinosaurs.splice(index, 1);
};


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








module.exports = Park;