let sides;

function die(sides) {
    let roll = Math.floor(Math.random() * sides) + 1;
    document.getElementById("yourRoll").innerHTML = roll;
    console.log(roll);
    return roll;
}

/* Unit Tests*/

if (die(6) > 6) {
    throw new error("A D6 Die threw over a six");
}
if (die(20) < 1) {
    throw new error("A roll threw less than 1");
}
