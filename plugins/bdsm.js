let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/bdsm?apikey=QyF3VhyE', 'bspm.jpg', 'Nih', m)
}
handler.help = ['bdsm']
handler.tags = ['asupan']

handler.command = /^(bd|sm|bdsm)$/i

handler.premium = true
handler.private = false
handler.limit = 1
module.exports = handler
