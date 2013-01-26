var Plate = function(forks) {
    this.forks = forks;
};
var Fork = function(shinyness) {
    this.shinyness = shinyness;
};

var plates = [
    new Plate([ new Fork(1), new Fork(4), new Fork(7) ]),
    new Plate([ new Fork(9) ]),
    new Plate([ new Fork(21), new Fork(3) ])
];

var sorted = _.sortBy(plates, function(plate){
    return plate.forks.length;
});
console.log(JSON.stringify(plates));
console.log(JSON.stringify(sorted));