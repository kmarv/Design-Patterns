function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        break;
    }
  };
}

function log() {

  console.log(`${this.name} is a ${this.type}`);
}
    


const employeeFactory = new EmployeeFactory();
const employees = []

employees.push(employeeFactory.create("John", 1));
employees.push(employeeFactory.create("Jane", 2));
employees.push(employeeFactory.create("Jack", 1));
employees.push(employeeFactory.create("Jill", 2));

employees.forEach(emp =>{
    log.call(emp);
});