let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/delvira?apikey=QyF3VhyE', 'delvira.mp4', '© https://pinomdstore.6te.net', m)
}
handler.help = ['delvira']
handler.tags = ['asupan']

handler.command = /^(delvira)$/i
handler.register = true
handler.limit = 1
module.exports = handler