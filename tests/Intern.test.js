const Intern = require("../lib/Intern");

describe("Manager", () => {
  describe("getSchool", () => {
    it("Valid School", () => {
        const reversed = "University of new Hampshire";
        const Intern_ = new Intern("Maria","Maria@gmail.com","2","University of new Hampshire");
        var result = Intern_.getSchool();
        expect(result).toEqual(reversed);
    });
  });
  describe("getRole", () => {
    it("Valid all information", () => {
        const Intern_ = new Intern("Maria","Maria@gmail.com","2","University of new Hampshire");
        var result = Intern_.getRole();
        const reversed = "Intern";
        expect(result[4]).toEqual(reversed);
    });
  });
});