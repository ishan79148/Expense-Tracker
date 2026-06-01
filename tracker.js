if (typeof prompt === 'undefined') {
    const fs = require('fs');
    globalThis.prompt = function (message) {
        process.stdout.write(message + ': ');
        const buffer = Buffer.alloc(1024);
        try {
            const bytesRead = fs.readSync(0, buffer, 0, 1024, null);
            return buffer.toString('utf8', 0, bytesRead).trim();
        } catch (e) {
            return "";
        }
    };
}

let expenses = []

// function to add items to the expense list
let items = () => {
    item_name = prompt("Enter the item name: ")
    item_price = Number(prompt("Enter the item price: "));
    // validation
    if (isNaN(item_price)) {
        console.log("❌ Error: Invalid amount. Please enter numbers only.");
    } else {
        expenses.push({ name: item_name, cost: item_price });
        console.log(`✅ Added: ${item_name} for ₹${item_price}`);
    };
};

// function for to view items
let view_list = () => {

    if (expenses.length === 0) {
        console.log("❌ Error: No items in the list.");
    } else {
        console.log("💰 List of items:");
        expenses.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name}: ₹${item.cost}`);
        });
    };

};

// function for to calculate total cost
let total_cost = () => {
    let total = 0;
    expenses.forEach((item) => {
        total += item.cost;
    });
    console.log(`💰 Total cost: ₹${total}`);
};

//menu driven loop
// menu driven loop
while (true) {
    console.log("\n1.items\n2.view_list\n3.total_cost\n4.exit");
    let choice = Number(prompt("Enter your choice"));

    if (choice == 1) {
        items();
    } else if (choice == 2) {
        view_list();
    } else if (choice == 3) {
        total_cost();
    } else if (choice == 4) {
        console.log("Goodbye!");
        break;
    } else {
        console.log("invalid choice");
    };
};

