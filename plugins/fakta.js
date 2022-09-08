let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
  ddd = await fetch('http://restapi.frteam.xyz/fakta?&apikey=rdculous')
  f = await ddd.json()
let anu =`
───────〔 *Fakta Unik* 〕────────
${f.result}
`
  conn.sendBut(m.chat, anu, wm, 'Fakta Unik', '.faktaunik', m) 
} 
handler.help = ['faktaunik']
handler.tags = ['internet']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.limit = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler