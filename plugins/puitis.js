let fetch = require('node-fetch')
let zzz = []
fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/kata-kata.txt')
    .then(res => res.text())
    .then(txt => zzz = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = zzz[Math.floor(Math.random() * zzz.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', 'Nih puitisnya', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['puitis']
handler.tags = ['maker']
handler.limit = 5
handler.command = /^(puitis)$/i

module.exports = handler

