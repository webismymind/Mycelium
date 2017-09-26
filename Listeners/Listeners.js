

var registeredListeners = {};


var Listener = class {

    constructor(name) {
        this.registeredCallbacks = [];
        this.properties = {};
        registeredListeners[name] = this;
    }

    addProperty(name,property) {
        this.property[name] = property;
    }

    registerCallback(callback) {

        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        this.registeredCallbacks.push(callback);
    }

    trigger() {
        for (let i = 0; i < this.registeredCallbacks.length; i++) {
            this.registeredCallbacks[i](this.properties);
        }
    }
};

export default    {

    Listener : Listener,
    getListener : (name) => {
        if (registeredListeners[name] === 'undefined') {
            return new Listener(name);
        }
        return registeredListeners[name];
    }
}