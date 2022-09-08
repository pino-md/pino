let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/ziva?apikey=QyF3VhyE', 'ziva.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['ziva']
handler.tags = ['asupan']

handler.command = /^(ziva)$/i
handler.register = true
handler.limit = 1
module.exports = handler
