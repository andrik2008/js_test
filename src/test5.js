var input = [
    { name: 'a', test: function() { return true; }, value: function() { return 1; }  },
    { name: 'b', test: function() { return true; }, value: function() { return 1; }  },
    { name: 'c', test: function() { return false; }, value: function() { return 1; }  },
    { name: 'd', test: function() { return true; }, value: function() { return 2; }  }
]


var input2 = _.map(input, function(item){ return {name: item.name, test: item.test, value: item.value()}});
var filter = _.filter(input2, function(item){ return item.test() == true; });
var group = _.groupBy(filter, 'value');
var result = _.map(group, function(list, key) {
    var obj = {};
    obj[key] = _.map(list, function(item) { return "the '" + item.name + "' object"});
    return obj;
});
console.log(JSON.stringify(result));
