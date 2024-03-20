var users = ["Admin", "Ali", "Abdullah", "Shadman", "Saqib"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", Thankyou for logging in again"));
    }
}
