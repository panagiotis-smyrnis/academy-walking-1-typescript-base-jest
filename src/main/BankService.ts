import { AccountService } from "./AccountService";

export interface Printer {
  print(): string;
}

export class BankService implements AccountService {
  printer: Printer;
  constructor(printer: Printer) {
    this.printer = printer;
  }

  deposit(amount: number): void {
    throw new Error("Method not implemented.");
  }
  withdraw(amount: number): void {
    throw new Error("Method not implemented.");
  }
  printStatement(): void {
    throw new Error("Method not implemented.");
  }
}
