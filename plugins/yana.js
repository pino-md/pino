let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/yana?apikey=QyF3VhyE', 'yana.mp4', '© https://pinomdstore.6te.net', m)
}
handler.help = ['yana']
handler.tags = ['asupan']

handler.command = /^(yana)$/i
handler.register = true
handler.limit = 1
module.exports = handler