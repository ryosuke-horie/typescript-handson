// interface
enum School {
    junior = 'junior',
    juniorHigh = 'juniorHigh',
    high = 'high',
    other = 'other'
}

interface Human {
    name: string
    print(): void
}

class Person implements Human {
    name: string
    mail?: string
    age?: number
    school: School

    constructor(name: string, mail: string = 'no-mail', age: number = -1, school: School = School.other) {
        this.name = name
        this.mail = mail
        this.age = age
        this.school = school
    }

    print(): void {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')')
    }
}

class Student implements Human {
    name: string
    school?: School
    grade?: number

    constructor(name: string, school?: School, grade?: number) {
        this.name = name
        this.school = school
        this.grade = grade
    }

    print(): void {
        let gd:string = this.grade ? this.grade.toString() : '-'
        console.log(this.name + '(' + this.school + ',' + gd + ')')
    }
}