const Employee = require("../lib/Employee")

test("creates an employee object", () => {
    const employee = new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee")

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
})

test("gets employee name", () => {
    const employee = new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee")
    expect(employee.name).toBe("Nick");
})

test("gets employee id", () => {
    const employee = new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee")
    expect(employee.id).toBe(10);
})
    

test("gets employee email", () => {
    const employee = new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee")
    expect(employee.email).toBe("yoyo4games@yahoo.com");
})

test("gets employee role", () => {
    const employee = new Employee("Nick", 10, "yoyo4games@yahoo.com", "Employee")
    expect(employee.role).toEqual("Employee");
})