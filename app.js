class SimpleUser {
    static #messages = [];
    constructor(name, age, number, address, email) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.address = address;
        this.email = email;
    }
    getMessages() {
        return SimpleUser.#messages
    }

    addMessage(message) {
        SimpleUser.#messages.push(message);
    }
}

class PremiumUser extends SimpleUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    setNewEmojes() {
        console.log('New Emojes');
    }
}
class AdminUser extends PremiumUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    getAllInformation() {
        console.log(this);
    }
}
class SuperAdmin extends AdminUser {
    constructor(name, age, number, address, email) {
        super(name, age, number, address, email)
    }
    changeInformation(name, age, number, address, email) {
        this.name = name;
        this.age = age;
        this.number = number;
        this.address = address;
        this.email = email;
        return this;
    }
}
let user = new AdminUser('fazliddin', 32, 234231, 'LA', '@gmail.com');
let supperAdmin = new SuperAdmin('Tom', 32, 1234567, 'LA', '@mail.com');
console.log(supperAdmin.changeInformation('ford', 32, 324, 'fdas', 'ffdas'));
supperAdmin.addMessage('Hi my first message');
supperAdmin.addMessage('Hi there');
console.log(supperAdmin.getMessages(), supperAdmin);