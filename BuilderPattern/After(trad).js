class Address {
    constructor(street, city, state) {
        this.street = street;
        this.city = city;
        this.state = state;
    }
}


class Employee {
    constructor(name) {
        this.name = name;
        ;
    }
}

class EmployeeBuilder {
    constructor(name) {
        this.employee = new Employee(name);
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    build() {
        return this.employee;
    }
}


let employee = new EmployeeBuilder('John').setAge(30).setPhone('555-555-5555').setAddress(new Address('123 Main St', 'New York', 'NY')).build();
console.log(employee);

// let employee1 = new EmployeeBuilder('John').build();
// console.log(employee1);

// let employee2 = new EmployeeBuilder('John').setAge(30).build();
// console.log(employee2);