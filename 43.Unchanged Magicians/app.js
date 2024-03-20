function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians, great_magicians) {
    magicians.forEach(function (magician, index) {
        great_magicians[index] = "The Great " + magician;
    });
}
var magicians = ["Anas", "Aman", "Shadman"];
var great_magicians = [];
make_great(magicians, great_magicians);
show_magicians(magicians);
show_magicians(great_magicians);
