let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let stiker = await sticker(null, 'https://telegra.ph/file/48554501942147dc354b9.jpg', 'WM', 'ZAHRA')
  if (stiker) return conn.sendFile(m.chat, stiker, 'ONLINE.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.customPrefix = /^(tes|bot|bot online?|oy bot|trimakasi|tq|thanks|ok|oke|mksi|trimakasih|makasi|hai bot|)$/i
handler.command = new RegExp

module.exports = handler
