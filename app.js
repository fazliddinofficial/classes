class SimpleUser {
    constructor(name, age, number, address, email) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.address = address;
        this.email = email;
    }
}
class premiumUser extends SimpleUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    setNewEmojes() {
        console.log('New Emojes');
    }
}
class adminUser extends premiumUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    getAllInformation() {
        console.log(this);
    }
}
class SuperAdmin extends adminUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    changeInformation(name,age,number,address,email) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.address = address;
        this.email = email;
        return this;
    }
}
let user = new adminUser('fazliddin', 32, 234231, 'LA', '@gmail.com');
let One = new SuperAdmin('Tom', 32, 1234567, 'LA', '@mail.com');
console.log(One.changeInformation('ford', 32,324, 'fdas','ffdas'));
