// 1. Keep your array to store the data! (State Management)
let expenses = [];

// 2. Select the elements from the DOM
let itemNameInput = document.getElementById("item-name");
let itemPriceInput = document.getElementById("item-price");
let addButton = document.getElementById("add-btn");
let expenseList = document.getElementById("expense-list");
let totalDisplay = document.getElementById("total-display");
let errorMsg = document.getElementById("error-msg");

// 3. The main Event Listener (Replaces your while(true) loop)
addButton.addEventListener("click", function () {

    // Extract the values
    let item_name = itemNameInput.value;
    let item_price = Number(itemPriceInput.value);

    // Replicating your validation logic
    if (item_name === "" || itemPriceInput.value === "") {
        errorMsg.innerText = "❌ Error: Please fill in both fields.";
        errorMsg.style.display = "block";
        return; // Stop the function
    }

    if (isNaN(item_price) || item_price <= 0) {
        errorMsg.innerText = "❌ Error: Invalid amount. Please enter a valid number.";
        errorMsg.style.display = "block";
        return; // Stop the function
    }

    // Hide error message if everything is correct
    errorMsg.style.display = "none";

    // 4. Replicating your items() logic: Add to the array
    expenses.push({ name: item_name, cost: item_price });
    console.log(`✅ Added: ${item_name} for ₹${item_price}`);

    // 5. Update the UI
    renderList();
    calculateTotal();

    // Clear the inputs for the next item
    itemNameInput.value = "";
    itemPriceInput.value = "";
});

// Replicating your view_list() function, but for the DOM
function renderList() {
    // First, clear the current visual list so we don't get duplicates
    expenseList.innerHTML = "";

    // Loop through your array and create an <li> for each object
    expenses.forEach(function (item, index) {
        let li = document.createElement("li");
        li.innerText = `${index + 1}. ${item.name}: ₹${item.cost}`;
        li.classList.add("expense-item");
        expenseList.appendChild(li);
    });
}

// Replicating your total_cost() function, but for the DOM
function calculateTotal() {
    let total = 0;
    expenses.forEach(function (item) {
        total += item.cost;
    });

    // Update the visual total on the screen
    totalDisplay.innerText = `Total cost: ₹${total}`;
}