class BankAccount {
  static newWorth = 0

  constructor(name, type) {
    this.name = name
    this.type = type
    this.balance = 0
    this.overdraft = 0
  }

  deposit(amount) {
    this.balance += amount
    BankAccount.newWorth += amount
  }

  withdraw(amount) {
    this.balance -= amount
    BankAccount.newWorth -= amount

    if (amount > this.balance) {
      this.overdraft += 20
      console.log("Overdraft fee")
    }
  }
}

class ChildBankAccount extends BankAccount {
  constructor(name) {
    super(name, "checking")
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Careful! You don't have enough money")
    } else {
      this.balance -= amount
      BankAccount.newWorth -= amount
    }
  }
}

const grace = new BankAccount("Grace", "checking")
grace.deposit(999)
grace.withdraw(1000)
grace.withdraw(2000)
console.log(grace.balance)
console.log(grace.overdraft)

const child = new ChildBankAccount("Bodhi")
child.deposit(10)
child.withdraw(100)
console.dir(child)
