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
  private transactions: Transaction[] = [];

  constructor(printer: Printer) {
    this.printer = printer;
  }

  deposit(amount: number): void {
    const transaction: Transaction = {
      date: new Date(Date.now()),
      amount,
      balance: amount,
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
