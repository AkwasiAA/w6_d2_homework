const Park = function(name, ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];

}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurs.pop(dinosaur);
}


module.exports = Park;