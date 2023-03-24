import exp from "constants"

// 名前空間
namespace myapp {
    namespace foundation {

        export interface printable {
            print(): void
        }

        export interface stringable {
            getString(): string
        }
    }

    export type Person = {
        name: string
        age: number
    }

    export class MyData implements foundation.printable, foundation.stringable {
        peple: Person[] = []
    
        constructor() {}

        add(nm:string, ag:number) {
            this.peple.push({name: nm, age: ag})
        }

        print() {
            console.log('*** mydata ***\n' + this.getString())
        }

        getString() {
            let res = '[\n'
            for(let item of this.peple) {
                res += `  {name: ${item.name}, age: ${item.age}},\n`
            }
            return res + ']'
        }
    }
}


const mydata = new myapp.MyData()
mydata.add('Taro', 30)
mydata.add('Hanako', 20)
mydata.add('Sachiko', 40)
mydata.print()