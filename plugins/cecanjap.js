let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/japan'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐆𝐞𝐦𝐩𝐲 𝐓𝐨𝐧\nSubscribe : https://www.youtube.com/channel/UCZoVmApPxtLYgUWwBD4nbCw', m)
}

handler.help = ['cecanjapan']
handler.tags = ['asupan']
handler.command = /^(cecanjapan)$/i
handler.limit = true

module.exports = handler
