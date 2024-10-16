let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    // Corrected condition: skip only strings starting with "A"
    if ((typeof friends[index] === "string" && friends[index].startsWith("A")) || typeof friends[index] === "number") {
        index++;
        continue; // Skip this iteration
    }

    console.log(++counter + " => " + friends[index]);
    index++;
}
