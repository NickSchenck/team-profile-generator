const generateManager = manager => {
    return `
    <div class="d-flex flex-wrap justify-content-center vh-100 align-items-center">
        <div class="card" style="width: 18rem;">
            <div class="bg-primary">
                <h3 class="ml-3">${manager.name}</h3>
                <div class="d-inline-flex">
                    <img class="card-img-top oi oi-briefcase ml-3" src="" alt="">
                    <h4 class="ml-3">Manager</h4>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>

            </div>
        </div>
    </div>
    `
}

const generateEngineer = engineer => {
    return `
    <div class="d-flex flex-wrap justify-content-center vh-100 align-items-center">
        <div class="card" style="width: 18rem;">
            <div class="bg-primary">
                <h3 class="ml-3">${engineer.name}</h3>
                <div class="d-inline-flex">
                    <img class="card-img-top oi oi-beaker ml-3" src="" alt="">
                    <h4 class="ml-3">Engineer</h4>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="card-text">GitHub: <a href="http://github.com/${engineer.github}">${engineer.github}</a></p>

            </div>
        </div>
    </div>
    `
}

const generateIntern = intern => {
    return `
    <div class="d-flex flex-wrap justify-content-center vh-100 align-items-center">
        <div class="card" style="width: 18rem;">
            <div class="bg-primary">
                <h3 class="ml-3">${intern.name}</h3>
                <div class="d-inline-flex">
                    <img class="card-img-top oi oi-book ml-3" src="" alt="">
                    <h4 class="ml-3">Intern</h4>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text">School: ${intern.school}</p>

            </div>
        </div>
    </div>
    `
}

generateHTML = data => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join("")

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = employeeCards => {
    return`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./s.css" />
</head>

<body>
    <header class="bg-danger text-center" id="header">My Team</header>
    ${employeeCards}
</body>

</html>
    `;
}

module.exports = generateSite;