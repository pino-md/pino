let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢PINO\nSubscribe : https://instagram.com/pinomodz', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = true

module.exports = handler
