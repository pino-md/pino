/*let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yang mau di penjara?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu untu di penjarakan'
    let users = global.db.data.users
    users[who].penjara = true
    conn.reply(m.chat, `berhasil di penjara`, m)
}
handler.help = ['penjarakan']
handler.tags = ['rpg']
handler.botAdmin = true
handler.command = /^penjarakan$/i
handler.group = true

module.exports = handler*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}penjarakan number|days\n*Example:* ${usedPrefix}penjarakan 6285162778904|1\n\n• ${usedPrefix}penjarakan @tag|days\n*Example:* ${usedPrefix}penjarakan @⁨+62 851-6277-8904⁩|1`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 1 * hl[1]
  // var jumlahHari = 1 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].penjaraDate) global.db.data.users[hl[0]].penjaraDate += jumlahHari
  else global.db.data.users[hl[0]].penjaraDate = now + jumlahHari
  conn.reply(m.chat,`*TERPENJARA*\n\nKamu di penjarakan *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*penjara : ${msToDate(global.db.data.users[hl[0]].penjaraDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`*TERPENJARA*\n\nKamu di penjarakan *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*penjara : ${msToDate(global.db.data.users[hl[0]].penjaraDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['penjarakan *@tag|days*']
handler.tags = ['rpg']
handler.command = /^penjarakan$/i
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}
