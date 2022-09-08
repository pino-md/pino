let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/viona?apikey=QyF3VhyE', 'viona.mp4', '© https://pinomdstore.6te.net', m)
}
handler.help = ['viona']
handler.tags = ['asupan']

handler.command = /^(viona)$/i
handler.register = true
handler.limit = 1
module.exports = handler