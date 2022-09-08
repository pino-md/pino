let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/rikagusriani?apikey=QyF3VhyE', 'rikagusriani.mp4', 'Nih kak', m)
}
handler.help = ['rikagusriani']
handler.tags = ['asupan']

handler.command = /^(rikagusriani)$/i
handler.register = true
handler.limit = 1
module.exports = handler