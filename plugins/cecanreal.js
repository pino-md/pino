let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/cecan'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢PINO\nSubscribe : https://instagram.com/pinomodz', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = true

module.exports = handler
