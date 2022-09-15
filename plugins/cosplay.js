let handler = async(m,{text, conn}) => {
let supa = 'https://docs-pinomodz.herokuapp.com/api/random/cosplay?apikey=kontol'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['cosplay']
handler.tags = ['asupan']
handler.limit = true
handler.command = /^(cosplay)$/i

module.exports = handler
