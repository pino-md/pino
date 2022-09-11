let handler = async(m,{text, conn}) => {
let supa = 'https://restapi-pino.herokuapp.com/api/wallpaper/nsfwloli?apikey=kontol'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['loli']
handler.tags = ['asupan']
handler.command = /^(loli)$/i

module.exports = handler
