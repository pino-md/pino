/*const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkabupaten[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  Kabupaten apakah ini?
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebu untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendFile(m.chat, json.url, caption, '', 'Bantuan', '.tebu', m)
    ,await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.sendFile(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, '', 'Tebak Kabupaten', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i

module.exports = handler*/
