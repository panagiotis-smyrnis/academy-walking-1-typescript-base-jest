import { BankService, Printer, StringPrinter } from "../main/BankService";
import { mock } from "jest-mock-extended";
import DateTimeFormat = Intl.DateTimeFormat;

describe("Bank Service test", () => {
  it("should print just the headers", async () => {
    const printer = new StringPrinter();
    const spy = jest.spyOn(printer, "print");

    const bankService = new BankService(printer);
    bankService.printStatement();
    expect(spy).toHaveBeenCalled();
    expect(printer.printBuffer).toBe("Date || Amount || Balance");
  });

  it("should print one deposit", async () => {
    const printer = new StringPrinter();
    const spy = jest.spyOn(printer, "print");

    Date.now = jest.fn(() => new Date(Date.UTC(2012, 1, 10)).valueOf());

    const bankService = new BankService(printer);
    bankService.deposit(1000);
    bankService.printStatement();
    expect(spy).toHaveBeenCalled();
    expect(printer.printBuffer).toBe(
      "Date || Amount || Balance\n10/01/2012 || 1000 || 1000"
    );
  });

  it("should print two deposits", async () => {
    const printer = new StringPrinter();
    const spy = jest.spyOn(printer, "print");

    const bankService = new BankService(printer);
    Date.now = jest.fn(() => new Date(Date.UTC(2012, 1, 10)).valueOf());
    bankService.deposit(1000);
    Date.now = jest.fn(() => new Date(Date.UTC(2012, 1, 15)).valueOf());
    bankService.deposit(2000);
    bankService.printStatement();
    expect(spy).toHaveBeenCalled();
    expect(printer.printBuffer).toBe(
      "Date || Amount || Balance\n10/01/2012 || 1000 || 1000\n15/01/2012 || 2000 || 3000"
    );
  });
});
