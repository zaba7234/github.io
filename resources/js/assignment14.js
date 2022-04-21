// Problem 1, 2, and 3
console.log("Problem 1, 2, and 3\n-------------------")
let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        },
        {
            "firstName": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
        }
    ]
}

console.log("Company Info");
console.log(company);

// Problem 4
console.log("Problem 4\n---------");
function calcTotalSalary(company) {
    let totalSalary = 0;
    for (let i = 0; i < company.employees.length; i++) {
        totalSalary += company.employees[i].salary;
    }
    console.log("Total Salary of all Employees: $" + totalSalary);
}

calcTotalSalary(company)

// Problem 5
console.log("Problem 5\n---------");
function raiseEligibleEmployees(company) {
    for (let i = 0; i < company.employees.length; i++) {
        if (company.employees[i].raiseEligible === true) {
            console.log(company.employees[i].firstName + " is eligible for a raise");
            console.log(company.employees[i].firstName + "'s pre-raise salary: $" + company.employees[i].salary);
            company.employees[i].salary *= 1.10;
            console.log(company.employees[i].firstName + "'s post-raise salary: $" + company.employees[i].salary);
        }
        else
        {
            console.log(company.employees[i].firstName + " is not eligible for a raise");
        }
        console.log("****************");
    }
}

raiseEligibleEmployees(company);

// Problem 6
console.log("Problem 6\n---------")

let wfhArray= ["Anna", "Sam"];
function workFromHome(company, workingFromHome) {
    for (let i = 0; i < company.employees.length; i++) {
        company.employees[i].wfh = false;
        for (let j = 0; j < wfhArray.length; j++) {
            if (company.employees[i].firstName === wfhArray[j]) {
                company.employees[i].wfh = true;
            }
        }
        if (company.employees[i].wfh === true) {
            console.log(company.employees[i].firstName + " does work from home");
        }
        else {
            console.log(company.employees[i].firstName + " does not work from home");
        }
    }
}

workFromHome(company, wfhArray);