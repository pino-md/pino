let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/syania?apikey=QyF3VhyE', 'syania.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['syania']
handler.tags = ['asupan']

handler.command = /^(syania)$/i
handler.register = true
handler.limit = 1
module.exports = handler
