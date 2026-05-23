
let yazi = "Bu gün hava çox gözəldir";
let birləsmə = "";

for (let saygac = 0; saygac < yazi.length; saygac++) {
    if (yazi[saygac] !== " ") {
        birləsmə += yazi[saygac];
    }
}

console.log(birləsmə);