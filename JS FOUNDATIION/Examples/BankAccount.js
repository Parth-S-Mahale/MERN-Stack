// Task 1: Encapsulation Using Private Fields and Methods

class BankAccount {
  #_balance;

  constructor(balance = 0) {
    if (balance < 0) throw new Error("Initial balance cannot be negative.");
    this.#_balance = balance;
  }

  get balance() {
    return this.#_balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative.");
    } else {
      this.#_balance = amount;
    }
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#_balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.#_balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#_balance) {
      throw new Error("Insufficient balance.");
    }
    this.#_balance -= amount;
    console.log(`Withdrew: ${amount}. New balance: ${this.#_balance}`);
  }
}

// Example usage:
try {
  const account = new BankAccount(100);
  account.deposit(50);
  account.withdraw(30);
  account.withdraw(200); // This will throw an exception
  account.balance = -20; // This will also throw an exception
} catch (error) {
  console.error(error.message);
}
