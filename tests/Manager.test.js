const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOffice", () => {
    it("Valid Office", () => {
        const reversed = "Office 2";
        const Manager_ = new Manager("Carlos","carlos@gmail.com","1","Office 2");
        var result = Manager_.getOffice();
        expect(result).toEqual(reversed);
    });
  });
  describe("getRole", () => {
    it("Valid all information", () => {
        const Manager_ = new Manager("Carlos","carlos@gmail.com","1","Office 2");
        var result = Manager_.getRole();
        const reversed = "Manager";
        expect(result[4]).toEqual(reversed);
    });
  });
});
