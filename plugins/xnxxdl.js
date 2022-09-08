let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : .xnxxdl link`
    const sentMsg = await m.reply('*_Tunggu Sebentar Kami Sedang Memprosesnya..._*')
    let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=3765cb30528b&url=${text}`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.result.files.low, 'bkp.mp4', `Title : ${json.result.title}\nLink : ${json.result.link}\n\nVideo msih kurang HD ?coba klik link di bawah ini \n\n\nHD : ${json.result.files.high}`, m)
}
handler.help = ['xnxxdl *link*']
handler.tags = ['downloader', 'asupan']
handler.command = /^xnxxdl$/i

handler.private = true
handler.premium = true
handler.limit = 50

module.exports = handler