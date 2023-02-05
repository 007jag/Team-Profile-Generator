// Invoke npm test Intern to use this test

const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  describe("getName", () => {
    it("returns Jag", () => {
      expect(new Intern("Jag", "1", "jag@jag.com", "UNC").getName()).toBe("Jag");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Intern("Jag", "1", "jag@jag.com", "UNC").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns jag@jag.com", () => {
      expect(new Intern("Jag", "1", "jag@jag.com", "UNC").getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getSchool", () => {
    it("returns UNC", () => {
      expect(new Intern("Jag", "1", "jag@jag.com", "UNC").getSchool()).toBe("UNC");
    });
  });

  describe("getRole", () => {
    it("returns Intern", () => {
      expect(new Intern("Jag", "1", "jag@jag.com", "UNC").getRole()).toBe("Intern");
    });
  });
});