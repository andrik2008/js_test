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

/*
var reduced = _.map(plates, function(plate){
    return _.reduce(plate.forks, function(memo, item){
        return memo + item.shinyness;
    }, 0);
});
*/

var sorted = _.sortBy(plates, function(plate){
    return _.reduce(plate.forks, function(memo, item){
        return memo + item.shinyness;
    }, 0);
});
console.log(JSON.stringify(plates));
//console.log(JSON.stringify(reduced));
console.log(JSON.stringify(sorted));