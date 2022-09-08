let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢PINO\nSubscribe : https://instagram.com/pinomodz', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanrandom']
handler.tags = ['asupan']
handler.limit = true
handler.command = /^(cecanrandom)$/i

module.exports = handler
