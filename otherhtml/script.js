// Array to store user accounts
let accounts = [];

// Function to create a new account
function createAccount(event) {
    event.preventDefault(); // Prevent form from submitting and page refresh

    // Get values from form fields
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if the username already exists
    if (accounts.find(account => account.username === username)) {
        // Show error message if username exists
        document.getElementById("message").textContent = "Username already taken! Please choose a different one.";
        document.getElementById("message").style.color = "red";
        return;
    }

    // Create a new account and add it to the list
    let newAccount = { username: username, password: password };
    accounts.push(newAccount);

    // Show success message
    document.getElementById("message").textContent = "Account created successfully!";
    document.getElementById("message").style.color = "green";

    // Clear the form inputs
    document.getElementById("accountForm").reset();

    // Update the list of accounts
    displayAccounts();
}

// Function to display the list of created accounts
function displayAccounts() {
    let accountList = document.getElementById("accountList");
    accountList.innerHTML = ""; // Clear the current list

    // Loop through the accounts and display them
    accounts.forEach(account => {
        let li = document.createElement("li");
        li.textContent = `Username: ${account.username}, Password: ${account.password}`;
        accountList.appendChild(li);
    });
}
