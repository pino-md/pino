let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/hentai?apikey=1786a002f3', 'hentai.jpg', 'Nih kak', m)
}
handler.help = ['hentai']
handler.tags = ['asupan']

handler.command = /^(hentai)$/i
handler.register = true
handler.premium = true
handler.limit = 1
module.exports = handler