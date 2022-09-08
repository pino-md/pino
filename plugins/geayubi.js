let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/geayubi?apikey=QyF3VhyE', 'geayubi.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['geayubi']
handler.tags = ['asupan']

handler.command = /^(geayubi)$/i
handler.register = true
handler.limit = 1
module.exports = handler
