let handler = async (m, { conn }) => {
    conn.tebakpemainbola = conn.tebakpemainbola ? conn.tebakpemainbola : {}
    let id = m.chat
    if (!(id in conn.tebakpemainbola)) throw false
    let json = conn.tebakpemainbola[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakpemainbola[id][0])
}
handler.command = /^tekpe$/i
handler.limit = true

module.exports = handler