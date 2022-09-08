let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/hijaber'
conn.sendFile(m.chat, supa, null, 'hijaber.jpg', m)
}
handler.help = ['hijab']
handler.tags = ['asupan']
handler.limit = true
handler.command = /^(hijab)$/i

module.exports = handler