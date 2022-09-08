let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢PINO\nSubscribe : https://instagram.com/pinomodz',m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = true
module.exports = handler

