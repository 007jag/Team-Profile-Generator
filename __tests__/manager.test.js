// Invoke npm test Manager to use this test

const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
  describe("getName", () => {
    it("returns jag", () => {
      expect(new Manager("jag", "1", "jag@jag.com", "13").getName()).toBe("jag");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Manager("jag", "1", "jag@jag.com", "13").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns jag@jag.com", () => {
      expect(new Manager("jag", "1", "jag@jag.com", "13").getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getRole", () => {
    it("returns Manager", () => {
      expect(new Manager("jag", "1", "jag@jag.com", "13").getRole()).toBe("Manager");
    });
  });
});