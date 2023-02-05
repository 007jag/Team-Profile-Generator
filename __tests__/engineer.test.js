// Invoke npm test Engineer to use this test

const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  describe("getName", () => {
    it("returns jag", () => {
      expect(new Engineer("jag", "1", "jag@jag.com", "jagsgithub").getName()).toBe("jag");
    });
  });

  describe("getId", () => {
    it("returns 1", () => {
      expect(new Engineer("jag", "1", "jag@jag.com", "jagsgithub").getId()).toBe("1");
    });
  });

  describe("getEmail", () => {
    it("returns jag@jag.com", () => {
      expect(new Engineer("jag", "1", "jag@jag.com", "jagsgithub").getEmail()).toBe("jag@jag.com");
    });
  });

  describe("getGithub", () => {
    it("returns jagsgithub", () => {
      expect(new Engineer("jag", "1", "jag@jag.com", "jagsgithub").getGithub()).toBe("jagsgithub");
    });
  });

  describe("getRole", () => {
    it("returns Engineer", () => {
      expect(new Engineer("jag", "1", "jag@jag.com", "jagsgithub").getRole()).toBe("Engineer");
    });
  });
});