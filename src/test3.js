
var Module = function() {
    var self = this;
    this.mc = {};

    this.f = function(name) {
        var x = self.mc[name] = {};
        var b = self[name];
        self[name] = function() {
            var args = Array.prototype.slice.call(arguments);
            x[args] = x[args] || b.apply(this, arguments);
            return x[args];
        };
    };
};