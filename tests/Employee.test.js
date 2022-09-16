const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("GetName", () => {
    it("Valid Name", () => {
        const reversed = "Carlos";
        const Employee_ = new Employee("Carlos","carlos@gmail.com","1","Office 2");
        var result = Employee_.getName();
        expect(result).toEqual(reversed);
    });
  });
  describe("getEmail", () => {
    it("Valid Email", () => {
        const reversed = "carlos@gmail.com";
        const Employee_ = new Employee("Carlos","carlos@gmail.com","1","Office 2");
        var result = Employee_.getEmail();
        expect(result).toEqual(reversed);
    });
  });
  describe("getId", () => {
    it("Valid Id", () => {
        const reversed = "1";
        const Employee_ = new Employee("Carlos","carlos@gmail.com","1","Office 2");
        var result = Employee_.getId();
        expect(result).toEqual(reversed);
    });
  });
  describe("getRoleEmploye", () => {
    it("Valid all information", () => {
        const reversed = "Employee";
        const Employee_ = new Employee("Carlos","carlos@gmail.com","1","Office 2");
        var result = Employee_.getRoleEmploye();
        expect(result).toEqual(reversed);
    });
  });
});
