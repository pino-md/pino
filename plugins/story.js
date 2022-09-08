let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/Story.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© https://pinomd.rf.gd', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['story']
handler.tags = ['asupan']
handler.limit = 0
handler.command = /^(story)$/i

module.exports = handler
