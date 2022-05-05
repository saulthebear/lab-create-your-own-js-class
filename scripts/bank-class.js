class BankAccount {
  static bankVault = 0

  constructor(name, type) {
    this.name = name
    this.type = type
    this.balance = 0
    this.overdraft = 0
  }

  deposit(amount) {
    this.balance += amount
    BankAccount.bankVault += amount
  }

  withdraw(amount) {
    this.balance -= amount
    BankAccount.bankVault -= amount

    if (amount > this.balance) {
      this.overdraft += 20
      console.log(
        `You're too poor, ${this.name}. An overdraft fee has been issued`
      )
    }
  }
}

class ChildBankAccount extends BankAccount {
  constructor(name) {
    super(name, "checking")
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Careful, ${this.name}! You don't have enough money`)
    } else {
      this.balance -= amount
      BankAccount.bankVault -= amount
    }
  }
}

const stefanAccount = new BankAccount("Stefan", "checking")
stefanAccount.deposit(999)
stefanAccount.withdraw(1000)
stefanAccount.deposit(5000)
stefanAccount.withdraw(2000)
console.log(stefanAccount.balance)
console.log(stefanAccount.overdraft)

const childAccount = new ChildBankAccount("Bodhi")
childAccount.deposit(10)
childAccount.withdraw(100)
console.dir(childAccount)
