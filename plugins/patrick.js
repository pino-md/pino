let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://zenzapis.xyz/randomimage/patrick?apikey=1786a002f3'), 'Nih Petricknya © https://pinomd.rf.gd', wm, 'NEXT', '/patrik', m)
}

handler.help = ['patrik']
handler.tags = ['fun']
handler.command = /^(patrik|petrik)$/i
handler.limit = 3
module.exports = handler
