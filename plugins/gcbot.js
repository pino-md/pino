let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, {
  text: `Nih kak link Group RPG BOT\n Jangan lupa Join dan Share yh`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Group BOT`,
      url: 'https://chat.whatsapp.com/BP4sCRPHudDGtSOjQvXTGH'
    }
  }],
  footer: wm
})
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot|groupbot)$/i

module.exports = handler
