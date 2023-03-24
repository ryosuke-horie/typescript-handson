// マップ型(キーと値のセット) PHPでいう連想配列
type stringArray = {
    [key in string]: string
}

const deta1:stringArray = {
    'start': '最初の値',
    'middle': '中間の値',
    'end': '最後の値'
}

deta1['finish'] = '**おしまい**'
deta1[100] = 'OK' // 100は文字列になる
console.log(deta1)

enum human {name='name', mail='mail'}

type HumanMap = {
    [key in human]: string
}

const taro:HumanMap = {
    name: 'Taro',
    mail: 'taro@yamada'
}
console.log(taro)

const hana:HumanMap = {
    name: 'Hana',
    mail: 'hana@flower'
}

console.log(hana)

// Map型では用意されたキーがないとエラーになる
// つまりあらかじめ用意されるキーが確定している場合に使う

// Record型/Pick型もある
// Record型は定型のデータを扱うときに使う
// Pick型は既存の型から一部のプロパティを抜き出すときに使う



// イテレータクラスの例
class MyData<T> {
    data: T[] = []
    
    constructor(...data: T[]) {
        this.data = data
    }

    add(val: T) {
        this.data.push(val)
    }

    [Symbol.iterator]() {
        let pos = 0
        let items = this.data

        return {
            next(): IteratorResult<T> {
                if (pos >= items.length) {
                    return {
                        done: false,
                        value: items[pos++]
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }
}

const data = new MyData<string>('One', 'Two', 'Three')

// 実行するとdataオブジェクトから順に値を出力する
for (let item of data) {
    console.log(item)
}