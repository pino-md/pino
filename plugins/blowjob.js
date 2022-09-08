let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/blowjob?apikey=QyF3VhyE', 'Nih', m)
}
handler.help = ['blowjob']
handler.tags = ['asupan']

handler.command = /^(blowjob|blow|job)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler
