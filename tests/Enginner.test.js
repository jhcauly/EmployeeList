const Enginner = require("../lib/Enginner");

describe("Enginner", () => {
  describe("getGit", () => {
    it("Valid Github", () => {
        const reversed = "jhcauly";
        const Enginner_ = new Enginner("Pedro","Pedro@gmail.com","3","jhcauly");
        var result = Enginner_.getGit();
        expect(result).toEqual(reversed);
    });
  });
  describe("getRole", () => {
    it("Valid all information", () => {
        const Enginner_ = new Enginner("Pedro","Pedro@gmail.com","3","jhcauly");
        var result = Enginner_.getRole();
        const reversed = "Enginner";
        expect(result[4]).toEqual(reversed);
    });
  });
});