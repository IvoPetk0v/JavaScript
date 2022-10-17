class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        this.validateInput(name, salary, position, department);
        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push({ name: name, salary: salary, position: position })
        } else {
            this.departments[department] = [];
            this.departments[department].push({ name: name, salary: salary, position: position });
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestDepartName = "";
        let bestAvrSalary = 0;
        for (const dep in this.departments) {
            let currDep = this.departments[dep];
            let currAvrSalary = 0;
            for (const worker of currDep) {
                currAvrSalary += worker.salary;
            }
            currAvrSalary /= currDep.length;
            if (currAvrSalary > bestAvrSalary) {
                bestAvrSalary = currAvrSalary;
                bestDepartName = dep;
            }
        }

        this.departments[bestDepartName].sort((a, b) => {
            if (a.salary !== b.salary) {
                return b.salary - a.salary;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
        let result = `Best Department is: ${bestDepartName}\n`;
        result += `Average salary: ${bestAvrSalary.toFixed(2)}\n`;
        for (let index = 0; index < this.departments[bestDepartName].length; index++) {
            let element = this.departments[bestDepartName][index];
            if (index === this.departments[bestDepartName].length - 1) {
                result += `${element.name} ${element.salary} ${element.position}`;
            } else {
                result += `${element.name} ${element.salary} ${element.position}\n`;
            }
        }
        return result;
    }
    validateInput(name, salary, position, department) {
        isParamValid(name);
        isParamValid(salary);
        isParamValid(position);
        isParamValid(department);
        if (salary < 0) {
            throw new Error("Invalid input!");
        }
        function isParamValid(param) {
            if (param === undefined || param === null || param === "") {
                throw new Error("Invalid input!");
            }
            return true;
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
//expexted output:
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
