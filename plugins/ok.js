let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let stiker = await sticker(null, 'https://upload.kilers-beta.eu.org/puApulsV5M6D.png', 'BOT ONLINE', 'Zahra Wibu')
  if (stiker) return conn.sendFile(m.chat, stiker, 'ONLINE.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.customPrefix = /^(tes|bot|bot online?|oy bot|Trimakasi|tq|thanks|trimakasih|makasi|hai bot|)$/i
handler.command = new RegExp

module.exports = handler
