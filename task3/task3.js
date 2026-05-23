let eded = prompt("Ədəd daxil edin:");
let sade = true;

for (let i = 2; i < eded; i++) {
    if (eded % i === 0) {
        sade = false;
        break;
    }
}

if (sade) {
   alert(eded + " sadə ədəddir");
} else {
    alert(eded + " mürəkkəb ədəddir");
}