class Address {
    constructor(street, city, state) {
        this.street = street;
        this.city = city;
        this.state = state;
    }
}


class Employee {
    constructor(name, age, phone, address) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.phone = phone;
    }
}

const emp = new Employee('John');
console.log(emp);

const emp1 = new Employee('John', undefined, undefined , new Address('123 Main St', 'New York', 'NY'));
console.log(emp1);