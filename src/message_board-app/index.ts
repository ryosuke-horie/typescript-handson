let nickname: HTMLInputElement
let message: HTMLInputElement
let table: HTMLTableElement
const url = 'https://for-message-board-sample-default-rtdb.firebaseio.com/board.json'

function doAction():void {
    const data = {
        nickname: nickname.value,
        message: message.value,
        posted: new Date().getTime()
    }
    sendData(url, data)
}

function doDelete():void {
    fetch(url, {method: 'DELETE'}).then(res=>{
        console.log(res.statusText)
        getData(url)
    })
}

function sendData(url: string, data:object) {
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>{
        console.log(res.statusText)
        getData(url)
    })
}

function getData(url: string) {
    fetch(url).then(res=>res.json()).then(re=>{
        let result = `<thead>
            <tr><th>Message</th>
            <th>Posted</th></tr>
            </thead><tbody>`
        let tb = ''
        for (let ky in re) {
            let item = re[ky]
            tb += '<tr><td>' + item['message'] + '</td><td>' + item['nickname'] + '</td></tr>' + new Date(item['posted']).toLocaleString() + '</td></tr>' + tb
        }
        result += tb + '</tbody>'
        table.innerHTML = result
    })
}


window.addEventListener('load', ()=>{
    message = document.querySelector('#message')
    nickname = document.querySelector('#nickname')
    table = document.querySelector('#table')
    const btn: HTMLButtonElement = document.querySelector('#btn')
    btn.onclick = doAction
    const del: HTMLButtonElement = document.querySelector('#delete')
    del.onclick = doDelete
    getData(url)
})
