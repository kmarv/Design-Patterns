class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
}

class Employee {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.address = address;
    this.age = age;
    this.phone = phone;
  }
}


let employee = new Employee('John');
console.log(employee);

let employee1 = new Employee('John', { age: 30});
console.log(employee1);

let employee2 = new Employee('John', { age: 30, phone: '555-555-5555', address: new Address('123 Main St', 'New York', 'NY')});
console.log(employee2);