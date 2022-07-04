const Manager = require("../lib/Manager")

test("creates a manager object", () => {
    const manager = new Manager("Nick", 10, "yoyo4games@yahoo.com", 5)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets employee role", () => {
    const manager = new Manager("Nick", 10, "yoyo4games@yahoo.com")
    
    expect(manager.getRole()).toEqual("Manager");
})