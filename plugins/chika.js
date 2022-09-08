let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/chika?apikey=QyF3VhyE', 'chika.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['chika']
handler.tags = ['asupan']

handler.command = /^(chika)$/i
handler.register = true
handler.limit = 1
module.exports = handler
