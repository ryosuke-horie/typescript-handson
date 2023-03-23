class Person {
    name: string = 'no-name'
    mail?:string
    age?:number

    constructor(name:string, mail:string = 'no-mail', age:number = -1) {
        this.name = name
        this.mail = mail
        this.age = age
    }

    print():void {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')')
    }
}

const taro = new Person('taro', 'yamada@example.com', 18)
taro.print()


// getter, setter + privateの組み合わせが用いられることもある。
