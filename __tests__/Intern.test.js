const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  let intern;

  beforeEach(() => {
    intern = new Intern("Jag", "1", "jag@jag.com", "UNC");
  });

  describe("getName", () => {
    it("returns Jag", () => {
      expect(intern.getName()).toBe("Jag");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(intern.getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns jag@jag.com", () => {
      expect(intern.getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getSchool", () => {
    it("returns UNC", () => {
      expect(intern.getSchool()).toBe("UNC");
    });
  });

  describe("getRole", () => {
    it("returns Intern", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  });
});


