import { AccountService } from "./AccountService";

export interface Transaction {
  date: Date;
  amount: number;
  balance: number;
}

export interface Printer {
  print(transactions: Transaction[]): string;
}

export class StringPrinter implements Printer {
  public printBuffer: string = "";
  print(transactions: Transaction[]): string {
    this.printBuffer = "Date || Amount || Balance";
    transactions.forEach(
      (transaction) =>
        (this.printBuffer += `\n${transaction.date.getDate()}/0${transaction.date.getMonth()}/${transaction.date.getFullYear()} || ${
          transaction.amount
        } || ${transaction.balance}`)
    );

    return this.printBuffer;
  }
}

export class BankService implements AccountService {
  printer: Printer;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(printer: Printer) {
    this.printer = printer;
  }

  deposit(amount: number): void {
    this.balance += amount
    const transaction: Transaction = {
      date: new Date(Date.now()),
      amount,
      balance: this.balance,
    };
    this.transactions.push(transaction);
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  printStatement(): void {
    this.printer.print(this.transactions);
  }
}
