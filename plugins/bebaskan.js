/*let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Siapa yang mau di bebaskan?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu untuk di bebaskan'
    let users = global.db.data.users
    users[who].penjara = false
    conn.reply(m.chat, `berhasil bebaskan`, m)
}
handler.help = ['bebaskan']
handler.tags = ['rpg']
handler.command = /^bebaskan$/i

handler.group = true
handler.admin = true
handler.botAdmin = true
module.exports = handler*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}bebaskan number|days\n*Example:* ${usedPrefix}bebaskan 6285162778904|1\n\n• ${usedPrefix}bebaskan @tag|days\n*Example:* ${usedPrefix}bebaskan @6285162778904|1`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].banned = false
  global.db.data.users[text].penjaraDate = 0
  conn.reply(m.chat,`*Berhasil bebaskan dari penjara @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['bebaskan']
handler.tags = ['rpg']
handler.command = /^bebaskan$/i

handler.group = true
handler.admin = true
handler.limit = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
