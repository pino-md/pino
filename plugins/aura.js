let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/aura?apikey=QyF3VhyE', 'aura.mp4', '© https://pinomd.rf.gd', m)
}
handler.help = ['aura']
handler.tags = ['asupan']

handler.command = /^(aura)$/i
handler.register = true
handler.limit = 1
module.exports = handler
