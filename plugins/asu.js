let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/ass?apikey=1786a002f3', 'ass.jpg', 'Nih ass nya', m)
}
handler.help = ['ass']
handler.tags = ['asupan']

handler.command = /^(ass)$/i

handler.premium = true
handler.limit = 1
module.exports = handler