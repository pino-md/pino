let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/ukhty?apikey=QyF3VhyE', 'ukhty.mp4', '© https://pinomdstore.6te.net', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']

handler.command = /^(ukhty)$/i
handler.register = true
handler.limit = 1
module.exports = handler