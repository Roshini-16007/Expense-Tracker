const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");

const API_URL = "http://127.0.0.1:8000/api/expenses/";


/* ADD EXPENSE */

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const expense = {
        title: document.getElementById("title").value,
        amount: document.getElementById("amount").value,
        category: document.getElementById("category").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value
    };

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(expense)

        });

        if (response.ok) {

            alert("Expense added successfully! 💜");

            form.reset();

            loadExpenses();

        } else {

            alert("Failed to add expense.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to the server.");

    }

});


/* LOAD EXPENSES */

async function loadExpenses() {

    try {

        const response = await fetch(API_URL);

        const expenses = await response.json();

        console.log("Expenses received:", expenses);

        expenseList.innerHTML = "";

        let total = 0;


        expenses.forEach(function (expense) {

            total += parseFloat(expense.amount);


            const item = document.createElement("div");

            item.className = "expense-item";


            item.innerHTML = `
                <div>

                    <div class="expense-title">
                        ${expense.title}
                    </div>

                    <div class="expense-category">
                        ${expense.category} • ${expense.date}
                    </div>

                </div>


                <div>

                    <div class="expense-amount">
                        ₹${expense.amount}
                    </div>

                    <button onclick="editExpense(${expense.id})">
                        ✏️ Edit
                    </button>

                    <button onclick="deleteExpense(${expense.id})">
                        🗑️ Delete
                    </button>

                </div>
            `;


            expenseList.appendChild(item);

        });


        /* UPDATE TOTAL */

        document.getElementById("totalAmount").textContent =
            "₹" + total.toFixed(2);


        /* UPDATE COUNT */

        document.getElementById("expenseCount").textContent =
            expenses.length;


    } catch (error) {

        console.error("Error loading expenses:", error);

    }

}


/* DELETE EXPENSE */

async function deleteExpense(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this expense?"
    );

    if (!confirmDelete) {

        return;

    }


    try {

        const response = await fetch(
            API_URL + id + "/",
            {
                method: "DELETE"
            }
        );


        if (response.ok) {

            alert("Expense deleted successfully! 🗑️");

            loadExpenses();

        } else {

            alert("Failed to delete expense.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to the server.");

    }

}


/* EDIT EXPENSE */

async function editExpense(id) {

    try {

        const response = await fetch(
            API_URL + id + "/"
        );

        const expense = await response.json();


        const newTitle = prompt(
            "Enter new title:",
            expense.title
        );

        if (newTitle === null) {
            return;
        }


        const newAmount = prompt(
            "Enter new amount:",
            expense.amount
        );

        if (newAmount === null) {
            return;
        }


        const newCategory = prompt(
            "Enter new category:",
            expense.category
        );

        if (newCategory === null) {
            return;
        }


        const newDate = prompt(
            "Enter new date (YYYY-MM-DD):",
            expense.date
        );

        if (newDate === null) {
            return;
        }


        const newDescription = prompt(
            "Enter new description:",
            expense.description
        );

        if (newDescription === null) {
            return;
        }


        const updatedExpense = {

            title: newTitle,

            amount: newAmount,

            category: newCategory,

            date: newDate,

            description: newDescription

        };


        const updateResponse = await fetch(
            API_URL + id + "/",
            {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(updatedExpense)

            }
        );


        if (updateResponse.ok) {

            alert("Expense updated successfully! ✏️");

            loadExpenses();

        } else {

            alert("Failed to update expense.");

        }

    } catch (error) {

        console.error(error);

        alert("Cannot connect to the server.");

    }

}


/* LOAD DATA WHEN PAGE OPENS */

loadExpenses();