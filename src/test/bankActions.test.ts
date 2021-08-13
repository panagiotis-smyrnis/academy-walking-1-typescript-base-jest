import {BankService, Printer, StringPrinter} from "../main/BankService";
import { mock } from "jest-mock-extended";
import DateTimeFormat = Intl.DateTimeFormat;

describe("Bank Service test", () => {

  it("should print just the headers", async () => {
    const printer = new StringPrinter();
    const spy = jest.spyOn(printer, 'print');
    const dateTime = mock<Date>();

    const bankService = new BankService(printer, dateTime);
    bankService.printStatement();
    expect(spy).toHaveBeenCalled();
    expect(printer.printBuffer).toBe("Date || Amount || Balance");
  });

  it("should print one deposit", async () => {
    const printer = new StringPrinter();
    const spy = jest.spyOn(printer, 'print');
    const dateTime = mock<Date>();
    dateTime.toDateString.mockReturnValue('10/01/2012');

    const bankService = new BankService(printer, dateTime);
    bankService.deposit(1000);
    bankService.printStatement();
    expect(spy).toHaveBeenCalled();
    expect(printer.printBuffer).toBe("Date || Amount || Balance\n10/01/2012 || 1000 || 1000");
  });
});
