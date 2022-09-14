const Algo = require("../lib/Employee");

describe("Employee", () => {
  describe("getname", () => {
    it("should reverse a given string", () => {
      const str = "Hello World!";
      const reversed = "!dlroW olleH";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversed);
    });
  });

  describe("getid", () => {
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });

  });

  describe("getemail", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
  describe("getrole", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});
it('sum 2 numbers',() => {


});
