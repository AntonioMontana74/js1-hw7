class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    
    print() {
        console.log(`Имя - ${this.name}; Возраст - ${this.age}`);
    }
}
let user = new User("Нурислам", 15);

class Student extends User {
    #password;
    
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }
    
    print(Password) {
        if (Password === this.#password) {
            console.log(`Имя - ${this.name}; Возраст - ${this.age}; Имя - ${this.username}`);

    } else {
      console.log("Имя пользователя или пароль неверны");
    }
}
}


let student = new Student("Нурислам", 15, "CHEL", "nur1212");

student.print("nur1212");


