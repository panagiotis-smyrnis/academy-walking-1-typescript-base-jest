import { BankService, Printer } from "../main/BankService";
import { mock } from "jest-mock-extended";

describe("Bank Service test", () => {
  it("should print a default empty statement", async () => {
    const printer = mock<Printer>();
    printer.print.mockReturnValue("Date||Amount||Balance");

    const bankService = new BankService(printer);
    bankService.printStatement();
    expect(printer.print()).toBe("Date||Amount||Balance");
  });
});
