// const person = {
//     name: "taro",
//     age: 30,
//     print: function():void {
//         console.log(this.name + '(' + this.age + ')')
//     }
// }

// person.print()
// person.name = 'hanako'
// person.age = 20
// person.print()

// const person = Object()
// person.name = 'taro'
// person.age =39
// person.print = function():void {
//     console.log(this.name + '(' + this.age + ')')
// }

// ファクトリ関数
// 同じ関数をいくつでも作成する仕組み
// function person(n:string, a:number):{name:string, age:number, print: ()=>void} {
//     return {
//         name:n,
//         age:a,
//         print: function() {
//             console.log(this.name + '(' + this.age + ')')
//         }
//     }
// }

// const taro = person('taro', 39)
// const hana = person('hana', 20)
// taro.print()
// hana.print()


// オブジェクトを引数に使う
// 注意：この場合、引数にはオブジェクトそのものが渡されていて、複製したわけではない
// つまり値が変わることに注意


// オブジェクトの分割代入
type person = {name:{first:string, second:string}, age:number}    // person型を定義

const ob1:person = {name:{first:'taro', second:'yamada'}, age:39}
const {name:{first,second}, age} = ob1                            // first,second,ageの３つの変数をオブジェクトの構造にしたがって定義。
// const {name:{first}} = ob1                                     // firstのみがほしい場合はオブジェクトの構造にしたがうとこんな感じ
console.log(first + '-' + second + '::' + age)


// プロパティのオプション：名前の後に？をつけるとnullを許容する
// Readonly: 書き込み禁止にする。