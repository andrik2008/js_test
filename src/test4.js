String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
};

String.prototype.padLeft = function (length, character) {
    return new Array(length - this.length + 1).join(character || '0') + this;
};

function getRandValue() {
    return Math.floor((Math.random()*100)+1);
}

var Model = function(date, value) {
    return {
        created_at : date,
        value : value
    }
}

var collection = [
    Model(new Date(2013, 1, 1), getRandValue()),
    Model(new Date(2013, 1, 2), getRandValue()),
    Model(new Date(2013, 1, 3), getRandValue()),
    Model(new Date(2013, 1, 4), getRandValue()),
    Model(new Date(2013, 1, 5), getRandValue()),
    Model(new Date(2013, 1, 6), getRandValue())
]

var generateBalloonXML = function(collection) {

    var balloons = $('<balloons>').attr('codeA', 101).attr('status_code', 'ebutuoy');
    var balloon_counts = $('<balloon_counts>').appendTo(balloons);
    for (var i=0; i<collection.length; i++) {
        var item = collection[i];

        var curr_date = item.created_at.getDate();
        var curr_month = item.created_at.getMonth() + 1; //Months are zero based
        var curr_year = item.created_at.getFullYear();

        var created = "{0}::{1}::{2}__".format(
            curr_year,
            curr_date.toString().padLeft(2),
            curr_date.toString().padLeft(2));

        balloon_counts.append($('<count>').attr('created_at', created).append(item.value));
    }

    var serializer = new XMLSerializer ();
    return serializer.serializeToString (balloons[0]);
};

console.log(generateBalloonXML(collection));