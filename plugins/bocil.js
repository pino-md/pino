let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/bocil?apikey=QyF3VhyE', 'bocil.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['bocil']
handler.tags = ['asupan']

handler.command = /^(bocil)$/i
handler.register = true
handler.limit = 1
module.exports = handler
