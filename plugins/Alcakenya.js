let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/alcakenya?apikey=QyF3VhyE', 'alcakenya.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['alcakenya']
handler.tags = ['asupan']

handler.command = /^(alcakenya)$/i
handler.register = true
handler.limit = 1
module.exports = handler
