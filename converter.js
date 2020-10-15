
/*declare variables*/
var length, width, height;

/*take input from HTML*/

length = document.getElementById("length").value;
width = document.getElementById("width").value;
height = document.getElementById("height").value;

var output = toGallons(length, width, height);
console.log("Output " + output);

function toGallons(length, width, height) {
    var volume, gallons;

    volume = length * width * height;
    gallons = volume / 231;

    return gallons;
}


