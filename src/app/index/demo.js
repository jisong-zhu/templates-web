;
(function () {
    'use strict';
    window.DemoWebComponent = class DemoWebComponent {
        constructor(name) {
            this.name = name;
        }
        sayHell() {
            alert(`Hello ${this.name}`);
        }
    };
})();