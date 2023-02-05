const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer("jag", "1", "jag@jag.com", "jagsgithub");
  });

  describe("getName", () => {
    it("returns jag", () => {
      expect(engineer.getName()).toBe("jag");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(engineer.getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns jag@jag.com", () => {
      expect(engineer.getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getGithub", () => {
    it("returns jagsgithub", () => {
      expect(engineer.getGithub()).toBe("jagsgithub");
    });
  });

  describe("getRole", () => {
    it("returns Engineer", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
