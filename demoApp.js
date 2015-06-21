if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var angular2_bootstrap_1 = require('angular2-bootstrap/angular2-bootstrap');
var DemoAppCmp = (function () {
    function DemoAppCmp() {
        var _this = this;
        this.progressbarValue = 10;
        setInterval(function () {
            _this.progressbarValue = Math.random() * 100;
            console.log(_this.progressbarValue);
        }, 2000);
    }
    DemoAppCmp.prototype.updateValue = function () {
        console.log('UPDATE');
        this.abc = 100;
    };
    DemoAppCmp = __decorate([
        angular2_1.Component({
            selector: 'demo-app'
        }),
        angular2_1.View({
            template: "\n    <h2 (click)=\"updateValue()\">Progressbar</h2>\n    {{ abc }}\n    <boot-progressbar [value]=\"progressbarValue\"></boot-progressbar>",
            directives: [angular2_bootstrap_1.Progressbar]
        })
    ], DemoAppCmp);
    return DemoAppCmp;
})();
angular2_1.bootstrap(DemoAppCmp);
//# sourceMappingURL=demoApp.js.map