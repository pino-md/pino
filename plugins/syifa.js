let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/syifa?apikey=QyF3VhyE', 'syifa.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['syifa']
handler.tags = ['asupan']

handler.command = /^(syifa)$/i
handler.register = true
handler.limit = 1
module.exports = handler
