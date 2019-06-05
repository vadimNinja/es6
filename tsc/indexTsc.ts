class User {

    private isTeacher: boolean = true;
    protected age: number = 30;

    constructor(public name: string, public job?: string) {}

    getAge(): number {
        return this.age;
    }

}

const user = new User('WFM', 'Frontend');
const user2 = new User('WFM');
console.log(user);
console.log(user2);
