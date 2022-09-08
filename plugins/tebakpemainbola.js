/*let fetch = require('node-fetch')

let timeout = 180000
let poin = 50000
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakpemainbola = conn.tebakpemainbola ? conn.tebakpemainbola : {}
  let id = m.chat
  if (id in conn.tebakpemainbola) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakpemainbola[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/tebakpemainbola.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekpe untuk bantuan
Bonus: ${poin} Money
    `.trim()
  conn.tebakpemainbola[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakpemainbola.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakpemainbola[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakpemainbola[id][0])
      delete conn.tebakpemainbola[id]
    }, timeout)
  ]
}
handler.help = ['tebakpemainbola']
handler.tags = ['game']
handler.command = /^tebakpemainbola/i
handler.limit = true
handler.group = true

module.exports = handler*/


let fetch = require('node-fetch')

let timeout = 120000
let poin = 10000
let tiketcoin = 1
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakpemainbola = conn.tebakpemainbola ? conn.tebakpemainbola : {}
    let id = m.chat
    if (id in conn.tebakpemainbola) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakpemainbola[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/EkaBotWhatsapp/Data-Base-story-wa/main/tebakpemainbola.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekpe untuk bantuan
Bonus: ${poin} Money
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.tebakpemainbola[id] = [
        await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakpemainbola[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakpemainbola[id][0])
            delete conn.tebakpemainbola[id]
        }, timeout)
    ]
}
handler.help = ['tebakpemainbola']
handler.tags = ['game']
handler.command = /^tebakpemainbola/i
handler.limit = true
handler.group = true

module.exports = handler