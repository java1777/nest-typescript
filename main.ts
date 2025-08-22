abstract class Transport {
    abstract move(): void
}

class Car extends Transport {
    move(): void {
        console.log('Car is moving on road');
    }
}

class Bike extends Transport {
    move(): void {
        console.log('Bike is moving fast');
    }
}

class Plane extends Transport {
    move(): void {
        console.log('Plane is flying');
    }
}

const car = new Car()
const bike = new Bike()
const plane = new Plane()

// car.move()
// bike.move()
// plane.move()

// ----------------------------------------------

// 2 - Misol
abstract class Area{
    abstract area(): void
}

class Circle extends Area {
    public Radius: number
    constructor(Radius:number) {
        super()
        this.Radius = Radius
    }
    area(): void {
        console.log(`Circle area: ${(3.14 * this.Radius * this.Radius).toFixed(2)}`)
    }
}

class Rectangle extends Area {
    width: number
    hight: number
    constructor(width: number, hight: number) {
        super()
        this.hight = hight
        this.width = width
    }
    area(): void {
        console.log('Rectangle area: ' + `${(this.width * this.hight).toFixed(1)}`);
    }
}

class Triangle extends Area {
    first: number
    second: number
    third?: number
    constructor(first: number, second: number, third?: number) {
        super()
        this.first = first
        this.second = second
        this.third = third
    }
    area(): void {
        if (this.third) {
            const perimetr = (this.first + this.second + this?.third) / 2
            const area = Math.sqrt(perimetr * (perimetr - this.first) * (perimetr - this.second) * (perimetr - this.third))
            console.log('Triangle area:' + area);
        } else {
            const result = 1 / 2 * this.first * this.second
            console.log('Triangle area:' + result);
        }

    }
}
const shape: Area[] = [
    new Circle(3),
    new Rectangle(3, 4),
    new Triangle(3, 4, 5)
]
for (let item of shape) {
    // item.area()
}

// ----------------------------------------------

// 3 - Misol
abstract class Animal {
    abstract makeSound(): void
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Wow wow wow');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('Meow, meow');
    }
}

class Cow extends Animal {
    makeSound(): void {
        console.log('Muuuuuu');
    }
}

const animal: Animal[] = [
    new Dog(),
    new Cat(),
    new Cow()
]
for(let item of animal) {
    // item.makeSound()
}

// ----------------------------------------------


// Utils Type
// 1 - Misol
interface IUser {
    name: string,
    email?: string,
    password?: string,
    age?: number
}
const userRequired: Required < IUser > = {
    name: 'Javohir',
    email: 'www.java@gmail.com',
    password: 'java12345',
    age: 28
}
// console.log(userRequired);

// ----------------------------------------------

// 2 - Misol
const updateProfile = (updates: Partial <IUser>) : IUser => {
    const update = {...userRequired, ...updates}
    return update
}
// console.log(updateProfile({name:'Komol'}));
// console.log(updateProfile({age:30,email:'komol123@gmail.com'}));

// ----------------------------------------------

// 3 - Misol
const pickUser: Pick <IUser, 'name' | 'email'> = {
    name: 'Javohir',
    email: 'www.java123@gmail.com'
}
// console.log(pickUser);
const omitUser: Omit <IUser, 'password'>= {
    name: 'Misha',
    email: 'misha111@gmail.com',
    age: 20
}
// console.log(omitUser);

// ----------------------------------------------

// 4 - Misol
type Status = "pending" | "success" | "failed";
const user1:Exclude<Status, 'pending'>='failed'
const user2:Exclude<Status, 'pending'>='success'
// console.log(user1,user2);
const user3:Extract<Status, 'pending' | 'success' >= 'pending'
const user4:Extract<Status, 'pending' | 'success' >= 'success'
// console.log(user3, user4);

// ----------------------------------------------

// 5 - Misol
type Role="admin" | "editor" | "viewer";
const user5:Record<Role,string[]>={
    admin:['Javohir'],
    editor:['Saloxiddin'],
    viewer:['Shirina'],
    mentor:['Komol']
}
// console.log(user5);


// ----------------------------------------------

// 6 - Misol
type nullName=string|undefined|null
const user6:NonNullable<nullName>='Misha'
// const nullUser:NonNullable<nullName>=null
// console.log(user6);

// ----------------------------------------------

// 7 - Misol
const calculate=(a:number,b:number)=>{
    return a+b
}
type typeCalculate=ReturnType<typeof calculate>
type paramsCalculate=Parameters<typeof calculate>

const result:typeCalculate=7
const result2:paramsCalculate=[3,5]
console.log(result2);
console.log(result);