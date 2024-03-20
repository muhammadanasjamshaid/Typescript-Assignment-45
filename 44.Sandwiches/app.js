function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("Enjoy your sandwich Anas Sheikh");
sandwich("Capsicum", "Tomato", "Chicken");
sandwich("Garlic", "Cheese");
sandwich("Beef", "Mayo sauce");
