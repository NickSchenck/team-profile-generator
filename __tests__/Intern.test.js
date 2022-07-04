const Intern = require("../lib/Intern")

test("creates a intern object", () => {
    const intern = new Intern("Nick", 10, "yoyo4games@yahoo.com", "UofM")

    expect(intern.school).toEqual(expect.any(String));
})

test("gets employee role", () => {
    const intern = new Intern("Nick", 10, "yoyo4games@yahoo.com")
    
    expect(intern.getRole()).toEqual("Intern");
})