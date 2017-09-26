

var stack = {};

export default {

    setItem : (name,value) => {
        if (typeof stack[name] !== 'undefined')  { console.warn(name+' is already used in Stack')}
        stack[name] = value;
    },
    deleteItem : (name) => {
        delete stack[name];
    },
    getItem : (name) => {
        return stack[name];
    }

}