// Here the “person” class to hold all the details:


class Person {
    constructor(name,age,gender,height,weight,address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.address = address;
    }

    getname() {
        return this.name;
    }

    getage() {
        return this.age;
    }

    getaddress() {
        return this.address;
    }
}

const man = new Person("Thiru",24, "male",68,6.12, "1,sakthi nagar, chrompet");

console.log(man)

console.log(man.getage())