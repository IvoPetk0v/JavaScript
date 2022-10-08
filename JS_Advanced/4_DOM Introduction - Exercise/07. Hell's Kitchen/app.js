function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


   function onClick() {

      input = JSON.parse(document.getElementById("inputs").children[1].value);
      let bestRestP = document.getElementById("bestRestaurant").children[2];
      let bestWorkerP = document.getElementById("workers").children[2];
      let listOfRest = [];

      class Restaurant {
         constructor(name, workers) {
            this.name = name;
            this.workers = workers;
         }

         AverrageSalary() {
            let result = 0;
            let sumSalary = 0;
            this.workers.forEach(element => {
               sumSalary += element.salary
            });
            result = sumSalary / this.workers.length;
            return result;
         }

         BestSalary() {
            let result = Math.max.apply(Math, this.workers.map(w => w.salary));
            return result;
         }

      }
      class Worker {
         constructor(name, salary) {
            this.name = name;
            this.salary = salary;
         }
      }

      input.forEach(element => {
         restName = element.split(" - ")[0];
         workerData = element.split(" - ")[1].split(", ");
         workerList = [];
         for (let i = 0; i < workerData.length; i++) {
            let currWorker = workerData[i].split(" ");

            workerList.push(new Worker(currWorker[0], Number(currWorker[1])));
         }

         if (listOfRest.includes(r => r.name === restName)) {
            rest = listOfRest.find(r => r.name === restName);
            rest.workers.concat(workerList);
         } else {
            listOfRest.push(new Restaurant(restName, workerList));
         }

      });
      let maximum = Math.max.apply(Math, listOfRest.map(r => r.AverrageSalary()));
      let winnerRest = listOfRest.find(e => e.AverrageSalary() == maximum);
      let bestRest = `Name: ${winnerRest.name} Average Salary: ${winnerRest.AverrageSalary().toFixed(2)} Best Salary: ${winnerRest.BestSalary().toFixed(2)}`
      bestRestP.textContent = bestRest;
      winnerRest.workers.sort((a, b) => (a.salay > b.salary) ? 1 : ((a.salary > b.salary) ? -1 : 0));
      let bestWorker = "";
      winnerRest.workers.forEach(element => {
         bestWorker += `Name: ${element.name} With Salary: ${element.salary}` + "<br>";
      });
      bestWorkerP.innerHTML = bestWorker;
   }
}