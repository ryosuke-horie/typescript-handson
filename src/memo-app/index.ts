let table:HTMLTableElement
let message:HTMLInputElement

function showTable(html:string) {
    table.innerHTML = html
}

function doAction() {
    const msg = message.value
    memo.add({message:msg,date:new Date()})
    memo.save()
    memo.load()
    showTable(memo.getHtml())
}

function doInitial() {
    memo.data = []
    memo.save()
    memo.load()
    message.value = ''
    showTable(memo.getHtml())
}

type Memo = {
    message: string
    date:Date
}

class MemoData {
    data:Memo[] = []

    add(mm:Memo):void {
        this.data.unshift(mm)
    }

    save():void {
        localStorage.setItem('memo_data', JSON.stringify(this.data))
    }

    load():void {
        const readed = JSON.parse(localStorage.getItem('memo_data'))
        this.data = readed ? readed.data : []
    }

    getHtml():string {
        let html = '<thead><th>momo</th><th>date</th></thead><tbody>'
        for(let item of this.data) {
            html += '<tr><td>' + item.message + '</td><td>' + item.date.toLocaleString() + '</td></tr>'
        }
        return html + '</tbody>'
    }
}

const memo = new MemoData()

window.addEventListener('load', () => {
    table = document.querySelector('#table')
    message = document.querySelector('#message')
    document.querySelector('#btn').addEventListener('click', doAction)
    document.querySelector('#initial').addEventListener('click', doInitial)
    memo.load()
    showTable(memo.getHtml())
})
