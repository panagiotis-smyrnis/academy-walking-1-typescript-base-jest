import { AccountService } from "./AccountService";


export interface Transaction {
  date: string,
  amount: number,
}

export interface Printer {
  print(transactions: Transaction[]): string;
}

export class StringPrinter implements Printer {
  public printBuffer: string = "";
  print(transactions: Transaction[]): string {
    this.printBuffer = "Date || Amount || Balance";
    return "Date || Amount || Balance";
  }

}


export class BankService implements AccountService {
  printer: Printer;
  private date: Date;
  constructor(printer: Printer, date: Date) {
    this.printer = printer;
    this.date = date;
  }

  deposit(amount: number): void {
    throw new Error("Method not implemented.");
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  printStatement(): void {
    this.printer.print([]);
  }
}
