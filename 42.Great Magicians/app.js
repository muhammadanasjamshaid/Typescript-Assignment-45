function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["Anas", "Shadman", "Aman"];
// show_magicians(magician);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
var magicians2 = ["Anas", "Shadman", "Aman"];
make_great(magicians2);
show_magicians(magicians2);
