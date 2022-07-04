const Engineer = require("../lib/Engineer")

test("creates a engineer object", () => {
    const engineer = new Engineer("Nick", 10, "yoyo4games@yahoo.com", "https://github.com/NickSchenck")

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets employee role", () => {
    const engineer = new Engineer("Nick", 10, "yoyo4games@yahoo.com")
    
    expect(engineer.getRole()).toEqual("Engineer");
})