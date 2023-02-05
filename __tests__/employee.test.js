

const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("getName", () => {
    it("returns 'jag'", () => {
      expect(new Employee("jag", "1", "jag@jag.com").getName()).toBe("jag");
    });
  });

  describe("getId", () => {
    it("returns '1'", () => {
      expect(new Employee("jag", "1", "jag@jag.com").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns 'jag@jag.com'", () => {
      expect(new Employee("jag", "1", "jag@jag.com").getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getRole", () => {
    it("returns 'Employee'", () => {
      expect(new Employee("jag", "1", "jag@jag.com").getRole()).toBe("Employee");
    });
  });
});