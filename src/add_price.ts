console.log("Node path = " + process.argv[0])
console.log("Script file path = " + process.argv[1])

const data: number[] = []
for(var i = 2; i < process.argv.length; i++) {
    data.push(Number(process.argv[i]))
}
console.log('parameters: ' + data)

const f = aggregate()

for (let item of data) {
    const res = f(item)
    console.log(item + ' = ' + res)
}

/**
 * クロージャで合計を計算する
 * 今回は１度出力するだけだが、本来はクロージャを使って引数が更新されるまで戻り値の値が保持されるので
 * グローバル変数を減らすときや疑似的なプライベート変数がほしいときに使用される。
 * @returns 
 */
function aggregate(): (n: number)=>[number,number,number,number,number] {
    let total = 0
    let totalp = 0
    let totalt = 0

    return (n:number):[number,number,number,number,number] => {
        total += n
        let tax = Math.floor(n - n / 1.1)
        totalp += n-tax
        totalt += tax
        return [n,tax,total,totalp,totalt]
    }
}